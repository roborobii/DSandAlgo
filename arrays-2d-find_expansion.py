def click(matrix, i, j): # O(rows*cols) ==~ O(N^2) algorithm
	if matrix[i][j] == 0:
		matrix[i][j] = -2
		zero_neighbors = get_zero_neighbors(matrix, i, j)
		for neighbor in zero_neighbors:
			matrix = click(matrix, neighbor[0], neighbor[1])
	return matrix

def get_zero_neighbors(matrix, i, j):
	neighbors = []
	rows = len(matrix)
	cols = len(matrix[0])
	for x in range(i-1,i+2):
		for y in range(j-1,j+2):
			if (x >= 0 and x < rows and y >= 0 and y < cols and matrix[x][y] == 0):
				neighbors.append([x,y])
	return neighbors

print(click([[0,0,0,0,0],[0,1,1,1,0],[0,1,-1,1,0]], 0, 1))