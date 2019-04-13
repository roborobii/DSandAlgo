# Martin and the Dragon Recursion
def is_any_odd(numbers):
	if (numbers == []):
		return False
	else:
		return (numbers[0] % 2 == 1) or is_any_odd(numbers[1:])

print(is_any_odd([222,444,1]))

''' 
What is recursion? 
- A process/function that calls itself
- Behind the scenes, function calls are invoked and go in an order
The order is in last in first out (LIFO) using a stack, called
the Call Stack; any time a function is invoked, it is pushed on
top of the call stack.
- We would keep pushing onto the call stack with recursion

BASE CASE
- We invoke the same function with a DIFFERENT INPUT 
until a BASE CASE is reached

'''

# iterative countdown
def cd_iterative(number):
	while (number >= 0):
		print(number)
		if (number == 0):
			print("Blast OFF!!!")
		number -= 1
	return

# recursive countdown
def cd_recursive(number):
	if (number == 0):
		print(number)
		print("Blast OFF!!!")
		return None
	else:
		print(number)
		return cd_recursive(number-1)

cd_recursive(3)
cd_iterative(3)

# iterative factorial 
def factorial_iterative(number):
	total = 1
	while (number>0):
		total *= number
		number -= 1
	return total


# recursive factorial
def factorial_recursive(number):
	if (number == 1 or number == 0):
		return 1
	else:
		return number * factorial_recursive(number-1)

print(factorial_iterative(5))
print(factorial_recursive(5))