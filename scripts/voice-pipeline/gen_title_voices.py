"""Builds the splash-screen "Title" voice pool (the operator calling out "Arknights!").

For every roster operator (alters included, matched to character_table by display name the same
way scripts/growth/gen-growth-data.mjs does), finds its "Title" line in the EN charword_table,
pulls the clip for one voice language and writes:
  public/audio/title-voices/<lang>/<charId>.mp3
  src/data/titleVoices.json   — { "<LANG>": [{ charId, operator, src }] }, other languages kept

Audio source per clip: the local PC client's voice bundle first, then PRTS (torappu.prts.wiki).
The EN client only ships JP + EN voice bundles, so CN/KR come from PRTS.

Requirements: Python 3.10+, `pip install UnityPy`, ffmpeg on PATH.
Usage: python scripts/voice-pipeline/gen_title_voices.py --lang en [--client F:/YostarGames/Arknights_EN]
"""

import argparse
import json
import re
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.request
from pathlib import Path

import UnityPy
from UnityPy.helpers import CompressionHelper

PROJECT_ROOT = Path(__file__).resolve().parents[2]
OPERATORS_DIR = PROJECT_ROOT / 'src/data/operators'
MANIFEST_PATH = PROJECT_ROOT / 'src/data/titleVoices.json'
OUTPUT_ROOT = PROJECT_ROOT / 'public/audio/title-voices'
GAMEDATA_BASE = 'https://raw.githubusercontent.com/ArknightsAssets/ArknightsGamedata/master/en/gamedata/excel'
PRTS_BASE = 'https://torappu.prts.wiki/assets/audio'
CLIENT_BUNDLE_SUBDIR = 'Arknights_Data/PersistentData/Bundles/audio/sound_beta_2'
NON_OPERATOR_PROFESSIONS = {'TOKEN', 'TRAP'}
# character_table names that the roster spells differently (keep in sync with gen-growth-data.mjs).
ROSTER_NAME_BY_TABLE_NAME = {
    "'Justice Knight'": 'Justice Knight',
    'Sakiko Togawa': 'Togawa Sakiko',
}
# Mono MP3 bitrate for every generated voice file (title voices and gen_operator_voices.py).
# 48k keeps speech clear at ~25% less size than 64k; files are served from R2 (knowledge/cloudflare_r2.md).
MP3_BITRATE = '48k'
# Voice language → bundle folder name (same on the client and on PRTS).
VOICE_FOLDER_BY_LANG = {'jp': 'voice', 'en': 'voice_en', 'cn': 'voice_cn', 'kr': 'voice_kr'}


def decompress_lz4ak(compressed, uncompressed_size):
    """Arknights' LZ4 variant (bundle compression flag 4): token nibbles swapped, match offset big-endian."""
    source = bytes(compressed)
    output = bytearray()
    position = 0
    end = len(source)
    while position < end:
        token = source[position]
        position += 1
        literal_length = token & 0x0F
        match_length = token >> 4
        if literal_length == 0x0F:
            while True:
                extra = source[position]
                position += 1
                literal_length += extra
                if extra != 0xFF:
                    break
        output += source[position:position + literal_length]
        position += literal_length
        if position >= end:
            break
        offset = (source[position] << 8) | source[position + 1]
        position += 2
        if match_length == 0x0F:
            while True:
                extra = source[position]
                position += 1
                match_length += extra
                if extra != 0xFF:
                    break
        match_length += 4
        start = len(output) - offset
        if offset >= match_length:
            output += output[start:start + match_length]
        else:
            for index in range(match_length):
                output.append(output[start + index])
    return bytes(output)


CompressionHelper.DECOMPRESSION_MAP[4] = decompress_lz4ak


def fetch_json(url):
    with urllib.request.urlopen(url) as response:
        return json.load(response)


def collect_roster_names():
    name_pattern = re.compile(r"""name:\s*(['"`])((?:\\.|(?!\1).)*)\1""")
    names = set()
    for file in OPERATORS_DIR.glob('*.ts'):
        for match in name_pattern.finditer(file.read_text(encoding='utf-8')):
            names.add(re.sub(r'\\(.)', r'\1', match.group(2)))
    return names


def extract_from_client(bundle_path, clip_name, wav_path):
    if not bundle_path.exists():
        return False
    for asset in UnityPy.load(str(bundle_path)).objects:
        if asset.type.name != 'AudioClip':
            continue
        clip = asset.read()
        if clip.m_Name != clip_name:
            continue
        for sample_data in clip.samples.values():
            wav_path.write_bytes(sample_data)
            return True
    return False


def download_from_prts(voice_folder, char_id, voice_id, wav_path):
    url = f'{PRTS_BASE}/{voice_folder}/{char_id}/{voice_id.lower()}.wav'
    for attempt in range(3):
        try:
            with urllib.request.urlopen(url, timeout=30) as response:
                wav_path.write_bytes(response.read())
            return True
        except urllib.error.HTTPError as error:
            if error.code == 404:
                return False
        except (urllib.error.URLError, TimeoutError):
            pass
        time.sleep(1 + attempt)
    return False


def convert_to_mp3(wav_path, mp3_path):
    mp3_path.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        ['ffmpeg', '-loglevel', 'error', '-y', '-i', str(wav_path), '-ac', '1', '-codec:a', 'libmp3lame', '-b:a', MP3_BITRATE, str(mp3_path)],
        check=True,
    )


def main():
    # Operator names like "Młynar" crash the default Windows console encoding.
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')
    parser = argparse.ArgumentParser()
    parser.add_argument('--lang', choices=sorted(VOICE_FOLDER_BY_LANG), default='en')
    parser.add_argument('--client', default='F:/YostarGames/Arknights_EN')
    args = parser.parse_args()

    voice_folder = VOICE_FOLDER_BY_LANG[args.lang]
    client_voice_dir = Path(args.client) / CLIENT_BUNDLE_SUBDIR / voice_folder
    roster_names = collect_roster_names()
    character_table = fetch_json(f'{GAMEDATA_BASE}/character_table.json')
    charword_table = fetch_json(f'{GAMEDATA_BASE}/charword_table.json')

    title_voice_id_by_char = {
        word['wordKey']: word['voiceId']
        for word in charword_table['charWords'].values()
        if word['voiceTitle'] == 'Title' and word['wordKey'] == word['charId']
    }

    entries = []
    missing = []
    seen_names = set()
    with tempfile.TemporaryDirectory() as temp_dir:
        for char_id, character in character_table.items():
            roster_name = ROSTER_NAME_BY_TABLE_NAME.get(character['name'], character['name'])
            if character['profession'] in NON_OPERATOR_PROFESSIONS or roster_name not in roster_names:
                continue
            # First entry wins for duplicate names — the original character precedes later re-releases.
            if roster_name in seen_names:
                continue
            seen_names.add(roster_name)

            voice_id = title_voice_id_by_char.get(char_id)
            if not voice_id:
                missing.append(f'{roster_name} (no Title line)')
                continue
            wav_path = Path(temp_dir) / f'{char_id}.wav'
            source = 'client'
            if not extract_from_client(client_voice_dir / f'{char_id}.ab', voice_id, wav_path):
                source = 'prts'
                time.sleep(0.3)
                if not download_from_prts(voice_folder, char_id, voice_id, wav_path):
                    missing.append(f'{roster_name} (no {args.lang.upper()} audio)')
                    continue
            convert_to_mp3(wav_path, OUTPUT_ROOT / args.lang / f'{char_id}.mp3')
            entries.append({'charId': char_id, 'operator': roster_name, 'src': f'/audio/title-voices/{args.lang}/{char_id}.mp3'})
            print(f'  {roster_name:<28} {voice_id} [{source}]', flush=True)

    manifest = json.loads(MANIFEST_PATH.read_text(encoding='utf-8')) if MANIFEST_PATH.exists() else {}
    manifest[args.lang.upper()] = sorted(entries, key=lambda entry: entry['operator'])
    MANIFEST_PATH.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

    unmatched = sorted(roster_names - seen_names)
    print(f'\n{args.lang.upper()}: {len(entries)} title voices written')
    if missing:
        print('Skipped:', ', '.join(missing))
    print(f'{len(unmatched)} roster names not matched to character_table (skins, summons, etc.)', file=sys.stderr)


if __name__ == '__main__':
    main()
