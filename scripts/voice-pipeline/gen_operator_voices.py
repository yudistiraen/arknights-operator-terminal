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
       python scripts/voice-pipeline/gen_operator_voices.py "gavial:Gavial the Invincible" --client-only
         — an alter inside an operator file: its voice sits with the base form — audio in
           public/operators/<base dir>/voice/<alter subfolder>/, data in src/data/voices/<file>/<alter-slug>.ts
           (the base moves to src/data/voices/<file>/index.ts) — and `voice:` is wired after the alter's `name:` line.
"""

import argparse
import json
import re
import sys
import tempfile
import time
import unicodedata
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
    # Alter objects are often declared above the base (zima, kaltsit, ...), so read the name from the
    # `: Operator = {` literal rather than the first `name:` in the file.
    base_start = re.search(r':\s*Operator\s*=\s*\{', source)
    name_pattern = re.compile(r"""name:\s*(['"`])((?:\\.|(?!\1).)*)\1""")
    name = name_pattern.search(source, base_start.end() if base_start else 0).group(2)
    asset_dirs = re.findall(r"/operators/([^/'\"]+)/", source)
    asset_dir = max(set(asset_dirs), key=asset_dirs.count)
    return re.sub(r'\\(.)', r'\1', name), asset_dir


def alter_block_span(source, alter_name):
    """(start, end) of the alter object literal whose `name:` is alter_name; start = its name line."""
    quoted_name = re.escape(alter_name).replace("'", r"\\?'")
    match = re.search(rf"""^[ \t]*name:\s*(['"`]){quoted_name}\1""", source, re.MULTILINE)
    if not match:
        raise SystemExit(f'alter {alter_name!r}: no `name:` line in the operator file')
    end = source.find('\n}\n', match.start())
    return match.start(), (end if end != -1 else len(source))


def alter_asset_dir(block):
    # Alter assets live in a nested folder (e.g. /operators/gavial/invincible/), so take the whole parent path.
    asset_dirs = re.findall(r"/operators/([^'\"]+)/[^/'\"]+\.(?:png|webm)", block)
    return max(set(asset_dirs), key=asset_dirs.count)


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


def add_voice_import(source, voice_module, const_name):
    return re.sub(
        r"^(import type \{[^}]*\} from '\.\./\.\./types'\n)",
        rf"\1import {const_name} from '../voices/{voice_module}'\n",
        source, count=1, flags=re.MULTILINE,
    )


def wire_into_operator_file(operator_path, voice_module, const_name, alter_name=None):
    source = operator_path.read_text(encoding='utf-8')
    if re.search(rf'^\s*voice: {const_name},', source, re.MULTILINE):
        return False
    if alter_name:
        start, _ = alter_block_span(source, alter_name)
        # Alters have no `cv:` line; anchor `voice:` right after the alter's `name:` line.
        line_end = source.index('\n', start)
        indent = re.match(r'[ \t]*', source[start:]).group(0)
        source = source[:line_end + 1] + f'{indent}voice: {const_name},\n' + source[line_end + 1:]
        operator_path.write_text(add_voice_import(source, voice_module, const_name), encoding='utf-8')
        return True
    source, replaced = re.subn(r'^(\s*)(cv: \{[^}]*\},)$', rf'\1\2\n\1voice: {const_name},', source, count=1, flags=re.MULTILINE)
    if not replaced:
        raise SystemExit(f'{operator_path.name}: no single-line `cv: {{...}},` to anchor `voice:` after')
    operator_path.write_text(add_voice_import(source, voice_module, const_name), encoding='utf-8')
    return True


def build_operator(target, character_table, charword_tables, client_root, languages, client_only):
    file_stem, _, alter_name = target.partition(':')
    operator_path = OPERATORS_DIR / f'{file_stem}.ts'
    source = operator_path.read_text(encoding='utf-8')
    # An alter's voice sits with its base form so each operator is one place to look (and one level
    # deep for .gitignore / sync-r2 / the R2 rewrite):
    #   audio  public/operators/<base dir>/voice/<alter subfolder>/<lang>/
    #   data   src/data/voices/<file>/<alter slug>.ts, next to the base's src/data/voices/<file>/index.ts
    operator_voice_dir = VOICES_DIR / file_stem
    if alter_name:
        start, end = alter_block_span(source, alter_name)
        operator_name = alter_name
        base_dir, _, alter_subdir = alter_asset_dir(source[start:end]).partition('/')
        voice_dir = f'{base_dir}/voice/{alter_subdir}'
        ascii_name = unicodedata.normalize('NFKD', alter_name).encode('ascii', 'ignore').decode()
        voice_stem = re.sub(r'[^0-9a-z]+', '-', ascii_name.lower()).strip('-')
        voice_module = f'{file_stem}/{voice_stem}'
        voice_data_path = operator_voice_dir / f'{voice_stem}.ts'
        flat_base_path = VOICES_DIR / f'{file_stem}.ts'
        operator_voice_dir.mkdir(parents=True, exist_ok=True)
        if flat_base_path.exists():
            # '../voices/<file>' resolves to <file>/index.ts too, so the base's import stays valid.
            base_body = flat_base_path.read_text(encoding='utf-8').replace("from '../../types'", "from '../../../types'", 1)
            (operator_voice_dir / 'index.ts').write_text(base_body, encoding='utf-8')
            flat_base_path.unlink()
    else:
        operator_name, asset_dir = operator_name_and_asset_dir(source)
        voice_dir = f'{asset_dir}/voice'
        voice_stem = voice_module = file_stem
        voice_data_path = operator_voice_dir / 'index.ts' if operator_voice_dir.is_dir() else VOICES_DIR / f'{file_stem}.ts'
    char_id = find_char_id(character_table, operator_name)
    print(f'{operator_name} ({char_id}) → /operators/{voice_dir}', flush=True)

    words_by_lang = {
        language: {word['voiceId']: word for word in table['charWords'].values() if word['wordKey'] == char_id}
        for language, table in charword_tables.items()
    }
    english_words = sorted(words_by_lang['en'].values(), key=lambda word: word['voiceIndex'])
    voice_ids = [word['voiceId'] for word in english_words]
    voice_root = PROJECT_ROOT / 'public/operators' / voice_dir

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

    const_name = to_const_name(voice_stem)
    types_module = '../' * len(voice_data_path.relative_to(VOICES_DIR).parts) + 'types'
    body = (
        f"import type {{ OperatorVoice }} from '../{types_module}'\n\n"
        "// Generated by scripts/voice-pipeline/gen_operator_voices.py — do not edit by hand.\n"
        f"const {const_name}: OperatorVoice = {{\n"
        f"  audioDir: '/operators/{voice_dir}',\n"
        f"  lines: {json.dumps(lines, ensure_ascii=False, indent=2).replace(chr(10), chr(10) + '  ')},\n"
        "}\n\n"
        f"export default {const_name}\n"
    )
    voice_data_path.parent.mkdir(parents=True, exist_ok=True)
    voice_data_path.write_text(body, encoding='utf-8')
    wired = wire_into_operator_file(operator_path, voice_module, const_name, alter_name or None)
    print(f'  {len(lines)} lines → {voice_data_path.relative_to(PROJECT_ROOT).as_posix()}{" (wired into operator file)" if wired else ""}', flush=True)


def main():
    sys.stdout.reconfigure(encoding='utf-8')
    parser = argparse.ArgumentParser()
    parser.add_argument('operators', nargs='+',
                        help="operator file basenames in src/data/operators/; '<file>:<Alter Name>' targets an alter in that file")
    parser.add_argument('--client', default='F:/YostarGames/Arknights_EN')
    parser.add_argument('--langs', default=','.join(LANGUAGES), help='comma-separated audio languages to extract, e.g. jp,en')
    parser.add_argument('--client-only', action='store_true', help='never fall back to PRTS; lines missing from the client stay text-only')
    args = parser.parse_args()
    languages = [language for language in args.langs.split(',') if language in LANGUAGES]

    character_table = fetch_json(f'{GAMEDATA_ROOT}/en/gamedata/excel/character_table.json')
    charword_tables = {language: fetch_json(f'{GAMEDATA_ROOT}/{language}/gamedata/excel/charword_table.json') for language in LANGUAGES}
    for target in args.operators:
        build_operator(target, character_table, charword_tables, Path(args.client), languages, args.client_only)


if __name__ == '__main__':
    main()
