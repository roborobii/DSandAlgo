/*
Linked List Playground
This is a linked list implementation
	with iterative and recursive reverse functions
	it also has node insert and printAll function
*/

#include <iostream>
using namespace std;

struct Node {
	int data;
	Node* next;
};

Node* reverse_iterative(Node* head) {
	Node *current, *prev, *next;
	current = head;
	prev = NULL;
	while (current != NULL) {
		next = current->next;
		current->next = prev;
		prev = current;
		current = next;
	}
	head = prev;
	return head;
}

Node* reverse_recursive(Node* head) {
	if (head->next == nullptr) {
		return head; // returns the head of the nullptr and goes up the stack of recursion calls
	}
	Node* rev = reverse_recursive(head->next); // goes down until the head->next is nullptr; 
	head->next->next = head; //
	head->next = NULL; // sets head to null ( which was head->next before)
	return rev;
}

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

void printAll_iterative(Node* head) { // print using iteration
	while (head != NULL) {
		cout<< head->data;
		head = head->next;
	}
	cout << endl;
}

void printAll_recursive(Node* head) { // print using recursion
	if (head == NULL) {
		return; // base case
	}
	cout << head->data;
	head = head->next;
	printAll_recursive(head);
}

void printAllReverse_recursive(Node* head) { // print in reverse using recursion
	if (head == NULL) {
		return;
	}
	printAllReverse_recursive(head->next);
	cout << head->data;
}

int main() {
	Node* head = NULL;
	head = insert(head, 2); // insert function inserts at the end; easier to implement if insert at the beginning;
	head = insert(head, 4);
	head = insert(head, 6);
	head = insert(head, 8);
	printAll_iterative(head); // prints all normal --> 2468;
	printAllReverse_recursive(head); // prints all reversed --> 8642; still a 2468 linked list;
	head = reverse_iterative(head); // sets linked list reversed forever; 
	cout << endl;
	printAll_recursive(head); // prins the reveresed linked list  --> 8642;
	cout << endl;
	return 0;
}
