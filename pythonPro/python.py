from PIL import Image
import os

# ফাইলের নাম
file_name = "sohan.png"

# বর্তমান ডিরেক্টরি থেকে শুরু করে সব সাব-ফোল্ডারে খুঁজবে
found = False
for root, dirs, files in os.walk(os.getcwd()):
    if file_name in files:
        img_path = os.path.join(root, file_name)
        found = True
        break

if found:
    img = Image.open(img_path)
    img.show()
    print(f"Image found at: {img_path}")
else:
    print(f"{file_name} পাওয়া যায়নি। নিশ্চিত করুন ফাইলটি আছে।")
