/*
Arrow Functions

function myFunc() {
	...
}

const myFunc = () => {
	...
}

- solves issues with 'this' keyword in JS
- using 'this' inside an arrow function, it will always keep its context
	and not change it suprisingly on runtime


*/

// function printMyName(name) {
// 	console.log(name);
// }
const printMyName = (name) => {
	console.log(name);
}

// const multipleByTwo = (number) => {
// 	return number * 2;
// }
const multipleByTwo = number => number * 2;

printMyName("Robin");

console.log(multipleByTwo(4));