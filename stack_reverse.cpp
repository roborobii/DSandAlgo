/*
Stack playground consists of using stack to reverse a string or linked list;
*/
#include <iostream>
#include <stack> // stack stl
#include <stdio.h>
#include <cstring>
using namespace std;

void reverseCharString(char* c, int n) { // using stack, reverses a string or a character array
	stack<char> stack;
	for (int i = 0; i < n; i++) { 	// traverse the character array;
		stack.push(c[i]); 		// push characters into the stack;
	}
	for (int i = 0; i < n; i++) {
		c[i] = stack.top(); // last in first out from cstring stack into c array
		stack.pop(); // pop top from the cstring stack
	}
}

struct Node {
	int data;
	Node* next;
};

Node* insert(Node* head, int data) { // inserts Node into linkedlist, at the end.
	Node* temp = new Node();
	temp->data = data;
	temp->next = NULL;
	if (head == NULL) head = temp;
	else {
		Node* temp1 = head;
		while (temp1->next != NULL) temp1 = temp1->next;
		temp1->next = temp;
	}
	return head;
}

void printAll_recursive(Node* head) { // print using recursion
	if (head == NULL) {
		return; // base case
	}
	cout << head->data << " ";
	head = head->next;
	printAll_recursive(head);
}

Node* reverseLinkedListV2(Node* head) { // using stack, reverses a linked list
	if (head == nullptr) {
		return nullptr;
	}
	stack<Node*> stack;
	Node* temp = head;
	while (temp != nullptr) { // stops right before the last node
		stack.push(temp);
		temp = temp->next; // new head will be the next
	}
	temp = stack.top(); // last node is now stored into temp 
	head = temp; // head points to the head of temp
	stack.pop();
	// temp is now the head (beginning) of the new linked list
	while (!stack.empty()) { // cannot use a forloop to run and have stack.size because you are popping
		// head = stack.top(); // top of stack is now head
		// stack.pop(); // pop it off the stack
		// temp->next = head; // set the top of the stack to the next of head
		temp->next = stack.top(); // assign the top of the stack to the next of temp
		stack.pop(); // pop it off the stack
		temp = temp->next;
	}
	temp->next = nullptr;
	return head;
}

int main() {
	char c[1024];
	cout << ("Enter a string: ");
	cin.getline(c, sizeof(c));
	reverseCharString(c, strlen(c));
	cout << ("String reversed: ") << c <<endl;

	Node* head = nullptr;
	head = insert(head, 5); // linked list is now 5
	head = insert(head, 2); // linked list is now 5 2
	head = insert(head, 4); // linked list is now 5 2 4
	printAll_recursive(head);
	cout << endl;
	head = reverseLinkedListV2(head);
	printAll_recursive(head);
	cout << endl;
}