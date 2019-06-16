'''
CTCI 1.1

isUnique: 
Implement an algorithm to determine if string has all unique characters.
What if you cannot use additional data structures

------------------------------------------
Initial take/Prior code description:
use a set, build up a set of unique characters from the string
O(N) time and space; building a set takes O(N) space
O(N) time because iterate through the string/array for each element
add onto set if not in the set yet
return false if it was already in set

if I cannot use additional data structures  then it will be O(N^2) time
O(N^2) time because I would use two for loops in order to check for a duplicate value

Solution:
1) ask interviewer if string is an ascii string (128 characters) so can set up initial array of boolean values
	if it is not an ascii string then we'll need to increase storage size
2) if it is ascii, there is the edge case of if the string length is greater than 128 characters then return false immediately
	cannot exceed 128-character alphabet for ascii; can also check if 256 character ascii (extended ascii)
3) time complexity is O(N) where N is characters, can also argue O(1) since it will never exceed 128 characters (if that is the case)
	O(1) space since we are initializing the boolean array to be fixed 128

if it was unicode/character set is not fixed, then express complexity as O(c) space and O(min(c,n)) where c is size of character set
'''

def isUnique(string):
	# O(N) time, N is the length of string (any character set)
	# O(N) space, we are storing at most N characters
	unique_set = set()
	for char in string:
		if char in unique_set:
			return False
		else:
			unique_set.add(char)
	return True

def isUnique2(string):
	# assuming string is only using 128-character ascii for its character set
	# O(N) time, since we are looping through the string still; but can argue O(1) time since we are only looping at most 128 times all the time
	# O(1) space, since we are assuming 128 character and initializing character_set in the beginning, we have a constant space
	if (len(string) > 128):
		return False
	character_set = [False]*128
	for i in range(len(string)):
		val = ord(string[i]) # turns char into value
		if (character_set[val]):
			return False
		character_set[val] = True
	return True
