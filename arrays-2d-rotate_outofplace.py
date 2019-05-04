# rotate N by N matrix 90 degrees clockwise
def rotate_outofplace(a): # O(N^2), must visit all elements in the matrix
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

print(rotate_outofplace([[1, 2, 3],[4, 5, 6],[7, 8, 9]]))
print(rotate_outofplace([[1, 2, 3, 4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))
print(rotate_outofplace(
    [[1,2,3,4,5], 
     [6,7,8,9,10], 
     [11,12,13,14,15], 
     [16,17,18,19,20], 
     [21,22,23,24,25]]))