/*
Queue 
	follows first in first out (FIFO); unlike stack (LIFO)
	addition must happen at the rear/tail/end
	removal must happen at the front/head/beginning
	list or collection that restrict insertion to be at one end (rear) and deletion performed at the other end (front)

operations: must stay constant time O(1)
	1) enqueue (push or insert) (at the end)
	2) dequeue (pop or remove) (at the beginning)

	void enqueue(int x); // similar to push
	int dequeue(); // similar to pop but pops at the beginning

	3) front() or peek()
	4) isEmpty() or isFull()

		==============
enqueue->			-> dequeue
		==============
			 Queue

applications: printing queue, process scheduling, simulating wait

implementation of queues:
1) array implementation 
2) linkedlist implementation


*/