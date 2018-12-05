/*
EVALUATIONS OF EXPRESSIONS:
INFIX, POSTFIX, PREFIX
NOTE THAT WE ARE ONLY TALKING ABOUT A BINARY OPERATOR

[INFIX]:
		2+3 
		A-B
		(P*2)
		(2+3) * 4
		(P+Q) * (R+S)
<operand> <OPERATOR> <operand>

2 + 5 = 7
4 + 6 * 2 = 4 + 12 = 16

follow order of precedence of operations (PEMDAS)
1. parenthesis () {} []
2. exponents (right to left) 
3. multiplication/division (left to right)
4. addition/subtraction (left to right)

operator associativity:
in a case of similar precedence go left to right
2*6/2-3+7
	12/2-3+7
		6-3+7
			3+7 = 10

[PREFIX]
<OPERATOR> <operand> <operand>
	+ 2 3
	* 10 6
	+ a * b c

[POSTFIX]
<operand> <operand> <OPERATOR> 
	2 3 +
	p q -
	a b c * +
		a (b c *) +

postfix and prefix are good for machine
infix is good for human readability

[INFIX] to [POSTFIX]
A * B + C * D - E
{(A * B) + (C * D)} - E
	{(A B *) (C D *) +} E -
	A B * C D * + E -
	// MACHINE ONLY READS FROM LEFT TO RIGHT - MAKES IT VERY EFFICIENT; ONLY ONE PASS; USE LIFO

PSEUDO: // no error handling
evalPostfix(exp) { // exp = expression
	create stack
	for i to len of exp - 1
		if exp[i] is an operand/number
			push exp[i] into the stack
		else // it is an operator; evaluate the operand
			operand1 = stack.pop();
			operand2 = stack.pop();
			newlyOperated = operate the operator on the operands
			push the newlyOperated in to the stack
	return top of stack which is the final result
}

[INFIX] to [PREFIX]
A * B + C * D - E
	- {+ (* A B) (* C D)} E
	- + * A B * C D E
	// MACHINE ONLY READS FROM RIGHT TO LEFT - SIMILAR PSEUDO AS POST BUT START FROM RIGHT

// THERE ARE OTHER WAYS BUT STARTING FROM RIGHT TO LEFT WILL BE THE SIMPLEST

// harder and less efficient implementation from left to right:
evalPrefix(exp) {
	create stack
	for i to len(exp) - 1
		if exp[i] is an operator
			push it into the stack
		else exp[i] is an operand
			if stack.top() is an operand
				operand1 = exp[i] 
				operand2 = stack.top()
				stack.pop()
				operator = stack.top()
				stack.pop()
				operated = operate on the operands
				if (check if there's another operand at stack.top())
					(if there is...) then stack.top() => operand3
					stack.pop()
					operator2 = stack.top()
					stack.pop()
					operated2  = operate with operator 2 the operated and operand3
					stack.push(operated2)
				else (if there is not)
					push the operated back into the stack
	return top() top of the stack which will be the result

INFIX TO POSTFIX TRANSLATION
A + B * C - D * E
	A + (B * C) - (D * E);
		A + (B C *) - (D E *);
			A (B C *) + (D E *) -;
				A B C * + D E * -;
infixToPrefix(exp) {
	create stack 
}
*/

