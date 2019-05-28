'''
Given a String of length S, reverse the whole string without reversing the individual words in it. Words are separated by dots.

Input:
The first line contains T denoting the number of testcases. T testcases follow. Each case contains a string S containing characters.

Output:
For each test case, in a new line, output a single line containing the reversed String.

ex
i.like.this.program.very.much
->much.very.program.this.like.i
'''

def reverse_words(s): # with split method
	l = s.split(".")
	result = ""
	for i in range(len(l)-1,0,-1):
		result += l[i] + "."
	result += l[0]
	return result

print(reverse_words("i.like.this.program.very.much")) # much.very.program.this.like.i


def reverse_words2(s): # without split method; 
	# O(N)
	# note that even though there are 2 while loops, 
	#	we are looping only once through the whole string
	result = ""
	i = 0
	length = len(s)
	while (i < length):
		word = ""
		while (i < length and s[i] != "."):
			word += s[i]
			i += 1
		if (i == length):
			result = word + result
		else:
			result = "." + word + result
			i += 1
	return result
print(reverse_words2("i.like.this.program.very.much"))