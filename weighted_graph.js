class Edge {
	constructor(data, weight) {
		this.data = data;
		this.weight = weight;
	}
}

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) { // O(1)
		// if vertex is alreayd there, don't overwrite
		if (!this.adjacencyList[vertex])
			this.adjacencyList[vertex] = [];
	}
	addEdge(vertex1, vertex2, weight) {
		this.addVertex(vertex1);
		this.addVertex(vertex2);
		this.adjacencyList[vertex1].push(new Edge(vertex2, weight));
		this.adjacencyList[vertex2].push(new Edge(vertex1, weight));
	}
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 2);
// graph.addEdge("C", "B", 3);

console.log(graph.adjacencyList);