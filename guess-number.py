# ----------------------------------------------------------------------------
# Author: [R02]
# This code is in the public domain.
# ----------------------------------------------------------------------------
# Your Python code starts here
# How To Use
# ============================================================================
# Enter numbers by guessing them
# There are instructions that you can follow to guess correctly
# just follow the directions "NUMBERS TOO SMALL AND NUMBERS TOO LARGE"

import random

def guessNumber(random_number):
    attempts = 0
    while attempts < 4:
        try:
            guess = int(input('Guess the number from 1 to 20: '))
        except ValueError:
            print('Invalid input! Please enter a number.')
            continue

        if guess > 20 or guess < 1:
            print('Please enter a number within the range of 1 to 20.')
            continue

        if guess > random_number:
            print('Number is too big')
        elif guess < random_number:
            print('Number is too small')
        else:
            print('CONGRATULATIONS, YOU MADE IT!!!')
            return

        attempts += 1

    print('Sorry, you\'ve already tried 4 times.')
    again = input("Do you want to try again? (y/n): ")
    if again.lower() == 'y':
        random_number = random.randrange(1, 21)
        print('NOTE: YOU CAN ONLY GUESS 4 TIMES!!!')
        guessNumber(random_number)
    else:
        print('Better luck next time!')

name = input('Enter your name: ')
print(f'Hello {name}, welcome!')
number = input('Do you want to play guess the number? (y/n): ')

if number.lower() == 'y':
    random_number = random.randrange(1, 21)
    print('NOTE: YOU CAN ONLY GUESS 4 TIMES!!!')
    guessNumber(random_number)
else:
    print('Thank you')



# ==============>> [Thankyou!!!]