/*
Dynamic programming: method for solving a complex problem
	by breaking it down into a collection of simpler subproblems
	and solving each subproblem just once and storing their
	solutions.
	- dynamic here does not mean changing, but refers to 
		coming up with optimal solution
	- it's an approach for solving problems by breaking down
		problem into smaller pieces; which can reduce amount
		of work by remembering previous pieces

When can you use DYNAMIC PROGRAMMING? when you have:
- optimal substructure: if an optimal solution can be constructed
	from optimal solutions of its subproblems
- overlapping subproblems: can be broken down into subproblems
	which are reused several times. I.e: fibonacci sequence

Fibonacci sequence: every number after the first two is the sum of 
	the two preceding ones

ex.
fib(5)
1,1,2,3,5

					 fib(5)
					   |
				fib(4) + fib(3)
				/              \
		fib(3) + fib(2)  fib(2) + fib(1)
		/
fib(2) + fib(1)

WE ARE REPEATING THINGS!
Overlapping subproblems: repetitions in calculations or work already done
In this fib(5), we are calculating fib(3) TWICE!
Imagine we have to grow this, calculate fib(100) 
	-> lots of problems/calculations are going to be repeated

Mergesort is not overlapping because we do not repeat the problems!
We are sorting/calculating different values everytime
so in the mergesort, there is not overlapping subproblems.
-> this will be divide and conquer

Optimal solution for fib(5) depends on best optimal solution for fib(4) and fib(3)
ex.
shortest path: from A to D   is	A->B->C->D
so it depends on A to C, A to B ( no repeating )


*/

function fib_recursive(n) { // O(2^N), exponential, this is not good!
	if (n == 1 || n == 2) {
		return 1;
	} else {
		return fib_recursive(n-1) + fib_recursive(n-2);
	}
}

// console.log(fib_recursive(100)); // RUNS VERY SLOW WITH JUST RECURSIVE APPROACH -> O(2^N)!

// since we are doing repeatitive work/calculations,
//  what if we could remember old values?!?!

/*
Dynamic Programming:
	Use past solutions to make solving future problems easier.
	2 flavors: memoization (top-down approach) and tabulation (bottom-up approach)

Memoization! (top-down approach)
- using some structure to store the result we found for a subproblem, 
so we dont repeat the work, we just look it up
- storing past solutions/data in an object/array/dictionary/some data structure
- store results of expensive functioncalls and returning the cached
	result when same inputs occur again
- usually in recursion

Tabulation! (bottom-up approach)
- store result of previous result in a table(tabulation)/hashtable/array/
- usually done using iteration instead of recursion
- better space complexity can be achieved here
*/

function fib_memo_dp(n, memo=[]) { // O(2^N), exponential, this is not good!
	if (memo[n] !== undefined) return memo[n];
	if (n == 1 || n == 2) {
		return 1;
	} else {
		var result = fib_memo_dp(n-1, memo) + fib_memo_dp(n-2,memo);
		memo[n] = result;
		return result;
	}
}

console.log(fib_memo_dp(100)); // remembers past solutions/calculations to save work 
// 	and less calculations bc no repetition, O(N) WHICH IS A HUGE IMPROVEMENT FROM O(2^N)
// linear instead of exponential

function fib_tabu_dp(n) {
	if (n <= 2) return 1;
	var fibNums = [0,1,1];
	for (var i=3; i <= n; i++) {
		fibNums[i] = fibNums[i-1] + fibNums[i-2];
	}
	return fibNums[n];
}

console.log(fib_tabu_dp(100)); 
// PRO: still O(N) but also does not use recursion so won't mess with call stack
// we do not use recursion here so we can get away without exceeding the callstack