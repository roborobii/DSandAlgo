from collections import deque

class Graph(object):
	def __init__(self):
		self.nodes = [] # stores all reference to all nodes

class Node(object):
	def __init__(self, data):
		self.data = data
		self.neighbors = [] # stores Neighboring nodes

def dfs(node):
	# mark node visited / put it in a visited hashset
	# process node
	# for each neighbor of node that is unvisited
		# recursively call dfs on each neighbor
	pass

def dfs_print(node, visited):
	if node == None: return
	# mark node visited / put it in a visited hashset
	visited.add(node)
	print(node.data)
	for neighbor in node.neighbors:
		if neighbor not in visited:
			dfs_print(neighbor,visited)
	return

def exists_dfs(node, target, visited): # boolean
	visited.add(node) # mark visited
	if node.data == target: return True # process
	for neighbor in node.neighbors: # recursive on neighbors
		if neighbor not in visited and exists_dfs(neighbor, target, visited):
			return True
	return False

def all_nodes_in_graph_exists(graph, target, visited): # if any unconnected nodes
	if graph == None: return False
	for node in graph.nodes:
		if exists_dfs(node, target, visited):
			return True
	return False

n1 = Node(1)
n2 = Node(2)
n3 = Node(3)
n4 = Node(4)
n5 = Node(5)
n6 = Node(6)
n1.neighbors.append(n2)
n1.neighbors.append(n3)
n2.neighbors.append(n4)
n4.neighbors.append(n6)
n3.neighbors.append(n4)
n3.neighbors.append(n5)
n5.neighbors.append(n6)
visited = set()
# print(exists_dfs(n1,5,visited))
dfs_print(n1, visited)


def bfs(node):
	# start queue and visited set, initiate node in both
	# while queue is not empty we can process bfs
		# pop a node off queue
		# process popped node
		# add all unvisited neighbors onto queue and visited
	pass

def bfs_print(node):
	if node == None: return
	bfsvisited = set([node])
	queue = deque([node]) # start queue, initiate root in it
	while queue: # while queue is not empty
		current = queue.popleft() # pop queue
		bfsvisited.add(current) # mark visited
		print(current.data) # process
		for neighbor in current.neighbors: # add popped node's neighbors into queue
			if neighbor not in bfsvisited:
				bfsvisited.add(neighbor)
				queue.append(neighbor)
	return

bfs_print(n1)
