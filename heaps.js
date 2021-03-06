/*
Binary Heaps Complexity:
Insertion: O(log n) // adding at left most available leaf then heapify
Removal: O(log n) // removing root (or swapping root with right most leaf) then heapify
Search: O(log n) // necessarily not used for searching but finding a maxima/minima O(1)
Max/Min Retrieval: O(1)

(Binary) Heap: very similar to a BST but some different rules
- Max Heap, parent nodes are always larger than child nodes
- Min Heap, parent nodes are always smaller than child nodes
heap is compact as possible, all children of each nodes are as full as they can be
	and left children are filled out first

Application of heaps:
Heaps are used to implement priority queues, which are very common data structures
Also used with graph traversal algorithms

Representing heaps as an array or list
for any parent node at index n, its left child is stored at 2n+1
	its right child is stored at 2n+2
for any child node at index n, its parent is at floor((n-1)/2)

inserting to heap, must heapify which bubbles up the newly added node if it is greater

remove from heap (the root), must heapify-down (fix) // extract max from max heap

Priority queue is an abstract data structure with each element has a priority associated with it,
higher priority is served before lower priority
Priority queues can be implemented with an array, or heap

*/
"use strict";

class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(value) {
		this.values.push(value);
		var index = this.values.length - 1;
		var parent_index = Math.floor(Math.abs((index - 1)/2));
		while (this.values[parent_index] < this.values[index]) {
			var temp = this.values[parent_index];
			this.values[parent_index] = this.values[index];
			this.values[index] = temp;
			index = parent_index;
			parent_index = Math.floor((index - 1)/2);
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
				// check if both children are greater
				if (this.values[i] < this.values[left] && this.values[i] < this.values[right]) {
					// check whichever is the greater child, swap with that
					if (this.values[left] < this.values[right]) {
						var temp = this.values[i];
						this.values[i] = this.values[right];
						this.values[right] = temp;
						i = right;
					} else if (this.values[left] > this.values[right]) {
						var temp = this.values[i];
						this.values[i] = this.values[left];
						this.values[left] = temp;
						i = left;
					}
				}
				// else if one child is greater
				else if (this.values[i] < this.values[left] && !(this.values[i] < this.values[right])) {
					var temp = this.values[i];
					this.values[i] = this.values[left];
					this.values[left] = temp;
					i = left;
				}
				else if (!(this.values[i] < this.values[left]) && this.values[i] < this.values[right]) {
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
				if (this.values[i] < this.values[left]) {
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

// [41,39,33,18,27,17]

var mbh = new MaxBinaryHeap();
console.log(mbh.insert(41));
console.log(mbh.insert(39));
console.log(mbh.insert(33));
console.log(mbh.insert(18));
console.log(mbh.insert(27));
console.log(mbh.insert(17));
console.log(mbh.insert(55));
mbh.remove();
mbh.remove();
mbh.remove();
mbh.remove();
