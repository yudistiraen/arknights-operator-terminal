"""Audits every walkable skin's idle (chibiSrc) vs move (chibiMoveSrc) video for a camera mismatch.

WalkingChibi.tsx applies ONE chibiFraming to both layers, so if idle and move were rendered with
different cameras the mascot visibly shrinks/grows or sinks/floats the moment it stops walking
(Blue Poison, Reed, Mountain). No chibiFraming value can fix that — a flagged pair must be
re-rendered with render-walking-pair.mjs (shared camera).

Why template matching instead of comparing bounding boxes: idle and walk poses differ (raised arm,
wider stance, swinging weapon), so bbox height/feet can't tell "different pose" from "different
camera". The chibi head is large and rigid, so the scale at which the move clip's head best matches
the idle clip's head IS the idle/move camera ratio, independent of pose.

Requires numpy + opencv-python-headless (not project dependencies — use a throwaway venv):
    python -m venv .venv-audit && .venv-audit/Scripts/python -m pip install numpy opencv-python-headless
Usage:
    .venv-audit/Scripts/python scripts/chibi-pipeline/audit-walking-pairs.py              # all operators
    .venv-audit/Scripts/python scripts/chibi-pipeline/audit-walking-pairs.py mountain reed
"""
import json
import pathlib
import re
import subprocess
import sys

import cv2
import numpy as np

ROOT = pathlib.Path(__file__).resolve().parents[2]
SIZE = 300
N_FRAMES = 6
HEAD_FRACTION = 0.42  # top part of the silhouette treated as the (rigid) head
SCALES = np.arange(0.70, 1.42, 0.02)
# A same-camera pair measures ratio 0.98-1.02 and feet delta <= 0.01 (Amiya, re-rendered pairs).
RATIO_TOLERANCE = 0.04
FEET_TOLERANCE = 0.02
LOW_CONFIDENCE_SCORE = 0.85
SKIN_PATTERN = re.compile(r"chibiSrc: '([^']+)', chibiMoveSrc: '([^']+)'")


def read_frames(video_path):
    probed = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(video_path)], capture_output=True, text=True).stdout.strip()
    # Some encodes carry no container duration ('N/A') — fall back to sampling at 5 fps.
    duration = float(probed) if re.fullmatch(r'[\d.]+', probed) else N_FRAMES / 5
    # `-c:v libvpx-vp9` before `-i`: ffmpeg's native vp9 decoder drops the alpha plane.
    raw = subprocess.run(
        ['ffmpeg', '-v', 'error', '-c:v', 'libvpx-vp9', '-i', str(video_path),
         '-vf', f'fps={N_FRAMES / max(duration, 0.2)},format=rgba,scale={SIZE}:{SIZE}',
         '-f', 'rawvideo', '-pix_fmt', 'rgba', '-'], capture_output=True).stdout
    frames = []
    for frame in np.frombuffer(raw, np.uint8).reshape(-1, SIZE, SIZE, 4)[:N_FRAMES]:
        alpha = frame[..., 3].astype(np.float32) / 255
        rows, columns = np.where(frame[..., 3] > 40)
        if len(rows):
            premultiplied = frame[..., :3].astype(np.float32) * alpha[..., None]
            frames.append({'rgb': premultiplied, 'alpha': alpha, 'top': rows.min(), 'bottom': rows.max() + 1})
    return frames


def head_crop(frame):
    head_bottom = frame['top'] + int((frame['bottom'] - frame['top']) * HEAD_FRACTION)
    columns = np.where(frame['alpha'][frame['top']:head_bottom].max(axis=0) > 0.15)[0]
    return frame['rgb'][frame['top']:head_bottom, columns.min():columns.max() + 1]


def audit_pair(idle_path, move_path):
    idle_frames, move_frames = read_frames(idle_path), read_frames(move_path)
    best_score_by_scale = {}
    for move_frame in move_frames[::2]:
        head = head_crop(move_frame)
        for scale in SCALES:
            template = cv2.resize(head, None, fx=scale, fy=scale, interpolation=cv2.INTER_AREA)
            if template.shape[0] >= SIZE or template.shape[1] >= SIZE or template.shape[0] < 8:
                continue
            score = max(float(cv2.matchTemplate(idle_frame['rgb'], template, cv2.TM_CCOEFF_NORMED).max())
                        for idle_frame in idle_frames[::2])
            key = round(float(scale), 2)
            best_score_by_scale[key] = max(best_score_by_scale.get(key, 0), score)
    ratio, score = max(best_score_by_scale.items(), key=lambda item: item[1])
    feet_delta = (np.median([frame['bottom'] for frame in idle_frames]) - np.median([frame['bottom'] for frame in move_frames])) / SIZE
    problems = []
    if abs(ratio - 1) > RATIO_TOLERANCE:
        problems.append(f"idle {'smaller' if ratio < 1 else 'bigger'} x{ratio:.2f}")
    if abs(feet_delta) > FEET_TOLERANCE:
        problems.append(f"idle feet {'lower' if feet_delta > 0 else 'higher'} {abs(feet_delta) * 100:.1f}%")
    if score < LOW_CONFIDENCE_SCORE:
        problems.append(f'low-confidence match ({score:.2f}) — check visually')
    return {'ratio': ratio, 'score': round(score, 3), 'feetDelta': round(float(feet_delta), 3), 'problems': problems}


def main():
    only = set(sys.argv[1:])
    pairs = {}
    for data_file in sorted((ROOT / 'src/data/operators').glob('*.ts')):
        if only and data_file.stem not in only:
            continue
        for idle_src, move_src in SKIN_PATTERN.findall(data_file.read_text(encoding='utf8')):
            pairs.setdefault((idle_src, move_src), data_file.name)
    flagged = 0
    for (idle_src, move_src), file_name in pairs.items():
        result = audit_pair(ROOT / 'public' / idle_src.lstrip('/'), ROOT / 'public' / move_src.lstrip('/'))
        if result['problems']:
            flagged += 1
        print(json.dumps({'file': file_name, 'idle': idle_src, 'move': move_src, **result}), flush=True)
    print(f'{flagged} of {len(pairs)} idle/move pairs flagged', file=sys.stderr)


if __name__ == '__main__':
    main()
