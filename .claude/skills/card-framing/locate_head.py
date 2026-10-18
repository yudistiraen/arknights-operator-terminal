# Finds where an operator's game portrait (the 180x180 headshot the game
# itself crops from the art) sits inside its base art, by multi-scale
# template matching. That gives a machine-measured head box instead of an
# eyeballed face measurement, so every card can be framed from the same
# anchor.
#
#   python locate_head.py <public dir> <manifest.txt>
#   -> label|fx|fy|fs|score   (box left/top/side as fractions of the art WIDTH/HEIGHT/WIDTH)
import sys
import cv2
import numpy as np

sys.stdout.reconfigure(encoding="utf-8")

public_dir, manifest_path = sys.argv[1], sys.argv[2]
WORK_WIDTH = 900  # downscale the art to this width for matching speed


def load_flat(path):
    image = cv2.imread(path, cv2.IMREAD_UNCHANGED)
    if image is None:
        return None
    if image.ndim == 3 and image.shape[2] == 4:
        alpha = image[:, :, 3:4].astype(np.float32) / 255
        image = (image[:, :, :3].astype(np.float32) * alpha + 128 * (1 - alpha)).astype(np.uint8)
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)


def locate(art, portrait):
    art_height, art_width = art.shape
    factor = WORK_WIDTH / art_width
    small = cv2.resize(art, (WORK_WIDTH, int(art_height * factor)), interpolation=cv2.INTER_AREA)
    # Heads often touch or overflow the top/side edges of the art, so the
    # game's square crop extends past the canvas: pad with neutral gray.
    pad = int(WORK_WIDTH * 0.25)
    small = cv2.copyMakeBorder(small, pad, 0, pad, pad, cv2.BORDER_CONSTANT, value=128)
    best = (-1.0, 0, 0, 0)
    # The headshot spans roughly 8%..70% of the art width.
    for side in np.unique(np.geomspace(WORK_WIDTH * 0.08, WORK_WIDTH * 0.7, 60).astype(int)):
        if side >= small.shape[0] or side >= small.shape[1]:
            continue
        template = cv2.resize(portrait, (side, side), interpolation=cv2.INTER_AREA)
        result = cv2.matchTemplate(small, template, cv2.TM_CCOEFF_NORMED)
        _, score, _, (left, top) = cv2.minMaxLoc(result)
        if score > best[0]:
            best = (score, left, top, side)
    score, left, top, side = best
    # Refine around the best scale.
    for refined in range(max(8, side - 6), side + 7):
        if refined >= small.shape[0] or refined >= small.shape[1]:
            continue
        template = cv2.resize(portrait, (refined, refined), interpolation=cv2.INTER_AREA)
        result = cv2.matchTemplate(small, template, cv2.TM_CCOEFF_NORMED)
        _, refined_score, _, (refined_left, refined_top) = cv2.minMaxLoc(result)
        if refined_score > score:
            score, left, top, side = refined_score, refined_left, refined_top, refined
    small_height = small.shape[0] - pad
    return (left - pad) / WORK_WIDTH, (top - pad) / small_height, side / WORK_WIDTH, score


for line in open(manifest_path, encoding='utf8'):
    parts = line.rstrip('\n').split('|')
    if len(parts) < 7:
        continue
    label, src = parts[0], parts[3]
    portrait_src = src.rsplit('/', 1)[0] + '/portrait.png'
    art = load_flat(public_dir + src)
    portrait = load_flat(public_dir + portrait_src)
    if art is None or portrait is None:
        print(f'{label}|-|-|-|0')
        continue
    fx, fy, fs, score = locate(art, portrait)
    print(f'{label}|{fx:.4f}|{fy:.4f}|{fs:.4f}|{score:.3f}', flush=True)
