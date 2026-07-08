from __future__ import annotations

import math
import textwrap
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "marketing"
OUT.mkdir(parents=True, exist_ok=True)

DEEP = (45, 23, 79)
VIOLET = (127, 86, 217)
AMBER = (245, 158, 11)
ORANGE = (249, 115, 22)
PAPER = (255, 250, 240)
LILAC = (245, 243, 255)
INK = (34, 24, 48)
MUTED = (94, 80, 107)
WHITE = (255, 255, 255)

FONT_SF = Path("/System/Library/Fonts/SFNS.ttf")
FONT_NEWYORK = Path("/System/Library/Fonts/NewYork.ttf")
FONT_DIN = Path("/System/Library/Fonts/Supplemental/DIN Condensed Bold.ttf")


def font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(path), size)


def text_size(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.ImageFont) -> tuple[int, int]:
    box = draw.textbbox((0, 0), text, font=fnt)
    return box[2] - box[0], box[3] - box[1]


def wrap_text(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.ImageFont, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        test = f"{current} {word}".strip()
        if text_size(draw, test, fnt)[0] <= max_width:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    fnt: ImageFont.ImageFont,
    fill: tuple[int, int, int],
    max_width: int,
    line_gap: int = 8,
) -> int:
    x, y = xy
    for line in wrap_text(draw, text, fnt, max_width):
        draw.text((x, y), line, font=fnt, fill=fill)
        y += text_size(draw, line, fnt)[1] + line_gap
    return y


def rounded_rect(draw: ImageDraw.ImageDraw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def gradient_bg(size: tuple[int, int]) -> Image.Image:
    w, h = size
    img = Image.new("RGB", size, PAPER)
    px = img.load()
    for y in range(h):
        for x in range(w):
            a = x / max(w - 1, 1)
            b = y / max(h - 1, 1)
            r = int(PAPER[0] * (1 - b * 0.22) + LILAC[0] * b * 0.22)
            g = int(PAPER[1] * (1 - a * 0.16) + LILAC[1] * a * 0.16)
            blue = int(PAPER[2] * (1 - (a + b) * 0.12) + LILAC[2] * (a + b) * 0.12)
            px[x, y] = (r, g, blue)
    return img


def add_grid(draw: ImageDraw.ImageDraw, size: tuple[int, int], step: int, alpha: int = 24):
    w, h = size
    color = (*DEEP, alpha)
    overlay = Image.new("RGBA", size, (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    for x in range(0, w, step):
        od.line((x, 0, x, h), fill=color, width=1)
    for y in range(0, h, step):
        od.line((0, y, w, y), fill=color, width=1)
    return overlay


def add_glow(base: Image.Image, center: tuple[int, int], radius: int, color: tuple[int, int, int], opacity: int):
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    x, y = center
    for r in range(radius, 0, -8):
        a = int(opacity * (r / radius) ** 2)
        d.ellipse((x - r, y - r, x + r, y + r), fill=(*color, a))
    base.alpha_composite(layer.filter(ImageFilter.GaussianBlur(16)))


def crop_circle(path: Path, size: int) -> Image.Image:
    img = Image.open(path).convert("RGB")
    side = min(img.size)
    left = (img.width - side) // 2
    top = (img.height - side) // 2
    img = img.crop((left, top, left + side, top + side)).resize((size, size), Image.Resampling.LANCZOS)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    return out


def paste_speaker(base: Image.Image, path: Path, xy: tuple[int, int], size: int, label: str, name: str, compact=False):
    x, y = xy
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.ellipse((x - 5, y + 7, x + size + 5, y + size + 17), fill=(45, 23, 79, 42))
    base.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(10)))
    portrait = crop_circle(path, size)
    ring = Image.new("RGBA", (size + 10, size + 10), (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring)
    rd.ellipse((0, 0, size + 9, size + 9), fill=WHITE)
    rd.ellipse((3, 3, size + 6, size + 6), outline=(*VIOLET, 80), width=2)
    base.alpha_composite(ring, (x - 5, y - 5))
    base.alpha_composite(portrait, (x, y))
    d = ImageDraw.Draw(base)
    label_font = font(FONT_DIN, 23 if compact else 26)
    name_font = font(FONT_SF, 25 if compact else 29)
    d.text((x, y + size + 18), label.upper(), font=label_font, fill=ORANGE)
    d.text((x, y + size + 46), name, font=name_font, fill=DEEP)


def draw_pill(draw: ImageDraw.ImageDraw, xy: tuple[int, int], text: str, fnt: ImageFont.ImageFont):
    x, y = xy
    tw, th = text_size(draw, text, fnt)
    rounded_rect(draw, (x, y, x + tw + 32, y + th + 18), 999, DEEP)
    draw.text((x + 16, y + 9), text, font=fnt, fill=WHITE)


def instagram() -> Image.Image:
    img = gradient_bg((1080, 1080)).convert("RGBA")
    img.alpha_composite(add_grid(ImageDraw.Draw(img), img.size, 36, 20))
    add_glow(img, (165, 170), 260, AMBER, 64)
    add_glow(img, (955, 225), 300, VIOLET, 52)

    d = ImageDraw.Draw(img)
    rounded_rect(d, (54, 54, 1026, 1026), 34, (255, 255, 255, 216), (127, 86, 217, 54), 2)
    rounded_rect(d, (84, 84, 996, 996), 24, (255, 255, 255, 48), (245, 158, 11, 60), 1)

    draw_pill(d, (104, 112), "FREE LIVE WEBINAR", font(FONT_DIN, 31))
    d.text((104, 178), "START,", font=font(FONT_NEWYORK, 112), fill=DEEP)
    d.text((104, 292), "STREAMLINE", font=font(FONT_NEWYORK, 112), fill=DEEP)
    d.text((104, 406), "& SCALE", font=font(FONT_NEWYORK, 112), fill=DEEP)
    d.text((108, 526), "YOUR SHORT-TERM RENTAL BUSINESS", font=font(FONT_DIN, 45), fill=ORANGE)

    rounded_rect(d, (104, 596, 976, 704), 22, (45, 23, 79, 238))
    d.text((132, 619), "TUE AUG 4  ·  5:00 PM PT", font=font(FONT_SF, 39), fill=WHITE)
    d.text((132, 667), "WED AUG 5  ·  8AM SGT  ·  10AM AEST", font=font(FONT_SF, 27), fill=(238, 230, 255))

    speakers = [
        ("public/speakers/brian-king.jpg", "START", "Brian King"),
        ("public/speakers/max.jpg", "STREAMLINE", "Max Del Vita"),
        ("public/speakers/julie-george-vrma.jfif", "SCALE", "Julie George"),
    ]
    for i, (p, label, name) in enumerate(speakers):
        paste_speaker(img, ROOT / p, (130 + i * 303, 728), 122, label, name, compact=True)

    d = ImageDraw.Draw(img)
    rounded_rect(d, (104, 956, 692, 1006), 18, (245, 158, 11, 240))
    d.text((130, 969), "REGISTER: help.symplehost.ai/webinars", font=font(FONT_DIN, 27), fill=DEEP)
    d.text((737, 969), "SYMPLEHOST x MDH", font=font(FONT_DIN, 27), fill=DEEP)
    return img


def linkedin() -> Image.Image:
    img = gradient_bg((1200, 627)).convert("RGBA")
    img.alpha_composite(add_grid(ImageDraw.Draw(img), img.size, 34, 20))
    add_glow(img, (120, 120), 220, AMBER, 58)
    add_glow(img, (1050, 420), 270, VIOLET, 48)

    d = ImageDraw.Draw(img)
    rounded_rect(d, (36, 36, 1164, 591), 28, (255, 255, 255, 222), (127, 86, 217, 52), 2)
    draw_pill(d, (72, 72), "FREE LIVE WEBINAR", font(FONT_DIN, 28))

    d.text((72, 130), "Start, Streamline", font=font(FONT_NEWYORK, 78), fill=DEEP)
    d.text((72, 210), "& Scale", font=font(FONT_NEWYORK, 78), fill=DEEP)
    d.text((76, 302), "YOUR SHORT-TERM RENTAL BUSINESS", font=font(FONT_DIN, 38), fill=ORANGE)

    summary = "A practical session for STR hosts ready to simplify operations and grow with more control."
    draw_wrapped(d, (76, 350), summary, font(FONT_SF, 25), MUTED, 520, 8)

    rounded_rect(d, (72, 458, 620, 540), 20, (45, 23, 79, 238))
    d.text((98, 475), "TUE AUG 4  ·  5:00 PM PT", font=font(FONT_SF, 30), fill=WHITE)
    d.text((98, 511), "WED AUG 5  ·  8AM SGT  ·  10AM AEST", font=font(FONT_SF, 21), fill=(238, 230, 255))

    speakers = [
        ("public/speakers/brian-king.jpg", "START", "Brian King"),
        ("public/speakers/max.jpg", "STREAMLINE", "Max Del Vita"),
        ("public/speakers/julie-george-vrma.jfif", "SCALE", "Julie George"),
    ]
    for i, (p, label, name) in enumerate(speakers):
        paste_speaker(img, ROOT / p, (700 + i * 150, 94), 116, label, name, compact=True)

    rounded_rect(d, (700, 456, 1116, 542), 20, (255, 247, 237, 238), (245, 158, 11, 100), 2)
    d.text((724, 474), "Brian King  ·  Max Del Vita  ·  Julie George", font=font(FONT_SF, 24), fill=DEEP)
    d.text((724, 510), "Register at help.symplehost.ai/webinars", font=font(FONT_DIN, 30), fill=ORANGE)
    return img


def main():
    instagram().save(OUT / "usa-str-webinar-instagram.png", quality=95)
    linkedin().save(OUT / "usa-str-webinar-linkedin.png", quality=95)
    print(OUT / "usa-str-webinar-instagram.png")
    print(OUT / "usa-str-webinar-linkedin.png")


if __name__ == "__main__":
    main()
