/*

Hashtables
- Data Structure that store key/value pairs, keys are not ordered; fast for finding,
adding, and removing values
- Hashing: hashtables use hashing to store the values based on a key that is hashed
with a hash function
- Hash function: converts keys into valid array indices
- What makes a good hashing algorithm? 
	- must be evenly spread out, no cluster, distribute uniformly
	- no collisions/ less collisions
	- fast, constant time to enter, fetch, edit, remove
	- deterministic (same input yields same output)


- Collisions: occur in hashtables, must handle bc they are inevitable

2 ways to handling collisions
- Separate chaining: at each index, we store values using a more sophisticated data structure
	which could be another array or linkedlist in that index
	this allows to store multiple key-value pairs at same index
- Linear probing: when collision, search through array to find the next empty slot
	this allows us to store single key-value at each index

Average case time complexities of Hash Tables:
Insertion, Deletion, Access: O(1)
A good hash function makes it fast, distributes keys uniformly,
	and deterministic

*/ 

function hash(key, arrayLen) {
	let total = 0;
	for (let char of key) { // not constant
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % arrayLen;
	}
	return total;
}

function hash2(key, arrayLen) {
	let total = 0;
	let prime = 31; // reduces collisions
	for (let i = 0 ; i < Math.min(key.length,100); i++) {
		let char = key[i];
		let value = char.charCodeAt(0) - 96;
		total = (total*prime + value) % arrayLen;
	}
	return total;
}

class HashTable {
	constructor(size=53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let prime = 31; // reduces collisions
		for (let i = 0 ; i < Math.min(key.length,100); i++) { 
		// always gonna be at most 100 loops even with a key with 1 billion chars
		// this will illustrate O(1), and not necessarily the length of the string
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total*prime + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) { // O(1)
		let index = this._hash(key);
		if (this.keyMap[index] === undefined) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
		return index;
	}

	get(key) { // depending on quality of hash function -> O(1) or O(N), 
		// but O(N) string comparison and O(size) for chaining array
		// most likely O(N*S) where N is string comparison, S is size of chained array to linearily search in
		// if collisions happen less, then may be amortized to O(1)
		let index = this._hash(key);
		let chainedArray = this.keyMap[index];
		if (chainedArray === undefined) return undefined;
		for (let i = 0; i < chainedArray.length; i++) { // O(size of chaining array)
			if (key === chainedArray[i][0]) { // potentially O(N) string comparison
				return chainedArray[i];
			}
		}
		return undefined;
	}

	keys() { // O(size*chainArray_size)
		let allKeys = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i] !== undefined) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					allKeys.push(this.keyMap[i][j][0]);
				}
			}
		}
		return allKeys;
	}
	values() { // O(size*chainArray_size)
		let allValues = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i] !== undefined) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					allValues.push(this.keyMap[i][j][1]);
				}
			}
		}
		return allValues;
	}
	uniqueKeys() { // O(size*chainArray_size)
		let uniqueKeys = new Set();
		for (let i = 0; i < this.keyMap.length; i++) { // O(size)
			if (this.keyMap[i]) { // !== undefined) {
				for (let j = 0; j < this.keyMap[i].length; j++) { // O(chain_size)
					uniqueKeys.add(this.keyMap[i][j][0]);
				}
			}
		}
		return uniqueKeys;
	}
}

var ht = new HashTable();
ht.set("jerry", "val1");
ht.set("tom", "val2");
ht.set("tom", "val3");
ht.set("tom", "val4");
console.log(ht.get("s"));
console.log(ht.get("jerry"));
console.log(ht.keys());
console.log(ht.uniqueKeys());
console.log(ht.values());
