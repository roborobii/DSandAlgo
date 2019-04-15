class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}	
}

class PriorityQueue { // which is binary a minheap
	constructor() {
		this.values = [];
	}

	enqueue(value, priority) { // enqueue
		let newNode = new Node(value, priority);
		this.values.push(newNode);
		let index = this.values.length - 1;
		let parent_index = Math.floor(Math.abs((index - 1)/2));
		// console.log(index,parent_index);
		while (this.values[parent_index].priority > this.values[index].priority) {
			let temp = this.values[parent_index];
			this.values[parent_index] = this.values[index];
			this.values[index] = temp;
			index = parent_index;
			parent_index = Math.floor(Math.abs((index - 1)/2));
		}
		return this.values;
	}

	dequeue() { // also called extract max (or extract min if it was a min heap)
		if (this.values.length === 0) return undefined;
		if (this.values.length === 1) {
			var removed = this.values.pop();
			console.log(removed);
			console.log(this.values);
			return removed;
		}
		var removed = this.values[0];
		this.values[0] = this.values.pop();
		var length = this.values.length;
		var i = 0;
		while (true) {
			var left = 2*i+1;
			var right = 2*i+2;
			var hasLeft = 2*i+1 < length;
			var hasRight = 2*i+2 < length;
			if (hasLeft && hasRight) {
				// check if both children are lesser
				if (this.values[i].priority > this.values[left].priority && this.values[i].priority > this.values[right].priority) {
					// check whichever is the lesser child, swap with that
					if (this.values[left].priority > this.values[right].priority) {
						var temp = this.values[i];
						this.values[i] = this.values[right];
						this.values[right] = temp;
						i = right;
					} else if (this.values[left].priority < this.values[right].priority) {
						var temp = this.values[i];
						this.values[i] = this.values[left];
						this.values[left] = temp;
						i = left;
					}
				}
				// else if one child is greater
				else if (this.values[i].priority > this.values[left].priority && !(this.values[i].priority > this.values[right].priority)) {
					var temp = this.values[i];
					this.values[i] = this.values[left];
					this.values[left] = temp;
					i = left;
				}
				else if (!(this.values[i].priority > this.values[left].priority) && this.values[i].priority > this.values[right].priority) {
					var temp = this.values[i];
					this.values[i] = this.values[right];
					this.values[right] = temp;
					i = right;
				}
				// else // neither is greater
				else {
					break;
				}
			} else if (hasLeft && !hasRight) {
				if (this.values[i].priority > this.values[left].priority) {
					var temp = this.values[i];
					this.values[i] = this.values[left];
					this.values[left] = temp;
					i = left;
				}
				else break;
			} else { // has no children
				break;
			}
		}
		console.log(removed);
		console.log(this.values);

		return removed;
	}
}

// class NaivePriorityQueue { // gives smallest thing first
// 	constructor() {
// 		this.values = [];
// 	}
// 	enqueue(val, priority) { // O(N*LogN)
// 		this.values.push({val, priority});
// 		this.sort();
// 	}
// 	dequeue() {
// 		return this.values.shift();
// 	}
// 	sort() { // everytime we enqueue, we call sort; N*Log(N)
// 		this.values.sort((a,b) => a.priority - b.priority);
// 	}
// }

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

	dijkstra(startVertex, endVertex) {
		// find shortest path from start vertex to end vertex
		// returns the array containing nodes in order of the shortest path
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		let path = [];
		let smallest;

		// build up initial state
		for (let vertex in this.adjacencyList) {
			if (vertex === startVertex) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		// as long as there's something to visit (priority queue not empty)
		while (nodes.values.length) {
			smallest = nodes.dequeue().value;
			if (smallest === endVertex) {
				// done, build a path to return at end
				console.log(previous);
				console.log(distances);
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbor in this.adjacencyList[smallest]) {
					let nextNode = this.adjacencyList[smallest][neighbor];
					let candidate = distances[smallest] + nextNode.weight;
					if (candidate < distances[nextNode.data]) {
						distances[nextNode.data] = candidate;
						previous[nextNode.data] = smallest;
						nodes.enqueue(nextNode.data, candidate);
					}
				}
			}

		}
		console.log(path);
		return path.concat(smallest).reverse();

	}
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.adjacencyList);
console.log(graph.dijkstra("A","E"));