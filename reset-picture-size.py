import tkinter as tk
from tkinter import filedialog
from PIL import Image
import os

def compress_image():
    file_path = filedialog.askopenfilename()
    if file_path:
        img = Image.open(file_path)
        save_path = os.path.join(os.getcwd(), "compressed_image.jpg")
        img.save(save_path, "JPEG", quality=50)
        print(f"finished {save_path}")

root = tk.Tk()
root.title("Resize picture")

button = tk.Button(root, text='choose picture', command=compress_image)
button.pack(pady=20)

root.mainloop()
