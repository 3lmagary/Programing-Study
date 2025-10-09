import string
# letters = string.ascii_letters

# def main(user_input):
#     first_char = user_input[0]
#     last_char  = user_input[-1]

#     start = letters.index(first_char)
#     end = letters.index(last_char)

#     missing = []
#     for i in range(start, end + 1):
#         if letters[i] not in user_input:
#             missing.append(letters[i])   # ضيف أي حرف ناقص

#     return missing if missing else None  # لو ناقص رجّعهم، لو كله تمام رجّع None

# print(main('fghjk'))   # ['i']
# print(main('fghk'))    # ['i', 'j']
# print(main('abcdef'))  # None

# =====================================


def find_missing_letter_in(GivenLetters):
    alpha = string.ascii_letters
    start = alpha.index(GivenLetters[0])
    for letter in alpha[start:]:
        if letter not in  GivenLetters:
            return letter
        
    return f"No Missing Letter In Sequence "

print(find_missing_letter_in('abcdeghi'))
