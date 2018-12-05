def insertionSort(arr):
	firstUnsortedIndex = 1
	while (firstUnsortedIndex < len(arr)):
		newElement = arr[firstUnsortedIndex]
		i = firstUnsortedIndex - 1
		while (i >= 0):
			if (arr[i] > newElement):
				arr[i+1] = arr[i]
			else:
				arr[i+1] = newElement
				break
			if (i==0):
				arr[i] = newElement
				break
			i -= 1
		firstUnsortedIndex += 1
	return arr

def insertionSort2(arr):
	i = 1
	while (i < len(arr)):
		newElement = arr[i]
		j = i
		while (j > 0 and (arr[j-1]>newElement)):
			arr[j] = arr[j-1]
			j = j-1
		arr[j] = newElement
		i = i + 1
	return arr

def insertionSort3_recursive(arr):
	if len(arr) <= 1:
		return arr
	arr2 = insertionSort3_recursive(arr[1:])
	# for i in range(len(arr2)):
	# 	if arr[0] >= arr2[i]:
	# 		arr2 = arr2[:i] + [arr[0]] + arr2[i:]
	# 		# arr2[:0] = [] + [1] + [-22]
	# 		break
	for i in range(len(arr2)):
		if arr[0] > arr2[i]:
			if len(arr2) == i+1:
				arr2 += [arr[0]]
			continue
		else:
			arr2 = arr2[:i] + [arr[0]] + arr2[i:]
			break
	return arr2

print insertionSort([20,35,-15,7,55,1,-22])
print insertionSort2([20,35,-15,7,55,1,-22])
print insertionSort3_recursive([20,35,-15,7,55,1,-22])