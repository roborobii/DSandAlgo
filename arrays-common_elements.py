def common_elements(arr1,arr2): 
	# O(max(N1,N2)), N1 being the # of elements in arr1, N2 in arr2
	# given two sorted arrays
	common = []
	'''
	# [1,2,3]
	        i
	# [2,3,4]
	     j
	'''
	i = 0
	j = 0
	while (i < len(arr1) and j < len(arr2)):
		if (arr1[i] == arr2[j]):
			common.append(arr1[i])
			i += 1
			j += 1
		elif (arr1[i] < arr2[j]):
			i += 1
		else:
			j += 1
	return common

print(common_elements([1,2,3],[2,3,4]))
print(common_elements([1,3,4,6,7,9],[1,2,4,5,9,10]))