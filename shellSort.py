def shellSort(arr):
	gap = len(arr)/2
	while (gap > 0):
		i = gap
		while(i<len(arr)):
			j = i
			newElement = arr[j]
			while (j > 0 and (arr[j-gap] > newElement)):
				arr[j] = arr[j-gap]
				j = j - gap
			arr[j] = newElement
			i = i + 1
		gap = gap/2
	return arr
print shellSort([20,35,-15,7,55,1,-22]) # should print [-22,35,-15,7,55,1,20]