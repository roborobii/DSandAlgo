# Complete the countingValleys function below.
def countingValleys(n, s): # O(s), linear to length of s (or n which is len of s)
    level = 0
    counter = 0
    for char in s:
        if char == 'U':
            level += 1
            if level == 0:
                counter += 1 
        else:
            level -= 1
    return counter