import math
def smallestDifference(arrayOne, arrayTwo): # O(NlogN + MlogN) time, O(1) space
	# N is length of arrayOne; M is length of arrayTwo
	arrayOne.sort() # O(NlogN)
	arrayTwo.sort() # O(MlogM)
	
	# initial values, algo will hold O(1) space
	smallest = abs(arrayOne[0] - arrayTwo[0])
	result = [arrayOne[0],arrayTwo[0]]
	
	# O(N+M)
	i,j = 0,0
	lengthOne,lengthTwo = len(arrayOne),len(arrayTwo)
	while (i < lengthOne and j < lengthTwo): 
		current_diff = abs(arrayOne[i] - arrayTwo[j])
		if current_diff < smallest:
			smallest = current_diff
			result = [arrayOne[i],arrayTwo[j]]
		if (arrayOne[i] < arrayTwo[j]):
			i += 1
		elif (arrayOne[i] > arrayTwo[j]):
			j += 1
		else: # where the difference is 0, return the result right away
			return result
	return result

def smallestDifference2(arrayOne, arrayTwo): # O(length first array * length of second array) time, O(1) space
    # Write your code here.
	current_diff = math.inf
	result = [arrayOne[0],arrayTwo[0]]
	# if we see a current difference that is less than the difference, change result
	# for each value in the first array, check differences with all the values of the second
		# so calculate difference of two values
		# get its absolute value, and if it's absoltute difference is lower than the current difference, change result to those two values
	for num1 in arrayOne:
		for num2 in arrayTwo:
			absolute_diff = abs(num1 - num2) # this diff the # away from 0
			if absolute_diff < current_diff:
				current_diff = absolute_diff
				result[0] = num1
				result[1] = num2
	return result