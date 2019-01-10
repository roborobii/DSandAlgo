def merge(arr1,arr2):
	i,j,k = 0,0,0
	arr3 = [0] * (len(arr1)+len(arr2))
	while (k < len(arr3) and i < len(arr1) and j < len(arr2)):
		if arr1[i] <= arr2[j]:
			arr3[k] = arr1[i]
			i += 1
			k += 1
		else:
			arr3[k] = arr2[j]
			j += 1
			k += 1
	while (i < len(arr1)):
		arr3[k] = arr1[i]
		i += 1
		k += 1
	while (j < len(arr2)):
		arr3[k] = arr2[j]
		j += 1
		k += 1
	return arr3
print merge([1,3,5],[2,4,6,8])

def mergeSort(arr):
	if (len(arr) <= 1):
		return arr
	mid = len(arr) / 2
	return merge(mergeSort(arr[:mid]), mergeSort(arr[mid:]))

print mergeSort([3,8,1,83,2,6])