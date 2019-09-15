/*
Stack Playground; Implementation in both Arrays and Linked Lists;
	StackArray and StackLinkedList;
	Implemented with O(1) push, pop, top, isEmpty functions.
	More documentation and notes at the bottom, below the code.
*/

#include <iostream>
using std::cout;
using std::endl;

class StackArray // Stack implemented as an ARRAY
{
public:
	int *buf;
	int top = -1;
	int size;

public:
	StackArray(int newSize) {
		size = newSize;
		buf = new int[size];
	}

	void push(int x) {
		if (top == size - 1) {
			cout << "Error: stack overflow" << endl;
			return;
		}
		buf[++top] = x;
	}

	void pop() {
		if (top == -1) {
			cout << "Error: do not have any elements to pop" << endl;
			return;
		}
		--top;
	}

	// implement later... push2 and pop2 for dynamic array
	int* push2(int x) {
		if (top == size-1) {
			cout << "Stack overflow: Array multiplied by 2 and copied" << endl; 
			StackArray temp(size*2); // Make a new array bigger; size is *2 of the current array size
			for (int i = 0; i < size; i++) { // Copy all the elements from old array into the new array of bigger size
				temp.buf[i] = buf[i];
			}
			buf = temp.buf;
		}
		return buf;
	}

	int* pop2() {
		if (top == -1) {
			cout << "Error: do not have any elements to pop" << endl;
			return buf;
		}
		--top;
		return buf; 
	}

	bool isEmpty() {
		if (top==-1) 
			return true;
		return false;
	}

	int getTop() {
		return buf[top];
	}

	void printStack() {
		for (int i = 0; i <= top; i++) {
			cout << buf[i] << " " ;
		}
		cout << endl;
	}

	~StackArray() {
		delete [] buf;
	}
};

class StackLinkedList // Stack implemented as a LINKED LIST
{
private:
	struct Node {
		int info;
		Node* next;
	};
	Node* buf;
	int size;
	int top = -1;
public:
	StackLinkedList() {buf = nullptr;}
	void push(int x) {
		if (buf == nullptr) {
			buf = new Node();
			buf->info = x;
			buf->next = nullptr;
			return;
		}
		++top;
		Node* temp = new Node();
		temp->info = x;
		temp->next = buf;
		buf = temp;
		return;
	}

	void pop() {
		if (top == -1) {
			cout << "Error: cannot pop an empty stack" << endl;
			return;
		}
		if (top == 0) {
			buf = nullptr; // point head to nullptr
			--top;
			return;
		}
		--top;
		buf = buf->next; //else point head to the next
		return;
	}

	bool isEmpty() {
		if (top == -1) 
			return true;
		return false;
	}

	int getTop() {
		if (isEmpty()) {
			return 9999;
		}
		return buf->info; // returns the head's data
	}
};

void reverseString(char* this_string) {
	
}

int main() {
	StackArray stack(50);
	stack.push(10);
	stack.push(20);
	stack.push(30);
	stack.printStack();
	stack.push(50);
	stack.push(100);
	stack.pop();
	stack.printStack();


	StackLinkedList stack2;
	cout << stack2.isEmpty() << endl;
	stack2.push(5);
	stack2.push(4);
	stack2.push(3);
	stack2.push(2);
	cout << stack2.isEmpty() << endl;
	stack2.push(1);
	stack2.pop();
	stack2.pop();
	stack2.pop();
	stack2.pop();
	stack2.pop();
	stack2.pop();
	stack2.pop();
	cout << stack2.isEmpty() << endl;
	cout << stack2.getTop() << endl;

	return 0;
}

/*
Stack ... as an Abstract Data Structure, it is:
A list with restriction that insertion and deletion can be performed only from one end, which is the "top".

Operations that can be performed on a stack is...
where x is the variable that is stored

push(x)   ; pushes on top of stack
pop()     ; pops the top of the stack
top()     ; returns the top of the stack, no removes/adds
isEmpty() ; checks if stack is empty

all of these operations are O(1)

LAST IN FIRST OUT (LIFO)

applications: function calls/recursions (static/dynamic memory allocation)
			: can implement undo in an editor (ctrl z)
			: balanced parentheses


Stack ... as Implementation:
1) arrays
2) linked lists

/// array implementation (pseudo):

int A[10]; // max of array is 10 
// will worry about later multiply by 2 the size when it reaches top == size of array (overflow if push)
// multiply size of the array (by 2) to make a larger size array and then copy all the elements of the old array into the new array
// cost is O(n) to copy; (n is the number of elements in stack) ; but armotized (average case) is still O(1) for push even with this
top = -1; // top is -1; indicate empty list

push(x)  // constant time
{	
	top = top + 1;
	A[top] = x;
}

pop() // constant time
{
	top = top-1;
}

top() //constant time
{
	return A[top];
}

isEmpty() // constant time 
{
	if (top == -1)
		return true;
	return false;
}
*/