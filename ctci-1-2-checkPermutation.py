'''
CTCI 1.2

checkPermutation: 
Given two strings, write a method to decide if one is a permutation of the other

------------------------------------------
Initial take/Prior code description:
Strings are permutations of each other if they have the same number of elements occuring

if the lengths of strings do not match return false,
use a hashtable
count the number of occurences for each character in one string; each character is the key and its value is the number of occurences
go through the second string, decrement the number of occurences value for each character in the hashtable;
	if it is not in the hashtable return false
	if it's value is decremented to negative 1 return false
if go through both strings, then return true

O(N) time where N is the length of both strings
O(N) space since we would store each character as key in a hashtable


Solution:
1) ask interviewer if it is case sensitive and if white spaces matter; 
if they do matter, edge case where if lengths differ can return false right away
2) assuming ascii 128-character set, initialize an array of integers which operates like a hashtable; with ascii 128-characters so array length 128
3) go through the first string, incrementing the array at which the ascii character value is
4) go through the second string, decrementing the array at which the ascii character value is
	if the value turns negative then return false
5) return true if it passes the second string at the end

O(N) time where N is length of both strings; but can argue O(1) since only taking into account up to 128 chars for ascii assumption
O(1) space since we are initializing character array of 128

'''