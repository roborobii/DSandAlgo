def threeNumberSum(array, targetSum): #O(N^2) time
    # Write your code here.
	array.sort()
	result = []
	length = len(array)
	for curr in range(length):
		i = curr+1
		j = length-1
		newTarget = array[curr] - targetSum
		print(newTarget)
		while (i < j):
			
			summ = array[i] + array[j]
			print(summ)
			print(summ + newTarget)
			if ( summ + newTarget == 0):
				result.append([array[curr],array[i],array[j]])
				i+=1
				j-=1
			elif summ + newTarget < 0:
				i+=1
			else:
				j-=1
	return result
			
			

print(threeNumberSum([-2,10,49],57))
