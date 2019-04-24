def mine_sweeper(bombs, rows, cols):
	# intialize the nested arrays to zeros
	mine_sweeper_matrix = []
	for i in range(rows): # O(rows * cols) == ~O(N^2)
		row = []
		for j in range(cols):
			row.append(0)
		mine_sweeper_matrix.append(row)

	# intitialize the bombs into the nested array as -1
	for bomb in bombs: # O(bombs)
		mine_sweeper_matrix[bomb[0]][bomb[1]] = -1
	
	# loop through bombs array
		# for each bomb we want to increment its neighbors 
			# as long as it is not out of bounds
			# and it is not a bomb
	for bomb in bombs: #O(bombs*8 neighbors) == ~ O(bombs)
		neighbors = find_neighbors_indices(bomb, rows, cols)
		for neighbor in neighbors:
			if mine_sweeper_matrix[neighbor[0]][neighbor[1]] != -1:
				mine_sweeper_matrix[neighbor[0]][neighbor[1]] += 1

	return mine_sweeper_matrix

def find_neighbors_indices(bomb, rows, cols):
	# check if neighbor is out of bounds
	# only put neighbors that are not out of bounds
	# return all indices not out of bounds
	neighbors = []
	i = bomb[0]
	j = bomb[1]
	for x in range(i-1,i+2):
		for y in range(j-1,j+2):
			if (x >= 0 and x <= rows and y >= 0 and y < cols):
				neighbors.append([x,y])
	return neighbors


print(mine_sweeper([[0,0],[0,1]],3,4))