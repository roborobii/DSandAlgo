def mergeSort(arr): # O(nlogn)
	if (len(arr) == 1):
		return arr
	mid = len(arr) // 2
	left = mergeSort(arr[:mid])
	right = mergeSort(arr[mid:])
	return merge(left, right)

def merge(left, right):
	i = 0
	j = 0
	temp = []
	while (i < len(left) and j < len(right)):
		if (left[i] >= right[j]):
			temp.append(left[i])
			i += 1
		else:
			temp.append(right[j])
			j += 1
	while (i < len(left)):
		temp.append(left[i])
		i += 1
	while (j < len(right)):
		temp.append(right[j])
		j += 1
	return temp

print mergeSort([20,35,-15,7,55,1,-22])
print mergeSort([3,2,1])