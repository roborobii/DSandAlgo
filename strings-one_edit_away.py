def one_edit_away(s1,s2):
	s1_len = len(s1)
	s2_len = len(s2)
	if (s1_len == s2_len):
		return one_edit_away_same_length(s1,s2)
	elif (s1_len - 1 > s2_len or s2_len - 1 > s1_len):
		# one string is larger in length by 2 or more
		return False
	else: # one string larger in length by 1
		if (s1_len < s2_len):
			return one_edit_away_one_larger(s1,s2)
		else:
			return one_edit_away_one_larger(s2,s1)

def one_edit_away_same_length(s1,s2):
	edit_counter = 0
	i = 0
	s1_len = len(s1)
	while (i < s1_len):
		if (s1[i] != s2[i]):
			edit_counter += 1
			if edit_counter == 2:
				return False
		i += 1
	return True

def one_edit_away_one_larger(s1,s2):
	# second string paramater is larger by 1
	edit_counter = 0
	s1_len = len(s1)
	s2_len = len(s2)
	i = 0
	j = 0
	while (i < s1_len and j < s2_len):
		if (s1[i] != s2[j]):
			if i == j:
				j += 1
			edit_counter += 1
			if edit_counter == 2:
				return False
		i += 1
		j += 1
	return True

print(one_edit_away("abcde","abcd"))
print(one_edit_away("abcde","abcde"))
print(one_edit_away("abcde","abce"))
print(one_edit_away("abcde","abc"))
print(one_edit_away("abcde","abde"))
print(one_edit_away("abcde","abcfde"))