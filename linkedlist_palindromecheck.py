# Definition for singly-linked list:
class ListNode(object):
    def __init__(self, x):
        self.value = x
        self.next = None


def isListPalindrome(l): # O(n) time and space
    stack = [] # essentially reversed linkedlist
    curr = l
    while (curr):
        stack.append(curr.value)
        curr = curr.next
    
    curr = l
    i = len(stack) - 1
    while (curr):
        if curr.value != stack[i]:
            return False
        curr = curr.next
        i -= 1
    
    return True

l = ListNode(0)
l.next = ListNode(1)
l.next.next = ListNode(0)
print(isListPalindrome(l))

l2 = ListNode(1)
l2.next = ListNode(2)
l2.next.next = ListNode(3)
print(isListPalindrome(l2))
