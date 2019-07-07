//strings, numbers, booleans, objects, arrays, and functions

// var name; 

// name = 'carine'

// name = 'apples'

var screenLock = true;


var personObj = {};

personObj['name'] = 'carine';
personObj.lastName = 'bongabih';

var personList = [];

personList[0] = 'names';
personList[6] = 'lastNames';

// var num = 0;
personObj.addFunction = function() {
	var num = 0; 
	return num += 1;
}

function secondFunc() {

}


var arrowFunction = () => {

}

var funcParameter = (() => {

})

// newFunction(personList); // call/invoke functions


//create a function that takes a string return a specific set of characters 

//create a function that takes a string and a special string set to be filtered.
//iterate over strings
//check if the current string at i is equal to a string the specials characters list
//create another for loop to compare the values in our special characters list.
	//if its equal to characters in the list we should remove it from the list by changing the value to and empty string;

var modifyString = function(string, specialKeys) {

	var string1 = string;
	for(var i=0;  i <= string1.length; i++) {
		for(var j=0; j<= specialKeys.length; j++) {
			if(string1[i] === specialKeys[j]) {
				string1 = string1.split(string1[i]);
				console.log('string :', string1);
				string1 = string1.join('');
				console.log('the new string :', string1)
				// string1 = string1.split(string1[i]).join('');

			}
		}
	}

	return string;

}

var data = {name: 'carine', age:12};

var objLoop = function(obj) {
	for(var el in obj) {
		console.log('this is teh key:', el, ',this is the value:', obj[el]);
	}
}


//1. create a function that removes every even character from a given string.
//Join:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

 

var even = function (char) {
	var char1 = char;
	for (var i=1; i<= char1.length; i++) {
		console.log('this is char at i:', char1[i]);
		if(char1[i]){
			char1 = char1.split(char1[i]).join('');
			console.log('Characters - evenChar:', char1);
		}
	}
	return char1;
}







//create a function that takes an array of objects and returns a list of name from each object in the array


//2. create a function that takes an array of objects and returns a list of name from each object in the array

//input          
nameList = [{name: 'carine', age:12}, {name: 'danteh', age: 5}]

//output
//['carine', 'danteh'];

//push: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

var arr = [];

var list = function(lis){
	for(var i=0; i<=lis.length; i++){
		if(lis[i] && lis[i].name){
			console.log('the Obj at i:' , lis[i]);
			arr.push(lis[i].name);
		}
	}

 return arr;
}


//3. Create a function that checks whether a given input is an array or an object.
//if the input is an array return a new array that describes the type of value of each item 
//if the input is an object return the value of each item in the object 

//input 
var input = [5, 'carine', true, ['hello', 'its me'], {name: 'sunny', location: 'california'}]

//output
// ['number', 'string', 'boolean', 'object', 'object']

//input 
//var input2 = {name: 'aaron', age: 6, alive: true, mates: ['harry', 'sam', 'alex']}

//hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

/*
i will create a function and name it func and the value i pass in it is check
check if the input is an array or an opject.
then i create a loop that check values in the input to see if it is an array, 
display the type of value for each item in a new array, array1.push(types of each item)
 if it an object display the values in the object in another array array2.push(values of object)

*/

var arr = [];
var func = function(check){
	if(Array.isArray(check)){
		for(var i=0; i<check.length; i++){
			console.log(check[i]);
			arr.push(typeof check[i]);
			console.log(typeof check[i]);
		}
	}else if((typeof check === 'object') && (!Array.isArray(check)) ){
		for(var key in check){
			console.log(key, check[key]);
			arr.push(check[key]);
		}
	}
	return arr;
}










