/*
Parentheses balance checker using stack
	[] {} () are balanced
	compilers check for these balances

merely counting the opening and closing
then checking if opening == closing won't work
ex: )( ... [(])

last opened must be closed first (LIFO; last in first out) 
[PROPERTY THAT MUST BE FOLLOWED FROM LEFT TO RIGHT] 
	==> last unclosed, first closed
ex: [()()]
	122221

PseudoCode: 
checkBalanced(string) {
	n = length of string
	create opening stack
	for i to n-1
		if exp[i] is an opening symbol
			push it into opening stack
		else it is a closing symbol
			check if opening stack is empty; if it is return false
			check if the closing symbol is the same as the top of the stack
				pop it out of the opening stack

			else... (if the closing symbol is not the same type as the top of the stack)
				return false
	if stack is empty at the end
		return true
	else
		return false 
}
*/

#include <stack>
#include <iostream>
#include <string.h>
using namespace std;


bool checkBalanced(char* checkString) {
	int n = strlen(checkString);
	stack<char> stack_opening;
	for (int i = 0; i < n; i++) {
		if (checkString[i] == '(' or checkString[i] == '{' or checkString[i] == '[') 	  // if opening bracket
		{
			stack_opening.push(checkString[i]);
		}
		else if (checkString[i] == ']' or checkString[i] == '}' or checkString[i] == ')') // if closing bracket
		{
			if (stack_opening.empty()) return false;
			char typeCheck; // typeCheck is string to check for similarity of the top
			if (checkString[i] == ']') typeCheck = '[';
			if (checkString[i] == '}') typeCheck = '{';
			if (checkString[i] == ')') typeCheck = '(';

			// follow rule: last unclosed is first closed;
			if (typeCheck == stack_opening.top()) // if the top of the stack is equal to the closing character
			{
				stack_opening.pop(); // pop the top; the unclosed is closed; keep checking until string is done
			}
			else // closing symbol is not the same type as the opening symbol at the top of the stack
			{
				return false;
			}
		}
		else // not any of {} () []
		{
			; // just want to keep iterating through the string; we just want to check for balance of [] {} ()
		}
	}
	// if (stack_opening.empty()) // when the loop of the string is done and theres no left over opening symbol
	// 	return true;
	// return false;
	return (stack_opening.empty())? true: false; // short-hand if else statement ... (cond) ? returned if true: returned if false
}

int main() {
	char a[] = "[([])]";
	char b[] = "1]";

	cout << checkBalanced(a) << endl;
	cout << checkBalanced(b) << endl;
	return 0;

}