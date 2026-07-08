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
PAPER = (250, 250, 250)
LILAC = (245, 243, 255)
INK = (24, 24, 27)
MUTED = (82, 82, 91)
SOFT_BORDER = (228, 228, 231)
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


def paste_brand(draw: ImageDraw.ImageDraw, img: Image.Image, xy: tuple[int, int], scale: int = 42):
    x, y = xy
    logo = Image.open(ROOT / "public/logos/symplehost.png").convert("RGBA").resize((scale, scale), Image.Resampling.LANCZOS)
    img.alpha_composite(logo, (x, y))
    draw.text((x + scale + 12, y + 8), "SYMPLE HOST", font=font(FONT_SF, int(scale * 0.42)), fill=INK)


def card(draw: ImageDraw.ImageDraw, box, radius=28, fill=(255, 255, 255, 244)):
    rounded_rect(draw, box, radius, fill, SOFT_BORDER, 2)


def time_card(draw: ImageDraw.ImageDraw, box, compact=False):
    x1, y1, x2, y2 = box
    card(draw, box, 28)
    title = font(FONT_SF, 40 if not compact else 32)
    label = font(FONT_SF, 20 if not compact else 17)
    body = font(FONT_SF, 24 if not compact else 19)
    row_gap = 66 if not compact else 54

    draw.text((x1 + 30, y1 + 28), "Reserve your spot", font=title, fill=DEEP)
    rows = [
        ("USA", "Tue, Aug 4", "5:00 PM PT"),
        ("Singapore", "Wed, Aug 5", "8:00 AM SGT"),
        ("Australia", "Wed, Aug 5", "10:00 AM AEST"),
    ]
    start_y = y1 + (100 if not compact else 86)
    for i, (region, date, time) in enumerate(rows):
        row_y = start_y + i * row_gap
        rounded_rect(draw, (x1 + 30, row_y, x2 - 30, row_y + row_gap - 12), 16, (250, 250, 250, 255), SOFT_BORDER, 1)
        draw.text((x1 + 52, row_y + 17), region, font=label, fill=ORANGE if i == 0 else DEEP)
        draw.text((x1 + (220 if not compact else 174), row_y + 17), date, font=body, fill=MUTED)
        tw, _ = text_size(draw, time, body)
        draw.text((x2 - 54 - tw, row_y + 17), time, font=body, fill=INK)

    btn_h = 54 if not compact else 46
    rounded_rect(draw, (x1 + 30, y2 - btn_h - 28, x2 - 30, y2 - 28), 14, ORANGE)
    draw.text((x1 + 54, y2 - btn_h - 14), "Register now", font=font(FONT_SF, 23 if not compact else 19), fill=WHITE)


def instagram() -> Image.Image:
    img = gradient_bg((1080, 1080)).convert("RGBA")
    d = ImageDraw.Draw(img)
    img.alpha_composite(add_grid(d, img.size, 42, 14))
    add_glow(img, (960, 130), 260, VIOLET, 40)
    add_glow(img, (110, 900), 240, AMBER, 34)

    d = ImageDraw.Draw(img)
    rounded_rect(d, (48, 48, 1032, 1032), 36, WHITE, (228, 228, 231), 2)
    paste_brand(d, img, (88, 88), 46)

    rounded_rect(d, (88, 170, 315, 215), 999, LILAC)
    d.text((108, 183), "FREE LIVE WEBINAR", font=font(FONT_SF, 19), fill=DEEP)

    d.text((88, 252), "Start, Streamline", font=font(FONT_SF, 72), fill=DEEP)
    d.text((88, 332), "& Scale", font=font(FONT_SF, 72), fill=DEEP)
    d.text((91, 424), "Short-term rental operations", font=font(FONT_SF, 32), fill=MUTED)

    speakers = [
        ("public/speakers/brian-king.jpg", "START", "Brian King"),
        ("public/speakers/max.jpg", "STREAMLINE", "Max Del Vita"),
        ("public/speakers/julie-george-vrma.jfif", "SCALE", "Julie George"),
    ]
    time_card(d, (88, 500, 992, 872), compact=False)

    for i, (p, label, name) in enumerate(speakers):
        x = 112 + i * 310
        rounded_rect(d, (x - 14, 894, x + 240, 994), 20, (250, 250, 250, 255), SOFT_BORDER, 1)
        portrait = crop_circle(ROOT / p, 58)
        img.alpha_composite(portrait, (x + 6, 915))
        d.text((x + 78, 914), label, font=font(FONT_SF, 13), fill=ORANGE)
        d.text((x + 78, 938), name, font=font(FONT_SF, 22), fill=DEEP)

    d.text((88, 1000), "help.symplehost.ai/webinars", font=font(FONT_SF, 22), fill=VIOLET)
    d.text((746, 1000), "Symplehost x MDH", font=font(FONT_SF, 22), fill=MUTED)
    return img


def linkedin() -> Image.Image:
    img = gradient_bg((1200, 627)).convert("RGBA")
    d = ImageDraw.Draw(img)
    img.alpha_composite(add_grid(d, img.size, 40, 14))
    add_glow(img, (1070, 110), 250, VIOLET, 36)
    add_glow(img, (160, 560), 220, AMBER, 30)

    d = ImageDraw.Draw(img)
    rounded_rect(d, (34, 34, 1166, 593), 30, WHITE, SOFT_BORDER, 2)
    paste_brand(d, img, (74, 72), 42)

    rounded_rect(d, (74, 142, 291, 184), 999, LILAC)
    d.text((94, 154), "FREE LIVE WEBINAR", font=font(FONT_SF, 17), fill=DEEP)
    d.text((74, 218), "Start, Streamline", font=font(FONT_SF, 58), fill=DEEP)
    d.text((74, 284), "& Scale", font=font(FONT_SF, 58), fill=DEEP)
    d.text((76, 363), "Short-term rental operations", font=font(FONT_SF, 25), fill=MUTED)

    speakers = [
        ("public/speakers/brian-king.jpg", "START", "Brian King"),
        ("public/speakers/max.jpg", "STREAMLINE", "Max Del Vita"),
        ("public/speakers/julie-george-vrma.jfif", "SCALE", "Julie George"),
    ]
    time_card(d, (650, 72, 1126, 430), compact=True)

    for i, (p, label, name) in enumerate(speakers):
        x = 74 + i * 185
        rounded_rect(d, (x, 456, x + 164, 548), 18, (250, 250, 250, 255), SOFT_BORDER, 1)
        portrait = crop_circle(ROOT / p, 54)
        img.alpha_composite(portrait, (x + 14, 475))
        d.text((x + 80, 475), label, font=font(FONT_SF, 12), fill=ORANGE)
        d.text((x + 80, 498), name, font=font(FONT_SF, 18), fill=DEEP)

    d.text((672, 476), "Register at help.symplehost.ai/webinars", font=font(FONT_SF, 25), fill=VIOLET)
    d.text((672, 518), "Brian King · Max Del Vita · Julie George", font=font(FONT_SF, 21), fill=MUTED)
    return img


def main():
    instagram().save(OUT / "usa-str-webinar-instagram.png", quality=95)
    linkedin().save(OUT / "usa-str-webinar-linkedin.png", quality=95)
    print(OUT / "usa-str-webinar-instagram.png")
    print(OUT / "usa-str-webinar-linkedin.png")


if __name__ == "__main__":
    main()
