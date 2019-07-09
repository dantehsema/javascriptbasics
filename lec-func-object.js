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




/*
4a. create a function that checks if a given input is an array or an object. 
<<<<<<< HEAD
if its an array return "array", if its an object return 'object', if its neither return 'not an aray or object';
*/
 
/* 
var func = function(check){
	var a;
	if(Array.isArray(check)){
			a = 'Array';
			console.log('This checks for Arrays:', a);
	}else if((typeof check === 'object') && (!Array.isArray(check))){
		a = 'Object';
		console.log('This checks for Objects:', a);


same
if its an array return "array", if its an object return 'object', if its neither return undefined;
*/

var a;
var func = function(check){
	if(Array.isArray(check)){
		console.log('This is an Array');
		a = 'array';
	}else if((check = typeof 'object') && (!Array.isArray(check))){
		console.log('This is an Object');
		a = 'object';
	}else{
		return;
	}
	return a;
}



/*
4b. use your object checker function to return the value if your object contains a specified key, 
or check if the given input is an item in an array and return the index of the item. 

hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

if an input is part of a checked array, return the index of a secodn input item
if an input is part of a checked object, return value if a key/element is entered
*/
// var a;
// var func = function(check, input){
// 	if(Array.isArray(check)){
// 		console.log('This is an Array');
// 		a = 'array';
// 		for(var i=0; i<check.length; i++){
// 			if()
// 		}
// 	}else if((check = typeof 'object') && (!Array.isArray(check))){
// 		console.log('This is an Object');
// 		a = 'object';
// 	}else{
// 		return;
// 	}
// 	return a;
// }


var func = function(check, item){
	var a;
	var input;
	if(Array.isArray(check)){
			a = 'Array';
			console.log('This checks for Arrays:', a);
			for(var i=0; i<check.length; i++){
				if(item === check[i]){
					input = item;
					console.log('Here is the Index of input:', check.indexOf(check[i]));
				}
			}
	}else if((typeof check === 'object') && (!Array.isArray(check))){
		a = 'Object';
		console.log('This checks for Objects:', a);
		input = check[item];
		console.log(item, check[item]);
	}else{
		return;
	}
	return input;
}



/*
Rock Paper Scissors

5a. Write a function that determines the winning play in a game of
rock, paper, scissors

input
playRps('rock', 'scissors');

output
'rock'

input 
playRps('scissors', 'paper');

output
'scissors'
*/
// if a combination is ('rock', 'scissors') i want my output to be rock
//

// rock < paper,  scissors < rock,  paper < rock
// we want the loop to check both value and the key in the object
// if any player selects the correct key, and the other player would then select its value by default 

//  if player1 enters rock, the answer is rock if player2 enters scissors, else the answer is paper
//  if player1 enters scissor, the answer is scissors if player2 enters paper, else the answer is rock
//  //  if player1 enters paper, the answer is paper if player2 enters rock, else the answer is scissors
// var rules = [[rock, paper], [paper,scissors], [scissors, rock], [paper, rock] ] 

// var game = {rock: 'scissors', paper: 'rock', scissors: 'scissors'};
// var people = {player1: 'Carine', player2: 'Danteh'}

var win;
var rockPaperScissors = function(player1, player2){
	if(player1 == 'rock'){
		if(player2 == 'scissors'){
			win = 'rock';
		}else if(player2 == 'paper'){
			win = 'paper';
		}else{
			return 'try again';
		}
	}else if(player1 == 'scissors'){
		if(player2 == 'paper'){
			win = 'scissors';
		}else if(player2 == 'rock'){
			win = 'rock';
		}else{
			return 'try again';
		}
	}else if(player1 == 'paper'){
		if(player2 == 'rock'){
			win = 'paper';
		}else if(player2 == 'scissors'){
			win = 'scissors';
		}else{
			return 'try again';
		}
	}else {
		return 'try again';
	}
return win;
}







/*
5b. Write a function that determines the name of a player in a 
of rock paper scissors
*/
//input
var player1 = {
	name: 'carine',
	play: 'rock'
}

var player2 = {
	name:'sunny',
	play: 'scissors'
}
/*
displayWinner(player1, player2);

output
'carine'
*/

var rockPaperScissors = function(firstPerson, SecondPerson){
	if(player1.play === 'rock'){
		if(player2.play === 'scissors'){
			win = player1.name;
		}else if(player2.play === 'paper'){
			win = player2.name;
		}else{
			return 'try again';
		}
	}else if(player1.play === 'scissors'){
		if(player2.play === 'paper'){
			win = player1.name;
		}else if(player2.play === 'rock'){
			win = player2.name;
		}else{
			return 'try again';
		}
	}else if(player1.play === 'paper'){
		if(player2.play === 'rock'){
			win = player1.name;
		}else if(player2.play === 'scissors'){
			win = player2.name;
		}else{
			return 'try again';
		}
	}
return win;
}



/*
5c. Write a function that returns all possible throws a player can make 
in a 3 round game of rock paper scissors. 

input
rockPaperScissors()

output
[["rock", "rock", "rock"], ["rock", "rock", "paper"],
    ["rock", "rock", "scissors"], ["rock", "paper", "rock"],
             ...etc...
     ]


************Extra Credit***************

Make your function return answers for any number of rounds

input 
rockPaperScissors(5)

output
[["rock", "rock", "rock", "paper", "scissors"], 
	["rock", "rock", "paper", "rock", "scissors"],
    ["rock", "rock", "scissors", "paper", "scissors"], 
    ["rock", "paper", "rock", "paper", "scissors"],
             ...etc...
     ]
*/













