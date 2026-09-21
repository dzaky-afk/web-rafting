import os
from PIL import Image, ImageFilter, ImageOps

src_path = r"C:\Users\dzaky\.gemini\antigravity-ide\brain\f3ef7152-f27e-4aa8-b77f-bec5e7cc1fc2\.user_uploaded\media_1789354601916.png"
dst_png = r"c:\Users\dzaky\OneDrive\Documents\Web_Rafting\public\images\rafting-logo-exact.png"

img = Image.open(src_path).convert("L")

# Upscale 8x
w, h = img.size
upscaled = img.resize((w * 8, h * 8), Image.Resampling.LANCZOS)

# Slight Gaussian blur to smooth pixelated edges
smoothed = upscaled.filter(ImageFilter.GaussianBlur(radius=1.5))

# Thresholding with soft smooth edge
smoothed_data = smoothed.load()
sw, sh = smoothed.size

out_img = Image.new("RGBA", (sw, sh), (0, 0, 0, 0))
out_pixels = out_img.load()

for y in range(sh):
    for x in range(sw):
        val = smoothed_data[x, y]
        # Inverted threshold (dark ink is logo, white is background)
        if val > 235:
            out_pixels[x, y] = (0, 0, 0, 0)
        elif val < 160:
            # Royal Blue #0047ba
            out_pixels[x, y] = (0, 71, 186, 255)
        else:
            # Smooth anti-aliasing
            alpha = int((235.0 - val) / (235.0 - 160.0) * 255.0)
            alpha = max(0, min(255, alpha))
            out_pixels[x, y] = (0, 71, 186, alpha)

bbox = out_img.getbbox()
if bbox:
    out_img = out_img.crop(bbox)

# Downscale slightly for super-sampled anti-aliased crispness
final_w, final_h = out_img.size
supersampled = out_img.resize((final_w // 2, final_h // 2), Image.Resampling.LANCZOS)

# Add padding
fw, fh = supersampled.size
canvas = Image.new("RGBA", (fw + 40, fh + 40), (0, 0, 0, 0))
canvas.paste(supersampled, (20, 20), supersampled)

canvas.save(dst_png, "PNG")
print(f"Generated ultra-crisp anti-aliased logo at {dst_png} with size {canvas.size}")
