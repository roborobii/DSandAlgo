class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # save a hashmap of the element as key and index as its value
        
        # for each number in the list,
        #   if target - the number is in the hashmap already
            # return the two indices
        
        #   if target - number is not in the hashmap
            # store the number as its key and index as its value in the hashmap
        
        # since I can assume that each input has one exact solution, there is always 
        # since I am only iterating the array once, I can not use the same element twice
        
        
        hashmap = dict()
        for i, num in enumerate(nums):
            if target - num in hashmap:
                return [hashmap[target-num], i]
            hashmap[num] = i
        return [-1,-1]