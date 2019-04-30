def click_recursive(matrix, i, j): # recursive, O(rows*cols) ==~ O(N^2) algorithm
	if matrix[i][j] == 0:
		matrix[i][j] = -2
		zero_neighbors = get_zero_neighbors(matrix, i, j)
		for zero_neighbor in zero_neighbors:
			matrix = click_recursive(matrix, zero_neighbor[0], zero_neighbor[1])
	return matrix

def get_zero_neighbors(matrix, i, j): # O(3*3) every time -> O(1)
	neighbors = []
	rows = len(matrix)
	cols = len(matrix[0])
	for x in range(i-1,i+2):
		for y in range(j-1,j+2):
			if (x >= 0 and x < rows and y >= 0 and y < cols and matrix[x][y] == 0):
				neighbors.append([x,y])
	return neighbors

print(click_recursive([[0,0,0,0,0],[0,1,1,1,0],[0,1,-1,1,0]], 0, 1))

def click_queue(matrix, i, j): # non-recursive, O(rows*cols) ==~ O(N^2) algorithm
	queue = []
	if matrix[i][j] == 0:
		matrix[i][j] = -2
		queue.append((i,j))
	else:
		return matrix
	while (len(queue) > 0):
		i,j = queue.pop(0)
		zero_neighbors = get_zero_neighbors(matrix, i, j) # O(1)
		for zero_neighbor in zero_neighbors:
			matrix[zero_neighbor[0]][zero_neighbor[1]] = -2
			queue.append((zero_neighbor[0], zero_neighbor[1]))
	return matrix

print(click_queue([[0,0,0,0,0],[0,1,1,1,0],[0,1,-1,1,0]], 0, 1))