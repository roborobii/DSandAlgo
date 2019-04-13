/*
Graph Traversal:
- Visiting, updating, checking every node/vertex in the graph
- In real world applications, we may not visit every node and only visit
	closest neighboring nodes
- Applications: p2p networking, "closest match"/recommendations, web crawlers,
	shortest path/distance for GPS, mazes, and AI (shortest path to win game)
- Trees are special subset of graphs; every tree is a graph; not all graphs are trees.


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
}