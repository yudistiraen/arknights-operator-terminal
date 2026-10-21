"""Ranks a character's Spine dorm folders by how well their Relax probe matches a reference image
or video of the skin (an existing public chibi .webm, or a frame you rendered), so the skin->folder
mapping is decided visually instead of from folder names (which mislead — see SKILL.md).

Run probe-skin-folders.mjs <char id> first. Needs numpy + opencv (the .venv-audit venv).
Usage:
    .venv-audit/Scripts/python .claude/skills/walking-chibi/match-skin-folder.py char_129_bluep public/operators/blue-poison/chibi-skin1.webm
"""
import glob
import pathlib
import subprocess
import sys

import cv2
import numpy as np

ROOT = pathlib.Path(__file__).resolve().parents[3]
PROBE_ROOT = ROOT / 'scripts/chibi-pipeline/out/probes'
NORM_WIDTH, NORM_HEIGHT = 64, 96


def normalized(rgba):
    """Crop to the silhouette bbox and resize, so camera scale/position can't affect the score."""
    rows, columns = np.where(rgba[..., 3] > 40)
    if not len(rows):
        return None
    crop = rgba[rows.min():rows.max() + 1, columns.min():columns.max() + 1].astype(np.float32)
    crop = cv2.resize(crop, (NORM_WIDTH, NORM_HEIGHT), interpolation=cv2.INTER_AREA)
    vector = (crop[..., :3] * (crop[..., 3:] / 255)).flatten()
    vector -= vector.mean()
    return vector / (np.linalg.norm(vector) + 1e-6)


def reference_frames(path):
    if path.suffix.lower() == '.png':
        image = cv2.cvtColor(cv2.imread(str(path), cv2.IMREAD_UNCHANGED), cv2.COLOR_BGRA2RGBA)
        return [normalized(image)]
    # `-c:v libvpx-vp9` before `-i`: ffmpeg's native vp9 decoder drops the alpha plane.
    raw = subprocess.run(['ffmpeg', '-v', 'error', '-c:v', 'libvpx-vp9', '-i', str(path), '-vf', 'fps=2,format=rgba,scale=300:300',
                          '-f', 'rawvideo', '-pix_fmt', 'rgba', '-'], capture_output=True).stdout
    frames = np.frombuffer(raw, np.uint8).reshape(-1, 300, 300, 4)[:8]
    return [vector for vector in map(normalized, frames) if vector is not None]


def probe_frames(probe_dir):
    vectors = []
    for frame_path in sorted(glob.glob(str(probe_dir / 'frames' / 'frame_*.png')))[:8]:
        vector = normalized(cv2.cvtColor(cv2.imread(frame_path, cv2.IMREAD_UNCHANGED), cv2.COLOR_BGRA2RGBA))
        if vector is not None:
            vectors.append(vector)
    return vectors


def main():
    char_id, reference = sys.argv[1], pathlib.Path(sys.argv[2])
    reference_vectors = reference_frames(reference)
    ranking = []
    for probe_dir in sorted(PROBE_ROOT.glob(f'{char_id}__*')):
        vectors = probe_frames(probe_dir)
        score = max((float(first @ second) for first in reference_vectors for second in vectors), default=0)
        ranking.append((score, probe_dir.name.split('__', 1)[1]))
    ranking.sort(reverse=True)
    for score, folder in ranking:
        print(f'{score:.3f}  spine/{char_id}/{folder}/Spine')
    if len(ranking) > 1 and ranking[0][0] - ranking[1][0] < 0.1:
        print('WARNING: top two are within 0.1 — compare the probe frames visually before trusting this.')


if __name__ == '__main__':
    main()
