class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) { // O(log n) ,  worst O(n)
		var node = new Node(val);
		if (this.root === null) {
			this.root = node;
			return this;
		} else {
			var current = this.root;
			while (true) {
				if (val === current.val) return this;
				if (val < current.val) {
					if (current.left === null) {
						current.left = node;
						return this;
					} else {
						current = current.left;
					}
				} else if (val > current.val) {
					if (current.right === null) {
						current.right = node;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}
	find(val) { // O(log n) , worst O(n)
		if (this.root === null) return false;
		var current = this.root;
		while (current) {
			if (val < current.val) {
				current = current.left;
			} else if (val > current.val) {
				current = current.right;
			} else {
				return true;
			}
		}
		return false;
	}

	BFS() {
		var queue = [];
		var visited = [];
		queue.push(this.root);
		while (queue.length > 0) {
			visited.push(queue[0].val);
			if (queue[0].left) {
				queue.push(queue[0].left);
			}
			if (queue[0].right) {
				queue.push(queue[0].right);
			}
			queue.shift();
		}
		return visited;
	}
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());

/*
Breadth first search (BFS)
traversal, iterative approach: 
	1) create a queue (or an array) and an array to store visited
	2) place root node in queue
	3) loop as long as there is anything in the queue
		dequeue node from queue and push value to the visited array
		if there is a left property on node dequeued, add to queue
		if there is a right property on node dequeued, add to queue
	4) return visited

Depth first search (DFS)

Trees are data structures that
	consist of nodes in a parent/child relationship
ex.
		  2
	    / \ \
	   4   6 9
	 // \\
	1 7  53

root node is 2
leaves are the most bottom of the tree 1,3,6

**lists are linear while trees are non-linear (many different paths)

not a tree if a child points to a parent or a child points to a sibling (or else it's a graph)
**a tree: every node is moving away from the root node
not a tree if more than one root, only one root.

root is the top node in a tree
child is a node directly connected from a node away from root
parent is converse notion of child
siblings are group of nodes with same parent
leaf: node with no child
edge: connection between one node and another


Tree applications: (single root, with children)
- HTML DOM, elements and inside are elements (parent/child relationship)
- Network routing
- Abstract syntax tree
- Artificial Intelligence (minimax)
- File Systems / Folders
- JSON

Trees (generic)
	can have any number of children
Binary Trees
	can have at most 2 children
Binary Search Trees 
	(data is kept at a particular order)
	special trees that can have at most 2 children
	sorted in order, store data that can be compared/sortable
	all numbers less than a node are in the left of the node
	all numbers greater than a node are in the right of the node
	every node to the left of the parent node is always less than parent
	every node to the right of the parent is always greater than the parent

*/