def countingSort(arr):
	# range is from 1 to 10
	temp = []
	for num in arr:
		temp.append(0)
	for i in range(len(arr)):
		temp[arr[i]-1] += 1
	arr = []
	for i in range(len(temp)):
		while (temp[i] > 0):
			temp[i] -= 1
			arr.append(i+1)
	return arr

arr = [2,5,9,8,2,8,7,10,4,3]
print countingSort(arr)

def countingSortStable(arr, digit):
	# print arr
	# get the range of values
	max_val = max(arr)
	min_val = min(arr)

	# create temporary variable based on the range of values, inclusive, initialize it all to 0
	temp = [0] * (max_val - min_val + 1)

	# count the number of occurences of, increment in the temp array with correct index
	for num in arr:
		temp[num-min_val] += 1
	# print temp

	# sum temp array to the next value
	val = 0
	for i in range(len(temp)): # summation
		val += temp[i]
		temp[i] = val
	# print temp

	#shift temp 1 to the right to get the correct start indecies
	for i in range(len(temp)-1, 0, -1):
		temp[i] = temp[i-1]
	temp[0] = 0
	# print temp

	# now countingsort stable
	# print(arr)
	temp2 = [0] * len(arr)
	for i in range(len(arr)):
		temp2[temp[arr[i]-min_val]] = arr[i]
		temp[arr[i]-min_val] += 1
	# print temp2
	return temp2



arr = [2,5,9,8,2,8,7,10,4,3]
# arr = [1,0,3,1,3,1]
print countingSortStable(arr)
