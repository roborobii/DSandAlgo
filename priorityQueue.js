/*

Priority queue is an abstract data structure with each element has a priority associated with it,
higher priority is served before lower priority
Priority queues can be implemented with an array, or heap

I implemented it below as a min heap
*/

class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}	
}

class PriorityQueue { // as a minheap
	constructor() {
		this.values = [];
	}

	insert(value, priority) { // enqueue
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

	remove() { // also called extract max (or extract min if it was a min heap)
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

var minheap_priorityqueue = new PriorityQueue();
console.log("queuing---------");
console.log(minheap_priorityqueue.insert("mid-high",2));
console.log(minheap_priorityqueue.insert("mid-low",4));
console.log(minheap_priorityqueue.insert("mid",3));
console.log(minheap_priorityqueue.insert("high",1));
console.log(minheap_priorityqueue.insert("low",5));
console.log("dequeuing---------");
minheap_priorityqueue.remove();
minheap_priorityqueue.remove();
minheap_priorityqueue.remove();
minheap_priorityqueue.remove();