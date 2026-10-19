"""Builds an operator's full voice-line set for the Voice Actors panel, in all four voice languages.

For each operator file passed (basename in src/data/operators/, e.g. `yato`), matches its `name:`
to character_table, then writes:
  public/operators/<dir>/voice/<lang>/<voiceId>.mp3   — <dir> = the operator's existing asset folder
  src/data/voices/<file>.ts                           — titles + per-language text + which audio exists
and wires `voice:` into the operator file (once).

Text: charword_table from ArknightsAssets/ArknightsGamedata (cn/en/jp/kr).
Audio: the local PC client first — the character bundle `<charId>.ab`, then the shared `extra_*.ab`
bundles that hold festival lines (New Year / Birthday / Anniversary) — and PRTS (torappu.prts.wiki)
for anything the client doesn't have, unless --client-only.

Audio is encoded as mono 48 kbps MP3 (MP3_BITRATE in gen_title_voices.py).

Requirements: Python 3.10+, `pip install UnityPy`, ffmpeg on PATH.
The EN client only ships the voice packs of languages the game has been set to; switch Voice Language
in-game to download voice_cn / voice_kr bundles so they can come from the client too.

Usage: python scripts/voice-pipeline/gen_operator_voices.py yato durin [--langs jp,en] [--client-only]
       [--client F:/YostarGames/Arknights_EN]
"""

import argparse
import json
import re
import sys
import tempfile
import time
from pathlib import Path

import UnityPy

from gen_title_voices import (
    CLIENT_BUNDLE_SUBDIR, NON_OPERATOR_PROFESSIONS, OPERATORS_DIR, PROJECT_ROOT, ROSTER_NAME_BY_TABLE_NAME,
    VOICE_FOLDER_BY_LANG, convert_to_mp3, download_from_prts, fetch_json,
)

GAMEDATA_ROOT = 'https://raw.githubusercontent.com/ArknightsAssets/ArknightsGamedata/master'
VOICES_DIR = PROJECT_ROOT / 'src/data/voices'
LANGUAGES = ['jp', 'cn', 'en', 'kr']
# The game's Doctor-name placeholder, filled with each language's own form of address.
DOCTOR_BY_LANG = {'JP': 'ドクター', 'CN': '博士', 'EN': 'Doctor', 'KR': '박사'}


def fill_nickname(text, language):
    text = text.replace('Dr. {@nickname}', 'Doctor')
    return text.replace('{@nickname}', DOCTOR_BY_LANG[language])


def extract_all_from_client(bundle_path, wav_dir):
    """Writes every AudioClip in the bundle as <clip name>.wav; returns the clip names found."""
    if not bundle_path.exists():
        return set()
    found = set()
    for asset in UnityPy.load(str(bundle_path)).objects:
        if asset.type.name != 'AudioClip':
            continue
        clip = asset.read()
        for sample_data in clip.samples.values():
            (wav_dir / f'{clip.m_Name}.wav').write_bytes(sample_data)
            found.add(clip.m_Name)
            break
    return found


_extra_index_cache = {}


def index_extra_bundles(voice_dir):
    """Festival lines (New Year / Birthday / Anniversary) live in shared `extra_*.ab` bundles, not the
    character bundle. Clip names there are bare ('CN_038'), so map them via the container path
    (`dyn/audio/sound_beta_2/<folder>/<charId>/cn_038.ogg`) → {'<charId>/CN_038': (bundle, path)}."""
    if voice_dir in _extra_index_cache:
        return _extra_index_cache[voice_dir]
    index = {}
    for bundle_path in sorted(voice_dir.glob('extra_*.ab')):
        for container_path in UnityPy.load(str(bundle_path)).container:
            parts = container_path.split('/')
            index[f'{parts[-2]}/{Path(parts[-1]).stem.upper()}'] = (bundle_path, container_path)
    _extra_index_cache[voice_dir] = index
    return index


def extract_from_extra(voice_dir, char_id, voice_id, wav_path):
    entry = index_extra_bundles(voice_dir).get(f'{char_id}/{voice_id}')
    if not entry:
        return False
    bundle_path, container_path = entry
    clip = UnityPy.load(str(bundle_path)).container[container_path].read()
    for sample_data in clip.samples.values():
        wav_path.write_bytes(sample_data)
        return True
    return False


def operator_name_and_asset_dir(source):
    name = re.search(r"""name:\s*(['"`])((?:\\.|(?!\1).)*)\1""", source).group(2)
    asset_dirs = re.findall(r"/operators/([^/'\"]+)/", source)
    asset_dir = max(set(asset_dirs), key=asset_dirs.count)
    return re.sub(r'\\(.)', r'\1', name), asset_dir


def find_char_id(character_table, operator_name):
    for char_id, character in character_table.items():
        roster_name = ROSTER_NAME_BY_TABLE_NAME.get(character['name'], character['name'])
        if roster_name == operator_name and character['profession'] not in NON_OPERATOR_PROFESSIONS:
            return char_id
    raise SystemExit(f'{operator_name}: not found in character_table')


def to_const_name(file_stem):
    words = re.split(r'[^0-9a-zA-Z]+', file_stem)
    camel = words[0].lower() + ''.join(word.capitalize() for word in words[1:])
    return ('op' + camel if camel[0].isdigit() else camel) + 'Voice'


def wire_into_operator_file(operator_path, file_stem, const_name):
    source = operator_path.read_text(encoding='utf-8')
    if re.search(r'^\s*voice:', source, re.MULTILINE):
        return False
    source = source.replace(
        "import type { Operator } from '../../types'\n",
        f"import type {{ Operator }} from '../../types'\nimport {const_name} from '../voices/{file_stem}'\n",
        1,
    )
    source, replaced = re.subn(r'^(\s*)(cv: \{[^}]*\},)$', rf'\1\2\n\1voice: {const_name},', source, count=1, flags=re.MULTILINE)
    if not replaced:
        raise SystemExit(f'{operator_path.name}: no single-line `cv: {{...}},` to anchor `voice:` after')
    operator_path.write_text(source, encoding='utf-8')
    return True


def build_operator(file_stem, character_table, charword_tables, client_root, languages, client_only):
    operator_path = OPERATORS_DIR / f'{file_stem}.ts'
    operator_name, asset_dir = operator_name_and_asset_dir(operator_path.read_text(encoding='utf-8'))
    char_id = find_char_id(character_table, operator_name)
    print(f'{operator_name} ({char_id}) → /operators/{asset_dir}/voice', flush=True)

    words_by_lang = {
        language: {word['voiceId']: word for word in table['charWords'].values() if word['wordKey'] == char_id}
        for language, table in charword_tables.items()
    }
    english_words = sorted(words_by_lang['en'].values(), key=lambda word: word['voiceIndex'])
    voice_ids = [word['voiceId'] for word in english_words]
    voice_root = PROJECT_ROOT / 'public/operators' / asset_dir / 'voice'

    for language in languages:
        voice_folder = VOICE_FOLDER_BY_LANG[language]
        output_dir = voice_root / language
        with tempfile.TemporaryDirectory() as temp_dir:
            wav_dir = Path(temp_dir)
            client_voice_dir = client_root / CLIENT_BUNDLE_SUBDIR / voice_folder
            client_clips = extract_all_from_client(client_voice_dir / f'{char_id}.ab', wav_dir)
            prts_count = 0
            for voice_id in voice_ids:
                wav_path = wav_dir / f'{voice_id}.wav'
                if voice_id not in client_clips and extract_from_extra(client_voice_dir, char_id, voice_id, wav_path):
                    client_clips.add(voice_id)
                if voice_id not in client_clips:
                    if client_only:
                        continue
                    time.sleep(0.3)
                    if not download_from_prts(voice_folder, char_id, voice_id, wav_path):
                        continue
                    prts_count += 1
                convert_to_mp3(wav_path, output_dir / f'{voice_id.lower()}.mp3')
        print(f'  {language.upper()}: {len(client_clips)} client, {prts_count} PRTS', flush=True)

    # Availability comes from what's on disk, so clips from earlier runs (other languages, PRTS-only
    # event lines) stay playable when a run only covers some languages.
    audio_by_voice_id = {
        voice_id: [language.upper() for language in LANGUAGES if (voice_root / language / f'{voice_id.lower()}.mp3').exists()]
        for voice_id in voice_ids
    }
    for language in LANGUAGES:
        available = sum(language.upper() in langs for langs in audio_by_voice_id.values())
        print(f'  {language.upper()} on disk: {available}/{len(voice_ids)}', flush=True)

    lines = []
    for english_word in english_words:
        voice_id = english_word['voiceId']
        text = {}
        for language in LANGUAGES:
            word = words_by_lang[language].get(voice_id)
            if word:
                text[language.upper()] = fill_nickname(word['voiceText'].strip(), language.upper())
        lines.append({'id': voice_id.lower(), 'title': english_word['voiceTitle'], 'text': text, 'audio': audio_by_voice_id[voice_id]})

    const_name = to_const_name(file_stem)
    body = (
        "import type { OperatorVoice } from '../../types'\n\n"
        "// Generated by scripts/voice-pipeline/gen_operator_voices.py — do not edit by hand.\n"
        f"const {const_name}: OperatorVoice = {{\n"
        f"  audioDir: '/operators/{asset_dir}/voice',\n"
        f"  lines: {json.dumps(lines, ensure_ascii=False, indent=2).replace(chr(10), chr(10) + '  ')},\n"
        "}\n\n"
        f"export default {const_name}\n"
    )
    VOICES_DIR.mkdir(parents=True, exist_ok=True)
    (VOICES_DIR / f'{file_stem}.ts').write_text(body, encoding='utf-8')
    wired = wire_into_operator_file(operator_path, file_stem, const_name)
    print(f'  {len(lines)} lines → src/data/voices/{file_stem}.ts{" (wired into operator file)" if wired else ""}', flush=True)


def main():
    sys.stdout.reconfigure(encoding='utf-8')
    parser = argparse.ArgumentParser()
    parser.add_argument('operators', nargs='+', help='operator file basenames in src/data/operators/')
    parser.add_argument('--client', default='F:/YostarGames/Arknights_EN')
    parser.add_argument('--langs', default=','.join(LANGUAGES), help='comma-separated audio languages to extract, e.g. jp,en')
    parser.add_argument('--client-only', action='store_true', help='never fall back to PRTS; lines missing from the client stay text-only')
    args = parser.parse_args()
    languages = [language for language in args.langs.split(',') if language in LANGUAGES]

    character_table = fetch_json(f'{GAMEDATA_ROOT}/en/gamedata/excel/character_table.json')
    charword_tables = {language: fetch_json(f'{GAMEDATA_ROOT}/{language}/gamedata/excel/charword_table.json') for language in LANGUAGES}
    for file_stem in args.operators:
        build_operator(file_stem, character_table, charword_tables, Path(args.client), languages, args.client_only)


if __name__ == '__main__':
    main()
