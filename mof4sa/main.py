# Print "Hello, Hacker!" to the console
print ("Hello, World")
# ------------------
# Ask the user for their name and print "Welcome, [name]!".
name = input("What is your name: ")
print (f"Welcome, {name}")
# ------------------
# Convert "1337" (string) to an integer and add 10.
number = int("1337") 
number += 10
print (number)
# ------------------
# Create a program that asks for two numbers and prints their sum, difference, product,
# and quotient.
num1 = int(input("What is the first number: "))
num2 = int(input("What is the second number: "))
print (f"The sum of {num1} and {num2} is --> {num1 + num2}")
print (f"The difference of {num1} and {num2} is --> {num1 - num2}")
print (f"The product of {num1} and {num2} is --> {num1 * num2}")
print (f"The quotient of {num1} and {num2} is --> {num1 / num2}")
# ------------------
# Reverse the string "rekcah_repus" without using built-in functions
string = "rekcah_repus"
print(string[::-1]) # ---> variable[start:stop:step] 
# ------------------
# Write a program that checks if a number is even or odd.
num = int(input("Enter The Number: "))
if num % 2 == 0: 
    print(f"{num} is even.")
else:
    print(f"{num} is odd.")
# ------------------
# Create a variable that stores a boolean value and print it
boolean = True
print(boolean)
# ------------------
# Convert the string "100101" to a decimal number.
string = "100101"
print(float(string))
# ------------------
# Print "H4ck3r" with alternating uppercase and lowercase letters.
hack = "H4ck3r"
print(hack.upper())
print(hack.lower())
# ------------------
# Replace all vowels in "P@ssw0rd" with "*".
import string
password = "P@ssw0rd"
for i in password :
    if i in string.ascii_letters:
        password = password.replace(i, "*")
print(password)
# -----------------------------------------------------------------------------------------------------