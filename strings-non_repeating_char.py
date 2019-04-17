def non_repeating_char(s): # O(N)
	freq_counter = dict()
	non_repeating = set()

	# aaabcb
	for char in s:
		if char in freq_counter:
			freq_counter[char] += 1
			if char in non_repeating:
				non_repeating.remove(char)
				
		else:
			freq_counter[char] = 1
			non_repeating.add(char)

	for char in s: # returns the first non-repeating
		if char in non_repeating:
			return char

	return ''

print(non_repeating_char("aaabcb"))
print(non_repeating_char("xxyz"))
print(non_repeating_char("aabb"))