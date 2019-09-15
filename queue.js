/*
Queue is a data structure with adding and removing (similar to stacks) BUT
This is a FIFO abstract data structure (first in first out)
Think of a line, first person in line is first person to get out or be served
First data in is first data out

Print/Task processing (print 1 pages at a time)

Like stack, can implement as array or linked list
More efficient to be implemented as a linked list than array because no getting around not shifting
*/

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	enqueue(value) { // add to the tail (last in) O(1)
		let node = new Node(value);
		if (this.head === null) {
			this.head = node;
			this.tail = node;
			this.size++;
			return this;
		}
		this.tail.next = node;
		this.tail = node;
		this.size++;
		return this;
	}

	dequeue() { // remove from head (first in) O(1)
		if (this.head === null) return null;
		let node = this.head;
		if (this.size === 1) {
			this.head = null;
			this.tail = null;
			this.size--;
			return node;
		}
		this.head = this.head.next;
		node.next = null;
		this.size--;
		return node;
	}
}
