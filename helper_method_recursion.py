'''
Helper Method Recursion
- makes use of a design pattern that is commonly used in recursion
- use two functions, we have an outer function which returns the final
	result, inside it is the recursive function which is implemented separately
- this is different from just having one recursive function that calls on itself
'''

# HELPER METHOD RECURSION
def collect_odd_values(arr):
	# we do this helper_method if we need to build 
	# or save something outside the recursive function
	result = []
	# so here we are building the result using the helper function
	helper_odd_value(arr, result)
	return result

def helper_odd_value(arr, result):
	if (arr == []):
		return
	else:
		if (arr[0] % 2 == 1):
			result.append(arr[0])
			return helper_odd_value(arr[1:], result)
		return helper_odd_value(arr[1:], result)

print(collect_odd_values([1,2,3,4,5,6]))

# This can be implemented without helper method though; 
#	the reason why we may use helper methods are 
#   for ease of understanding
# We do not have to, we can still implement the recursive function
# 	that can save results

# PURE RECURSION
def collect_odd_values2(arr):
	if (len(arr) == 0):
		return []
	else:
		if (arr[0] % 2 == 1):
			return [arr[0]] + collect_odd_values2(arr[1:])
		return collect_odd_values2(arr[1:])

print(collect_odd_values2([1,2,3,4,5,6]))

def collect_odd_values3(arr):
	result = []
	if (len(arr) == 0):
		return result
	if (arr[0] % 2 != 0):
		result.append(arr[0])
	result = result + collect_odd_values3(arr[1:])
	return result
	
print(collect_odd_values3([1,2,3,4,5,6]))