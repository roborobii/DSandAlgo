def is_rotation(arr1, arr2): # O(N)
	if len(arr1) != len(arr2):
		return False

	i = 0
	j = 0
	started = False # mark the start of similarity
	while (i < len(arr1)):
		if (started):
			if (arr1[i] == arr2[j]):
				i += 1
				j += 1
				if (j == len(arr2)):
					j = 0
			else:
				return False
		else:
			if (arr1[i] == arr2[j]):
				started = True
				continue
			else:
				j += 1
				if (j == len(arr2)):
					return False
	return True

print(is_rotation([1,2,3,4,5,6,7],[4,5,6,7,1,2,3]))