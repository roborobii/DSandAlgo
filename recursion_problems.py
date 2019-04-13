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