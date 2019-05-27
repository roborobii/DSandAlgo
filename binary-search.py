def binarySearch(array, target):
	return binarySearchHelper(array,target,0,len(array)-1)

def binarySearchHelper(arr, target, start, end): # O(log n) time; O(log n) space (frames on the call stack)
	if start > end:
		return -1
	mid = (start+end) // 2
	if arr[mid] > target:
		return binarySearchHelper(arr, target, start, mid-1)
	elif arr[mid] < target:
		return binarySearchHelper(arr, target, mid+1, end)
	else:
		return mid