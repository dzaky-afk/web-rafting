import os
from PIL import Image, ImageEnhance, ImageFilter

src_path = r"C:\Users\dzaky\.gemini\antigravity-ide\brain\f3ef7152-f27e-4aa8-b77f-bec5e7cc1fc2\.user_uploaded\media_1789354601916.png"
dst_png = r"c:\Users\dzaky\OneDrive\Documents\Web_Rafting\public\images\rafting-logo-exact.png"

img = Image.open(src_path).convert("RGBA")
print(f"Original size: {img.size}")

# Upscale 4x with Lanczos for super clean edges
w, h = img.size
upscaled = img.resize((w * 4, h * 4), Image.Resampling.LANCZOS)

# Process pixel by pixel with pure PIL
pixels = upscaled.load()
new_w, new_h = upscaled.size

out_img = Image.new("RGBA", (new_w, new_h), (0, 0, 0, 0))
out_pixels = out_img.load()

for y in range(new_h):
    for x in range(new_w):
        r, g, b, a = pixels[x, y]
        luminance = 0.299 * r + 0.587 * g + 0.114 * b
        
        if luminance > 240:
            out_pixels[x, y] = (0, 0, 0, 0)
        elif luminance < 175:
            # Pure crisp Royal Blue #0047ba
            out_pixels[x, y] = (0, 71, 186, 255)
        else:
            # Smooth anti-aliased edge
            alpha = int((240.0 - luminance) / (240.0 - 175.0) * 255.0)
            alpha = max(0, min(255, alpha))
            out_pixels[x, y] = (0, 71, 186, alpha)

# Crop bounding box
bbox = out_img.getbbox()
if bbox:
    out_img = out_img.crop(bbox)

# Add padding
final_w, final_h = out_img.size
canvas = Image.new("RGBA", (final_w + 40, final_h + 40), (0, 0, 0, 0))
canvas.paste(out_img, (20, 20), out_img)

# Ensure public/images directory exists
os.makedirs(os.path.dirname(dst_png), exist_ok=True)
canvas.save(dst_png, "PNG")
print(f"Saved crystal clear logo to {dst_png} with size {canvas.size}")
