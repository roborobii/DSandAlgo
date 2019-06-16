/*
NOTE: promises in practice, you will use promises that are
	returned to you (in AJAX, fetch functionality)...
	But it is useful to understand promises and how they work

promise: an object that represents a task that will be completed in the future
	analogy: taking a number at dmv to get help, that number is like a promise
		the help you get at the helpdesk is the invocation of your callback

add .then callback to promise
add .catch callback to promise

wrap setTimeout call in a promise // asynchronous
*/

var p1 = new Promise(function(resolve,reject){
	// resolve("resolved data");
	// reject("rejected data");
	var num = Math.random();
	if (num < 0.5) resolve(num);
	else reject(num);
});

p1.then(function(data) {
	console.log("Promise p1 resolved with data:", data);
}).catch(function(data) {
	console.log("Promise p1 was rejected with data:", data);
});

// Asynchronous code: wrapping setTimeout with Promise
// setTimeout is invoked then after 4 seconds invoke resolve

var promise = new Promise(function(resolve,reject){
	setTimeout(function(){
		var randomInt = Math.floor(Math.random() * 10);
		resolve(randomInt);
	}, 4000);
});

// even though promise code wont have finished running yet
//	we'll have an object that we can attach a callback onto
promise.then(function(data){
	console.log("Random int passed to resolve:", data);
});


/*
Promise chaining: allows multiple .then functions to be chained to promises
- we can combine asynchronous tasks into chain of promises
*/

var p2 = new Promise(function(resolve, reject) {
	setTimeout(function() {
		randomInt = Math.floor(Math.random() * 10);
		resolve(randomInt);
	}, 500);
});

p2.then(function(data){
	console.log("Random int passed to resolve:", data);
	return new Promise(function(resolve,reject) {
		setTimeout(function() {
			randomInt = Math.floor(Math.random() * 10);
			resolve(randomInt);
		}, 500);
	});
}).then(function(data){
	console.log("Second random int passed to resolve:", data);
});

// returning data instead of another promise
var p3 = new Promise(function(resolve, reject) {
	resolve(3);
});

p3.then(function(data) {
	return data*2;
}).then(function(data) {
	return data+20;
}).then(function(data) {
	console.log(data);
});