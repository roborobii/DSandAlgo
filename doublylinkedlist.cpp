/*
Doubly Linked List Implementation
	Has insert at beginning(head) and at end;
	Has delete all nodes (freeing all space and memory correctly and ran with valgrind)
	Has print functions in both interative and recursive way
	Has print in reverse function in bothiterative and recursive way
*/

#include <iostream>
using namespace std;

struct Node {
	int data;
	Node* next;
	Node* prev;
};

void deleteNodes(Node* head) {
	Node* current = head;
	Node* next;
	while (current != nullptr) {
		next = current->next;
		delete current;
		current = next;
	}
}

Node* insertAtHead (Node* head, int x) {
	Node* newNode = new Node();
	newNode->data = x;
	newNode->prev = nullptr;
	newNode->next = nullptr;

	if (head == NULL) {
		head = newNode;
	} else {
		head->prev = newNode;
		newNode->next = head;
		head = newNode;
	}
	return head;
}

Node* insertAtEnd (Node* head, int x) {
	Node* newNode = new Node();
	newNode->data = x;
	newNode->prev = nullptr;
	newNode->next = nullptr;
	if (head == nullptr) {
		head = newNode;
	}

	Node* temp = head;
	while (temp->next != nullptr)
		temp=temp->next;
	temp->next = newNode;
	newNode->prev = temp;
	temp = nullptr;
	return head;
}

void printLL_iterative_reverse(Node* head) {
	Node* temp = head;
	if (temp == nullptr) {
		return;
	}
	while (temp->next != nullptr) {
		temp = temp->next ; // go to last node
	}

	while (temp != nullptr) {
		std::cout << temp->data;
		temp = temp->prev;
	}
	return;
}

void printLL_itrative_normal(Node* head) {
	Node* temp = head;
	if (temp == nullptr)
		return;
	while (temp != nullptr) {
		std::cout << temp->data; // << std::endl;
		temp = temp->next;
	}
	return;
}
// Recursive Print The LinkedLists
void printLL_recursive_normal(Node* head) { // prints what is in the linked list from head to tail
	if (head == nullptr) {
		//std::cout << std::endl;
		return;
	}
	std::cout << head->data ; //(" %d", head->data) << " "; // << std::endl;
	printLL_recursive_normal(head->next);
}

// Recursive Print the LinkedList in Reverse
void printLL_recursive_reverse(Node* head) { // prints what is in the linked list from head to tail
	if (head == nullptr) {
		//std::cout << std::endl;
		return;
	}
	printLL_recursive_reverse(head->next);
	std::cout << head->data ; //(" %d", head->data) << " "; // << std::endl;
}

int main() {
	Node* head = NULL;
	head = insertAtHead(head, 1);
	head = insertAtHead(head, 2);
	// printLL(head);
	head = insertAtHead(head, 3);
	head = insertAtHead(head, 4);
	head = insertAtEnd(head, 0);
	
	std::cout << "Recursive Normal: " << std::endl;
	printLL_recursive_normal(head);
	std::cout << std::endl;

	std::cout << "Iterative Normal: " << std::endl;
	printLL_itrative_normal(head);
	std::cout << std::endl;

	std::cout << "Recursive Reverse: " << std::endl;
	printLL_recursive_reverse(head);
	std::cout << std::endl;

	std::cout << "Iterative Reverse: " << std::endl;
	printLL_iterative_reverse(head);
	std::cout <<std::endl;

	deleteNodes(head);
	return 0;
}