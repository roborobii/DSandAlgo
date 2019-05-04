import math
# rotate N by N matrix 90 degrees clockwise
def rotate_inplace(matrix): # O(N^2), must visit all elements in the matrix
    n = len(matrix) # number of rows or columns since square matrix
    for row in range(math.floor(n/2)):
        for col in range(math.ceil(n/2)):
            temp_arr = [-1,-1,-1,-1]
            curr_i,curr_j = row,col
            for k in range(4): # 0 ... 3
            	temp_arr[k] = matrix[curr_i][curr_j]
            	curr_i,curr_j = rotate_indices(curr_i, curr_j, n)
            for k in range(4):
            	matrix[curr_i][curr_j] = temp_arr[(k + 3) % 4]
            	curr_i,curr_j = rotate_indices(curr_i, curr_j, n)
    return matrix

def rotate_indices(i,j,n):
	return j, n-1-i

print(rotate_inplace([[1, 2, 3],[4, 5, 6],[7, 8, 9]]))
print(rotate_inplace([[1, 2, 3, 4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))
print(rotate_inplace(
    [[1,2,3,4,5], 
     [6,7,8,9,10], 
     [11,12,13,14,15], 
     [16,17,18,19,20], 
     [21,22,23,24,25]]))
