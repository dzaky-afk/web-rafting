import os
from PIL import Image

src_path = r"C:\Users\dzaky\.gemini\antigravity-ide\brain\f3ef7152-f27e-4aa8-b77f-bec5e7cc1fc2\.user_uploaded\media_1789354601916.png"
dst_png = r"c:\Users\dzaky\OneDrive\Documents\Web_Rafting\public\images\rafting-logo-exact.png"

img = Image.open(src_path).convert("RGBA")
print(f"Format: {img.format}, Size: {img.size}, Mode: {img.mode}")

# Inspect non-transparent pixels
r, g, b, a = img.split()
alpha_data = list(a.getdata())
visible_count = sum(1 for v in alpha_data if v > 10)
print(f"Total pixels: {len(alpha_data)}, Visible pixels: {visible_count}")

# Upscale 4x with Lanczos
w, h = img.size
upscaled = img.resize((w * 4, h * 4), Image.Resampling.LANCZOS)
up_r, up_g, up_b, up_a = upscaled.split()

# Enhance alpha sharpness slightly so edges are crisp and clean
up_a_data = list(up_a.getdata())
new_a = []
for val in up_a_data:
    if val < 30:
        new_a.append(0)
    elif val > 180:
        new_a.append(255)
    else:
        # Smooth ramp
        new_a.append(int((val - 30) / (180 - 30) * 255))

clean_alpha = Image.new("L", upscaled.size)
clean_alpha.putdata(new_a)

# Create solid royal blue image with this clean alpha
blue_layer = Image.new("RGBA", upscaled.size, (0, 71, 186, 255))
blue_layer.putalpha(clean_alpha)

# Crop
bbox = blue_layer.getbbox()
if bbox:
    blue_layer = blue_layer.crop(bbox)

# Add padding
fw, fh = blue_layer.size
canvas = Image.new("RGBA", (fw + 40, fh + 40), (0, 0, 0, 0))
canvas.paste(blue_layer, (20, 20), blue_layer)

os.makedirs(os.path.dirname(dst_png), exist_ok=True)
canvas.save(dst_png, "PNG")
print(f"Successfully generated clean logo to {dst_png} with size {canvas.size}")
