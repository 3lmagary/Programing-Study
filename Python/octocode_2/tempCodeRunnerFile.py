# للتحقق من الاعداد الموجبه
def is_even(x):
    return x % 2 == 0
num = [5 ,6 ,7 ,8]
result= filter(is_even , num )
print(list(result))
print('#'*30)
def remove_special_and_convert(s):
    return int(''.join(filter(str.isdigit, s)))
strings = ["abc123", "def456!", "ghi789@#"]
result = map(remove_special_and_convert, strings)
print(list(result))
print('#'*30)