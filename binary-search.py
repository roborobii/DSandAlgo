def binarySearch_iterative(arr, target): # iterative approach, O(log n) time; O(1) space (no frames on call stack / no recursion)
	start = 0
	end = len(arr) - 1
	mid = (start+end) // 2
	while (start <= end):
		mid = (start+end) // 2
		if arr[mid] == target:
			return mid
		elif arr[mid] > target:
			end = mid-1
		elif arr[mid] < target:
			start = mid + 1
	return -1

def binarySearch_recursive(array, target): # recursive, O(log n) time; O(log n) space (frames on the call stack)
	return binarySearchHelper(array,target,0,len(array)-1)

def binarySearchHelper(arr, target, start, end): 
	if start > end:
		return -1
	mid = (start+end) // 2
	if arr[mid] > target:
		return binarySearchHelper(arr, target, start, mid-1)
	elif arr[mid] < target:
		return binarySearchHelper(arr, target, mid+1, end)
	else:
		return mid

# def binarySearchHelper(arr, target, start, end):
# 	mid = ((start+end) // 2)
# 	if start == end:
# 		if arr[mid] == target:
# 			return mid
# 		else:
# 			return -1
# 	if arr[mid] > target:
# 		return binarySearchHelper(arr, target, start, mid)
# 	elif arr[mid] < target:
# 		return binarySearchHelper(arr, target, mid+1, end)
# 	else:
# 		return mid
	