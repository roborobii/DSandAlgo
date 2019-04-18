# Complete the jumpingOnClouds function below.
def jumpingOnClouds(c): # O(c), linear to length of c
    length = len(c)
    jumps = 0
    i = 0
    while (i < length):
        if (i+2 < length and c[i+2] == 0):
            i += 2
            jumps += 1
        elif (i+1 < length and c[i+1] == 0):
            i += 1
            jumps += 1
        else:
            break
    return jumps