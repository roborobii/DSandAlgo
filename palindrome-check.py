def isPalindrome(string): # O(N/2) => O(N) time complexity, O(1) space complexity
	# if the length of the string is empty or 1, return true
	# else if the length of string is odd then start two pointers in the middle
	# else if the length of string is even then start two pointers by the middle, 
	#	one on the right and one on the left
	# while i >= 0 and j < len(string) (in bounds of the string)
	#	check values at i and j if they are similar
	# 	if they are not similar return false
	# return true if they were similar
	length = len(string)
	# if (length <= 1):
	# 	return True
	mid = length // 2
	i = mid
	j = mid
	if (length % 2 == 0): # even length
		i -= 1
	while (j < length):
		if (string[i] != string[j]):
			return False
		i -= 1
		j += 1
	return True

def isPalindrome2(string): # similar complexities O(N) time, O(1) space
	# similar logic, but cheks from the outside
	i = 0
	j = len(string)-1
	while (i < j):
		if string[i] != string[j]:
			return False
		i -= 1
		j += 1
	return True