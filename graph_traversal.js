/*
Graph Traversal:
- Visiting, updating, checking every node/vertex in the graph
- In real world applications, we may not visit every node and only visit
	closest neighboring nodes
- Applications: p2p networking, "closest match"/recommendations, web crawlers,
	shortest path/distance for GPS, mazes, and AI (shortest path to win game)
- Trees are special subset of graphs; every tree is a graph; not all graphs are trees.

Traversing : visiting every vertex in the graph  
Must remember the visited nodes.

*/

class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	// add a vertex
	addVertex(vertex) { // O(1)
		// if vertex is alreayd there, don't overwrite
		if (!this.adjacencyList[vertex])
			this.adjacencyList[vertex] = [];
	}

	// remove a vertex 
	removeVertex(vertex1) { // O(V + E)
		// before removing, must remove all connections it has
		for (let i = 0; i < this.adjacencyList[vertex1].length; i++) {
			let node = this.adjacencyList[vertex1][i]; // each connection has a connection back so filter those
			this.adjacencyList[node] = this.adjacencyList[node].filter(vertex => vertex != vertex1);
		}
		delete this.adjacencyList[vertex1];
	}

	// add an edge
	addEdge(vertex1, vertex2) { // O(1)
		// if neither vertex is in graph yet, we can add
		this.addVertex(vertex1); 
		this.addVertex(vertex2);
		// find vertex1, push a connection to vertex2
		this.adjacencyList[vertex1].push(vertex2);
		// find vertex2, push a connection to vertex1
		this.adjacencyList[vertex2].push(vertex1);
	}

	// remove an edge
	removeEdge(vertex1, vertex2) { //
		// find vertex1, 
		// 		loop its value array for a connection to vertex2
		if (this.adjacencyList[vertex1] !== undefined) {
			for (let i = 0; i < this.adjacencyList[vertex1].length; i++) {
				if (this.adjacencyList[vertex1][i] === vertex2) {
					// remove value at index i
					this.adjacencyList[vertex1].splice(i,1);
				}
			}
		}
		// find vertex2, 
		// 		loop its value array for a connection to vertex1
		if (this.adjacencyList[vertex2] !== undefined) {
			for (let i = 0; i < this.adjacencyList[vertex2].length; i++) {
				if (this.adjacencyList[vertex2][i] === vertex1) {
					// remove value at index i
					this.adjacencyList[vertex2].splice(i,1);
				}
			}
		}
	}

	// Depth First Traversal (Recursion), and Helper Method
	depth_first_traversal_recursive(vertex) {
		let ordered = [];
		let visited = {};
		this.dfs_t_helper(vertex, visited, ordered);
		return ordered;
	}
	dfs_t_helper(vertex, visited, order) {
		if (this.adjacencyList[vertex] === undefined) return visited;
		visited[vertex] = true;
		order.push(vertex);
		for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
			let child = this.adjacencyList[vertex][i];
			if (!visited[child]) { // if child hasn't been visited yet
				this.dfs_t_helper(child,visited,order);
			}
		}
		return visited; // this is the base case, when there is no more children to visit, it returns
	}

	// Depth First Traversal Iterative; USE A STACK!
	depth_first_traversal_iterative(vertex) {
		// we push the vertex into stack
		// while stack is not empty
		//		pop off the stack and mark as visited
		//		push the popped off vertex's neighbors into the stack
		// return visited nodes (in the order they were visited)
		let visited = {};
		let result = [];
		let stack = [];
		stack.push(vertex);
		visited[vertex] = true;
		while (stack.length !== 0) {
			console.log(stack);
			let current_vertex = stack.pop();
			result.push(current_vertex);
			for (let i = 0; i < this.adjacencyList[current_vertex].length; i++) {
				let neighbor = this.adjacencyList[current_vertex][i];
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			}
		}
		return result;
	}

	// Breadth First Traversal Iterative; USE A QUEUE!
	// visit all neighbors at a given depth/height (number of edges from the source node)
	breadth_first_traversal_iterative(vertex) {
		// we queue the vertex into queue
		// while queue is not empty
		//		dequeue off the queue and mark as visited
		//		queue the dequeued vertex's neighbors into the queue
		// return visited nodes (in the order they were visited)
		let visited = {};
		let result = [];
		let queue = [];
		queue.push(vertex);
		visited[vertex] = true;
		while (queue.length !== 0) {
			console.log(queue);
			let current_vertex = queue.shift();
			result.push(current_vertex);
			for (let i = 0; i < this.adjacencyList[current_vertex].length; i++) {
				let neighbor = this.adjacencyList[current_vertex][i];
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			}
		}
		return result;
	}
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

console.log(g.depth_first_traversal_recursive("A"));
console.log(g.depth_first_traversal_iterative("A"));
console.log(g.breadth_first_traversal_iterative("A"));