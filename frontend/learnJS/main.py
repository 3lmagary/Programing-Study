





import tkinter as tk

# سعر الصرف
rate = 47.56

# إنشاء نافذة
root = tk.Tk()
root.title("محول الدولار/الجنيه")

# دالة لتحويل الدولار للجنيه
def dollar_to_pound(event):
    try:
        pound_var.set(round(float(dollar_var.get()) * rate, 2))
    except ValueError:
        pound_var.set('')

# دالة لتحويل الجنيه للدولار
def pound_to_dollar(event):
    try:
        dollar_var.set(round(float(pound_var.get()) / rate, 2))
    except ValueError:
        dollar_var.set('')

# المتغيرات المرتبطة بالمداخل
dollar_var = tk.StringVar()
pound_var = tk.StringVar()

# إنشاء الإدخالات والعناوين
tk.Label(root, text="دولار $").grid(row=0, column=0, padx=10, pady=10)
dollar_entry = tk.Entry(root, textvariable=dollar_var)
dollar_entry.grid(row=0, column=1, padx=10, pady=10)

tk.Label(root, text="جنيه EGP").grid(row=1, column=0, padx=10, pady=10)
pound_entry = tk.Entry(root, textvariable=pound_var)
pound_entry.grid(row=1, column=1, padx=10, pady=10)

# ربط الأحداث (تشبه onkeyup في جافاسكريبت)
dollar_entry.bind("<KeyRelease>", dollar_to_pound)
pound_entry.bind("<KeyRelease>", pound_to_dollar)

# تشغيل التطبيق
root.mainloop()
