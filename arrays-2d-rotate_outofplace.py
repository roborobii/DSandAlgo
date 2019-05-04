# rotate N by N matrix 90 degrees clockwise
def rotateImage_out(a): # O(N^2), must visit all elements in the matrix
    rotated = []
    rows = len(a)
    for i in range(rows):
        cols = []
        for j in range(rows):
            cols.append(0)
        rotated.append(cols)
    for i in range(rows):
        for j in range(rows):
            rotated[j][rows-1-i] = a[i][j]
    return rotated

print(rotateImage_out([[1, 2, 3],[4, 5, 6],[7, 8, 9]]))
print(rotateImage_out(
    [[10,9,6,3,7], 
     [6,10,2,9,7], 
     [7,6,3,8,2], 
     [8,9,7,9,9], 
     [6,8,6,8,2]]))
