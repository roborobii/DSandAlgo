'''
[Question from Pramp / LeetCode]
K-Messed Array Sort
Given an array of integers arr where each element is at most k places away from its sorted position, 
code an efficient function sortKMessedArray that sorts arr. For instance, for an input array of size 10 and k = 2, 
an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.

Example:

input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

'''

import heapq

def sort_k_messed_array(arr, k):
  '''
  Solution makes use of heap data structure to achieve O(N*log(K))
    where N is the number of elements in the given array (length of array)
    where K is the number of elements in the heap at any given time
  ==> Min Heap popping/pushing operations are O(log K)
  ==>  and we do this for N elements so total time complexity of O(N*log(K))  
  '''
  # heapify the first k+1 elements,
  #   we'll always have k+1 elements in the heap
  heap = arr[:k+1]
  heapq.heapify(heap) # makes min heap
  
  # loop
  #   replace arr[index] with the min heap's pop (the smallest value)
  #   add 1 to current index
  #   push the next value remaining in the array to min heap
  #   it needs to heapify down
  index = 0
  for remaining_index in range(k+1, len(arr)):
    arr[index] = heapq.heappop(heap) # replace it with the minimum
    index += 1
    heapq.heappush(heap,arr[remaining_index])
  while (heap):
    arr[index] = heapq.heappop(heap) # replace it with the minimum
    index += 1
  return arr

print sort_k_messed_array([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2)