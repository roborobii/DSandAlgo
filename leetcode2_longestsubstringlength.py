class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # use a set to keep track of unique, and 2 pointer windowing (sliding window)
        if len(s) == 0: return 0
        
        uniques_in_window = set()
        count = 1
        i = 0
        j = 0
        while j < len(s):
            if s[j] not in uniques_in_window:
                uniques_in_window.add(s[j])
                j += 1
            else: # s[j] in uniques_in_window
                uniques_in_window.remove(s[i])
                i += 1
         
            count = max(count, len(uniques_in_window))
            
        return count