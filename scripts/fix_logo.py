import os
from PIL import Image

src_path = r"C:\Users\dzaky\.gemini\antigravity-ide\brain\f3ef7152-f27e-4aa8-b77f-bec5e7cc1fc2\.user_uploaded\media_1789354601916.png"
dst_png = r"c:\Users\dzaky\OneDrive\Documents\Web_Rafting\public\images\rafting-logo-exact.png"

img = Image.open(src_path).convert("RGBA")
w, h = img.size
print(f"Original size: {w}x{h}")

# Sample corners to find background color
corner_colors = [img.getpixel((0, 0)), img.getpixel((w-1, 0)), img.getpixel((0, h-1)), img.getpixel((w-1, h-1))]
print(f"Corner colors: {corner_colors}")

# Upscale 4x with Lanczos
upscaled = img.resize((w * 4, h * 4), Image.Resampling.LANCZOS)
uw, uh = upscaled.size
out_img = Image.new("RGBA", (uw, uh), (0, 0, 0, 0))

pixels = upscaled.load()
out_pixels = out_img.load()

for y in range(uh):
    for x in range(uw):
        r, g, b, a = pixels[x, y]
        # Background is white/light gray (r, g, b > 210)
        # Logo is dark blue (r < 60, g < 100, b > 80, or overall brightness < 180)
        luminance = 0.299 * r + 0.587 * g + 0.114 * b
        
        if luminance >= 235:
            # Completely transparent background
            out_pixels[x, y] = (0, 0, 0, 0)
        elif luminance <= 140:
            # Solid Royal Blue logo
            out_pixels[x, y] = (0, 71, 186, 255)
        else:
            # Smooth anti-aliased edge transition
            alpha = int((235.0 - luminance) / (235.0 - 140.0) * 255.0)
            alpha = max(0, min(255, alpha))
            out_pixels[x, y] = (0, 71, 186, alpha)

# Crop transparent border
bbox = out_img.getbbox()
if bbox:
    out_img = out_img.crop(bbox)

# Add 20px transparent padding
cw, ch = out_img.size
canvas = Image.new("RGBA", (cw + 40, ch + 40), (0, 0, 0, 0))
canvas.paste(out_img, (20, 20), out_img)

os.makedirs(os.path.dirname(dst_png), exist_ok=True)
canvas.save(dst_png, "PNG")
print(f"Correctly processed logo saved to {dst_png} with dimensions {canvas.size}")
