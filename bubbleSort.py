def bubbleSort(arr): # ascending sort (bubble the largest elements to the right)
	unsortedPartitionIndex = len(arr) - 1
	i = 0
	while (unsortedPartitionIndex != 0):
		while (i < unsortedPartitionIndex and i < len(arr)):
			if (arr[i] > arr[i+1]):
				# swap (if the current element at i is greater than the next element)
				temp = arr[i]
				arr[i] = arr[i+1]
				arr[i+1] = temp
			i += 1
		unsortedPartitionIndex -= 1
		i = 0
	return arr

print bubbleSort([20,35,-15,7,55,1,-22])

# 20,35,-15,7,55,1,-22
# 20,-15,7,35,1,-22,55 