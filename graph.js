/*
Graph
- consist of finite set of vertices/nodes together 
	with a set of unordered pairs of vertices for an undirected graph
	or a set of ordered pairs for a directed graph
	simply: nodes + connections
- applications for graphs: social networks, location/mapping, routing algorithms,
	visual hierarchy, file system optimizations, everywhere ;)
- traverse through graph using BFS and DFS

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

	removeEdge2(vertex1, vertex2) { // more elegant solution to removing edge, with built-in js filter
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex != vertex2);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex != vertex1);
	}

	// remove a vertex 
	removeVertex2(vertex) {
		// before removing, must remove all connections it has
		// for each edge of the node we are removing, we call removeEdge.
		// for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
		// 	this.removeEdge2(this.adjacencyList[vertex][i], vertex);
		// }
		while (this.adjacencyList[vertex].length) {
			this.removeEdge2(this.adjacencyList[vertex].pop(), vertex);
		}
		delete this.adjacencyList[vertex];
	}
}

let g = new Graph();
g.addEdge("Tokyo", "Dallas");
g.addEdge("Dallas", "Rodio");
g.addEdge("Wyoming", "Rodio");
g.addEdge("Cali", "Dallas");
g.addEdge("Cali", "Wyoming");
g.addEdge("Bermuda", "Rodio");

/*
T ---- D ---- C
	  /      /
	 R ---- W 
	/
   B
*/

console.log(g.adjacencyList);
g.removeEdge("Wyoming", "Dallas");
console.log(g.adjacencyList);
g.removeEdge("Wyoming", "Cali");
console.log(g.adjacencyList);
// g.removeVertex("Dallas");
// console.log(g.adjacencyList);
g.removeVertex2("Dallas");
console.log(g.adjacencyList);


/*

vertex/node, edges/connections

Tree vs Graph:
A Tree is an undirected graph with any two vertices that are connected by EXACTLY ONE path.
Graph can have multiple paths to get from one node to another

Undirected Vs Directed:
- undirected, no arrows, no direction or 2 way connection (facebook friends/friendship graphs (2 way or both ways))
	friends have to be friends for both
- directed, with arrows, there is direction (followers graph (one way or both ways))
	one can follow someone but that someone doesnot have to follow back
	can be unidirectional or bidirectional

Weighted Vs Unweighted:
- weighted, values associated on the edges, information on the connection itself
- unweighted, no values

Adjacency Matrix:
using a matrix (commonly implemented as nested arrays) to represent the graph

Adjacency List:
stores the edges in which the node is connected
so [(1,5),(0,2),(1,3),(2,4),(3,5),(4,0)]
	  0		1	  2		3	  4		5
there are 6 nodes, node 0 is connected to (or has edges to) 1 and 5 ...
node 4 has connections/edges to 3 and 5

but this hinges on using positions of the array to find the connections
	this would lead to problems with gaps in array if we decide to have 
	larger array to account

we can instead use a hashtable or map to find the connections
so even if the nodes are not numeric, we can accomplish the implementation
of the adjacency list

{
	A: ["B", "C"],
	B: ["A", "C"],
	C: ["B", "A"],
}
in this adjacency list with hashtable implementation,
A has an edge to B and C
B has an edge to A and C
C has an edge to A and B
as seen here, keys are the nodes, and the corresponding value 
is an array of edges

*/