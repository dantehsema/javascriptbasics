/*

First Class Objects
- javascripts functions are treated as first class object. This mean they can be stored as variables
objects or arrays, passed as an argument to a function, and returned from a function
https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function

stored as variables, objects, or arrays
var myNewFunc = function justDoIt() {} //variables

var myFirstObj = {
	operation: function justDoIt() {} //in objects
}

var arr = []
arr.push(function justDoIt(){}) //arrays


*/



/*A higher order function is a function that takes another 
function as an input, returns a function or does both.*/


//Built in Higher Order Functions 

/*SetTimeout
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
format
setTimeout(callback, time to wait(in sec), optional: val to be called with callback)
*/
setTimeout(
	function(val){console.log('im out here', val)}, 
	2000, 
	'carine is the best'
)

setTimeout(function() {
	console.log('I dont really have anythign to say')
}, 3000)
/*
For Each
The forEach() method executes a provided function once for each array element.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Format:

someArray.forEach(callback(val, index, array));

For each is a higher order function because it takes a callback as a parameter
*/
var grades = [98, 71, 62, 45]
var finalGrades = {}
grades.forEach(function(el, i, collection) {
	finalGrades[i+1] = el +=5;
	finalGrades['oldGrades'] = collection
})


/*
Find
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
The find() method returns the value of the first element in the array 
that satisfies the provided testing function. Otherwise undefined is returned

format 

someArray.find(callback(val, index, array))
*/

var highGrades = grades.find(function(el, i, collection) {
	if(collection[i] === 2) {
		return el > 71
	}
})



/*functions passed as an argument to a function
A callback is a function passed as an argument to another function.*/

var moveCar = function(collection, callback) {
	for (var i = 0; i < collection.length; i++) {
		callback(collection[i]);
	}
	
}

var arr = [3,4,2,5,6];

moveCar(arr, function(val) {
	console.log(val);
	if(val === 2) {
		return 'the val is 2!'
	} 
});

var addMore = function(val) {
	var newVal = val;
	console.log('this is the new val', newVal);
	return newVal +=3;
	
};

moveCar(arr, addMore);



/*

1. Given an array of numbers, write a function that returns a new array with the modulous of 2 each number 
in the array 

Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


*/

var a = [3,4,5,6,7];
function newFunc(arr) {
	return arr.map(function(item) {
		return item%2
	})
}
newFunc(a);
// output: [1, 0, 1, 0, 1]


/*

2. Given an array of numbers, write a function that filters out all even numbers;
 hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

input 
var a = [3,4,5,6,7];


output:
[4, 6]


*/
