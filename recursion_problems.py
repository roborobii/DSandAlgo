# reverse string using recursion
def reverse_recursion(s):
	if (len(s) == 0):
		return ''
	else:
		return reverse_recursion(s[1:]) + s[0]

print(reverse_recursion("hello world!"))

def reverse_recursion2(s):
	if (len(s) == 0):
		return ''
	else:
		return s[len(s)-1] + reverse_recursion2(s[:len(s)-1])

print(reverse_recursion2("hello world!"))

# check if string is palindrome, recursively
def is_palindrome_r(s):
	if (len(s) == 0 or len(s) == 1):
		return True
	else:
		if (s[0] == s[len(s)-1]):
			return True and is_palindrome_r(s[1:len(s)-1])
		return False

print(is_palindrome_r("abcdedcba"))
print(is_palindrome_r("abcdedba"))

# flatten recursive (values in arrays of arrays -> returns just one array with all values)
def flatten_recursive(nested_arrs):
	if (len(nested_arrs) == 0):
		return []
	else:
		if (isinstance(nested_arrs[0], list)):
			return flatten_recursive(nested_arrs[0]) + flatten_recursive(nested_arrs[1:])
		else: # type of value or number/int
			return [nested_arrs[0]] + flatten_recursive(nested_arrs[1:])

print(flatten_recursive([1, 2, 3, [4, 5]])) # [1,2,3,4,5]
print(flatten_recursive([1, [2, [3, 4], [[5]]]])) # [1,2,3,4,5]
print(flatten_recursive([[1],[2],[3]])) # [1,2,3]

# capitalize first recursive (given array of strings, capitalize first letter of each string)
def capitalize_first_r(arr_str):
	if (len(arr_str) == 0):
		return []
	else:
		return [arr_str[0].capitalize()] + capitalize_first_r(arr_str[1:])

print(capitalize_first_r(['car','taco','banana']))

# Nested Dictionary Number Sum recursive
def nested_dict_r(nested_dicts):
	total_sum = 0
	total_sum = nested_dict_helper(nested_dicts, total_sum)
	return total_sum

def nested_dict_helper(nested_dicts, total_sum):
	if (nested_dicts == {}):
		return 0
	else:
		# since we cannot index a dictionary, we must use a forloop and save the total
		for key,value in nested_dicts.items():
			if (type(value) == dict):
				total_sum = nested_dict_helper(value,total_sum)
			elif (type(value) == int):
				total_sum += value
		return total_sum

obj1 = {"outer": 2, "obj": {"inner": 2, "otherObj": {"superInner": 2, "notANumber": True, "alsoNotANumber": "yup"} } }
print(nested_dict_r({"key1":2, "key2": {"key3":2, "key4": {"key5":8}}}))
print(nested_dict_r(obj1))

def nested_dict_r2(d, total=0):
	for key in d.keys():
		if (type(d[key]) == dict):
			total += nested_dict_r2(d[key])
		elif (type(d[key]) == int):
			total += d[key]
	return total
print(nested_dict_r2({"key1":2, "key2": {"key3":2, "key4": {"key5":8}}}))
print(nested_dict_r2(obj1))
