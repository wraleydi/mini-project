# ----------------------------------------------------------------------------
# Author: [R02]
# This code is in the public domain.
# ----------------------------------------------------------------------------
# Your Python code starts here

def kalkulator(number, number1):
    print(
        """please select the operation you want to perform \n1.addition\n2.subtraction\n3.multiplication\n4.division"""
    )
    operation = input("choose /1/2/3/4: ")

    if operation == "1":
        result = number + number1
    elif operation == "2":
        result = number - number1
    elif operation == "3":
        result = number * number1
    elif operation == "4":
        result = number / number1
    else:
        print("choose the appropriate number!!!")
        return kalkulator(number, number1)
    return result


print("hello welcome!")
name = input("enter your name: ")
print(f"hello, {name} let's try a simple calculator")

while True:
    number = int(input("enter number: "))
    number1 = int(input("enter number: "))
    print("operation results:", kalkulator(number, number1))

    repeat = input("do you want to try again y/n: ")

    if repeat!= "y":
        print("THANKYOU!")
        break

# ==============>> [Thankyou!!!]
