from copy import deepcopy

def swap(a, i, j):
	temp = a[i]
	a[i] = a[j]
	a[j] = temp
	return a

def permutationsHelper(a, n, i, result):
	# fill positions one by one
	if (i == n):
		print(a)
		d = deepcopy(a)
		result += [d]
		# print(result)
		return

	# fill position to know choices
	# swap current index with choice index
	for x in range(i, n): # take choices one by one
		a[x], a[i] = a[i], a[x] # make a choice and mark it as done; for position i
		permutationsHelper(a, n, i+1, result) # go ahead and fill the next place after made a choice
		a[x], a[i] = a[i], a[x] # backtracking

	# follow each choice one by one and keep moving forward

	# when out of choices, print permutation then backtrack

def permutations(a, n):
	result = []
	permutationsHelper(a, n, 0, result)
	return result

print(permutations([1,2,3], 3))
print(permutations(list("abc"), 3))


# def permutationsHelper(s, p):
# 	if (len(s) == 0):
# 		print(p)
# 	else:
# 		for i in range(len(s)):
# 			# choose, explore, unchoose
			
# 			# make a choice
# 			c = s[i]

# 			# print(s)
# 			s = s[:i] + s[i+1:] # remove index i from s
# 			p += c # add it to p
# 			print(p)

# 			# explore
# 			permutationsHelper(s, p)

# 			# un-choose/backtrack
# 			s = s[:i] + c + s[i+1:] # put back index i to s
# 			p = p[:len(p)-1] # remove it from p

# def permutations(s):
# 	permutationsHelper(s, "")


# permutations("ABC")