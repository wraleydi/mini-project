# ----------------------------------------------------------------------------
# Author: [R02]
# ----------------------------------------------------------------------------
# Your Python code starts here

def BMIcalculator(weight, height):
    if type(weight) == float and type(height) == float:
        result = weight / height ** 2
        if result <= 18.5:
            return f'{result} Underweight'
        elif result >= 18.5 and result < 25:
            return f'{result} Normal'
        elif result >= 25 and result < 30:
            return f'{result} Overweight'
        elif result >= 30:
            return f'{result} Obesity!!!'
    else:
        print('ENTER NUMBERS CORRECTLY!!!')
        return BMIcalculator(weight, height)
    
name = input('Enter your name: ')
print(f'Hello {name}, welcome!')

BMI = input('Do you want to measure Body Mass Index (BMI)? (y/n): ')
if BMI.lower() == 'y':
    while True:
        try:
            weight = float(input('Enter your weight in kg (e.g., 50): '))
            height = float(input('Enter your height in meters (e.g., 1.70): '))
            print(BMIcalculator(weight, height))
            break
        except ValueError:
            print('ENTER NUMBERS CORRECTLY!!!')
            continue
else:
    print('Thank you')

# ==============>> [Thankyou!!!]
