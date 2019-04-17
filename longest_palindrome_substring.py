



def longestPalindrome_attempt1(self, s: str) -> str:
    # store each substring in a dictionary/hashmap, with a true/false value
    #   true if they are palindromic
    # store the substr with the longest palindrome
    # look it up in the dictionary at the end to return
    '''
    babab
    b
    ba
    bab
    baba
    babad
    a
    ab
    aba
    abad
    b
    ba
    bad
    a
    ad
    d
    '''
    longest = ""
    d = dict()
    for i in range(len(s)):
        substring = s[i:i+1]
        palindromic = self.isPalindrome(substring)
        d[s[:i+1]] = palindromic
        if (palindromic):
            longest = substring
    return longest

def isPalindrome_attempt1(self, s: str) -> bool:
    length = len(s)
    mid = math.floor(length/2)
    i = 0
    j = 0
    if (length % 2 == 1):
        i = mid
        j = mid
    else:
        i = mid-1
        j = mid
    while (j < length):
        if (s[j] != s[i]):
            return False
        i -= 1
        j += 1
    return True
        
    '''
    # start at the middle of the string
    # have two pointers, i & j
    # if len str is odd then start i and j a the same mid
    babad
      i
      j
    #if len str is even start i at mid-1 and j at mid
    babbad
      ij
    # while (j < len(s))
        # compare s[i] and s[j]
        #   if they are different, then return false
        # increment j and decrement i
    # return true
    '''

    
    
    