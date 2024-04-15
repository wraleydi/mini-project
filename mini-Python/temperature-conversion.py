# ----------------------------------------------------------------------------
# Author: [R02]
# ----------------------------------------------------------------------------
# Your Python code starts here

def convertTemperature(temperature, unit):

    if unit.upper() == 'C':
        result = (int(temperature) * 9/5) + 32
    elif unit.upper() == 'F':
        result = (int(temperature) - 32) * 5/9
    else:
        print('Choose the appropriate conversion!!!')
        return convertTemperature(temperature, unit)
    return result

print('Welcome!')
name = input('Enter your name: ')
print(f'Hello {name}, lets try a simple temperature conversion.')

x = input('Enter an example temperature of 20 C / 60 F: ')
temperature, unit = x.split()

if unit.upper() == 'C':
    result = convertTemperature(temperature, unit)
    print(f'Conversion result {result} F')
elif unit.upper() == 'F':
    result = convertTemperature(temperature, unit)
    print(f'Conversion result {result} C')
else:
    print('Invalid entry. Use C for Celsius or F for Fahrenheit.')

while True:
    repeat = input("do you want to try again y/n: ")

    if repeat != "y":
        print("thank you")
        break

    x = input('Enter an example temperature of 20 C / 60 F: ')
    temperature, units = x.split()
    print("conversion result:", convertTemperature(temperature, units))

# ==============>> [Thankyou!!!]
