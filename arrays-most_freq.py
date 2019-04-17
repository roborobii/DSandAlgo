def most_freq(arr): # O(N)
	if (len(arr) == 0):
		return None
	
	freq_counter = dict()
	max_element = arr[0]
	max_freq = 1

	for element in arr:
		if element in freq_counter:
			freq_counter[element] += 1
			if freq_counter[element] > max_freq:
				max_element = element
				max_freq = freq_counter[element]
		else:
			freq_counter[element] = 1

	return max_element

print(most_freq([1,2,3,5,5,5]))
print(most_freq(["hello", "world", "world"]))
