// what is a stack?
// abstract data structure
// it's a collection of data that abide by the LIFO principle (last in first out) last element added to the stack will be the first element removed from the stack
// call stack used to manage function invocations; undo/redo uses stack;

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack { 
	// implemented as a singly linked list, with push and pop methods O(1) (adding/removing from head)
	constructor() {
		this.first = null; // would be tail
		this.last = null; // would be head
		this.size = 0;
	}

	push(value) { // into the beginning
		let node = new Node(value);
		if (this.first === null) {
			this.first = node;
			this.last = node;
		} else {
			node.next = this.last;
			this.last = node;
		}
		this.size++;
		return this;
	}

	pop() { // from the beginning
		if (this.last === null) return null;
		let node = this.last;
		if (this.size === 1) {
			this.first = null;
			this.last = null;
			this.size--;
			return node;
		}
		this.last = this.last.next;
		node.next = null;
		this.size--;
		return node;
	}
}

let s = new Stack();
s.push("hello");
s.push("my");
s.push("name");
// console.log(s.pop());
// console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s);
// more efficient to push and pop at the beginning of singly linked list
// popping at the end of a singly linked list will need to traverse the whole list O(N)
// while popping at the beginning is O(1)

/*

Stacks are LIFO abstract data structures
They are used to handle the call stack (function invocations), undo/redo, routing (remember pages visited for back/forward), and much more!
They are not built-in in JS, but they are easy to implement

*/