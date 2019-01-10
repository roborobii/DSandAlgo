def bubbleSort(arr): #
	i = 0
	j = len(arr)-1 # 2
	while (i < j): # 0 < 2 # 0 < 1
		while (i < j): # 0 < 2 # 1 < 2 # 0 < 1
			if (arr[i] > arr[i+1]): # 5 > 3 # 5 > 2 # 3 > 2
				swap(arr, i, i+1) # swaps arr[i] and arr[i+1]
			i += 1 # i = 1 # i = 2 # i = 1
		j -= 1 # j = 1 # j = 0
		i = 0 # i = 0 # i = 0
	return arr

def selectionSort(arr):
	min_value_index = 0
	i = 0
	while (i < len(arr)):
		j = i+1
		while (j < len(arr)):
			if arr[min_value_index] > arr[j]:
				min_value_index = j
			j += 1
		swap(arr, i, min_value_index)

		i += 1
		min_value_index = i
	return arr
def insertionSort(arr):
	i = 0
	while (i < len(arr)):
		j = i+1 # value here is the one to insert
		while (j > 0 and j < len(arr)):
			if arr[j] < arr[j-1]: # swap only if arr[j] 
				swap(arr, j, j-1)
				j -= 1
			else:
				break
		i += 1
	return arr


def swap(arr, i1, i2):
	temp = arr[i1]
	arr[i1] = arr[i2]
	arr[i2] = temp

print(insertionSort([29,8,45,37]))
print(insertionSort([2,1,9,76,4]))