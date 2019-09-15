// construct doubly linkedlist
// compare and contrast doubly linked lists with singly
// -- almost identical to singly linked lists, except every node one more pointer (to previous node)
// -- easier backwards traversal/tail deletion
// -- but more memory since two pointers instead of one

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	} 

	push(val) { // O(1)
		// if head is null set that node to be head and tail
		if (this.head === null) {
			this.head = new Node(val);
			this.tail = this.head;
		}
		// if head is not null add new node after tail pointer, 
		//		set previous of that node to tail, set tail to be that new node
		else {
			let node = new Node(val);
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length ++;
		return this;
	}

	pop() { // O(1)
		if (this.head === null) return undefined;
		if (this.length === 1) {
			let removed = this.head;
			this.head = null;
			this.tail = null;
			this.length--;
			return removed;
		}
		else {
			let removed = this.tail;
			this.tail = this.tail.prev;
			this.tail.next = null;
			removed.prev = null;
			this.length--;
			return removed;
		}
	}

	shift() { // O(1)
		// remove a node from the beginning
		if (this.head === null) return undefined;
		if (this.length === 1) {
			var removed = this.head;
			this.head = null;
			this.tail = null;
		} else {
			var removed = this.head;
			this.head = this.head.next;
			removed.next = null;
			this.head.prev = null;
		}
		this.length--;
		return removed;
	}

	unshift(val) { // O(1)
		// adding a node at the beginning
		var node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
		this.length++;
		return this;
	}

	get(index) { // O(N)
		if (index >= this.length || index < 0) return null;
		var mid = this.length / 2;
		if (mid <= index) {
			// start from tail
			var backwards = this.length - index - 1;
			var temp = this.tail;
			while (backwards != 0) {
				backwards--;
				temp = temp.prev;
			}
			return temp;
		}
		else {
			// start from head
			var forward = 0;
			var temp = this.head;
			while (forward < index) {
				forward++;
				temp = temp.next;
			}
			return temp;
		}
	}

	get2(index) { // O(N)
		if (index < 0 || index >= this.length) return null;
		if (index < this.length/2) {
			// start from head
			var counter = 0;
			var current = this.head;
			while (counter !== index) {
				counter++;
				current = current.next;
			}
			return current;
		} else {
			// start from tail
			var counter = this.length-1;
			var current = this.tail;
			while (counter !== index) {
				counter--;
				current = current.prev;
			}
			return current;
		}
	}

	set(index, val) { // O(N)
		// replacing a value of a node
		var node = this.get2(index);
		if (node === null) return false;
		node.val = val;
		return true;
	}

	insert(index, val) { // O(N)
		if (index < 0 || index > this.length) return false;
		if (index === 0) this.unshift(val);
		else if (index === this.length) this.push(val);
		else {
			var node = new Node(val);
			var next_node = this.get2(index);
			node.next = next_node;
			node.prev = next_node.prev
			next_node.prev = node;
			node.prev.next = node;
			this.length++;
		}
		return true;
	}

	remove(index) { // O(N)
		// remove at certain index
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) this.shift();
		else if (index === this.length-1) this.pop();
		else {
			var removed = this.get2(index);
			var removed_next = removed.next;
			var removed_prev = removed.prev;
			removed_next.prev = removed_prev;
			removed_prev.next = removed_next;
			removed.next = null;
			removed.prev = null;
			this.length--;
			return removed;
		}
	}

	print_list(){
		let temp = this.head;
		while (temp!==null){
			console.log(temp.val);
			temp = temp.next;
		}
	}
}

let dll = new DoublyLinkedList();
// dll.push(13);
// dll.push(12);
// dll.push(11);
// dll.push(10);
// dll.set(1,50000);
// console.log(dll.get(1));
// console.log(dll.get2(1));
// dll.insert(1,50);
// console.log(dll.remove(3));
// console.log(dll.pop());
// console.log(dll.shift());
// dll.unshift(14);
// dll.unshift(13);
// dll.unshift(12);
// dll.unshift(11);
// dll.shift();
// dll.shift();
// dll.shift();
// dll.shift();
// dll.shift();
// console.log(dll.pop());
// console.log(dll.pop());
// console.log(dll.pop());
// console.log(dll.pop());
dll.print_list();
console.log(dll);