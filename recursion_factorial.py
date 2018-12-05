def recursiveFactorial(n):
	if (n == 0): #base case
		return 1
	return n * recursiveFactorial(n-1) # goes onto call stack
	# can go stack overflow when n is infinite or when memory call stack is filled

def iterativeFactorial(n):
	if (n == 0):
		return 1
	f = 1
	for i in range(1, n+1):
		f *= i
	return f

print recursiveFactorial(10)
print iterativeFactorial(10)