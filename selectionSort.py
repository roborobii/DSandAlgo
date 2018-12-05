def selectionSort(arr): #[20,35,-15,7,55,1,-22]
	lastUnsortedIndex = len(arr) - 1 # 6
	while (lastUnsortedIndex > 0):
		largestIndex = 0
		i = 1
		while (i <= lastUnsortedIndex):
			if (arr[largestIndex] < arr[i]):
				largestIndex = i
			i += 1
		# perform swap
		temp = arr[largestIndex]
		arr[largestIndex] = arr[lastUnsortedIndex] # or arr[i]
		arr[lastUnsortedIndex] = temp

		# decrement lastUnsortedIndex
		lastUnsortedIndex -= 1

	return arr

print selectionSort([20,35,-15,7,55,1,-22])