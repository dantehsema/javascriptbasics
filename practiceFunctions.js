var name = "carine";

var array = [5,6,7];

var obj = {
	name: "carine", 
	age: 21,
	talent: "fabulous"
}


var func = function(num) {
	
	return num * 2;;
}

func(3);

//create a function thats takes two strings and adds them together

function twoStrings(str1, str2) {

	document.write(str1 + str2);
}

// twoStrings('Carine', 'you are awesome');



function askCarine(val) {
	if(name === val) {
		document.write(name)
	} else if(val === "you are the best") {
		document.write("we know");
	} else {
		document.write("does not exist")
	}
}

//create a function that returns even if the value is even and odd if the number is odd. 

//if value is even val%2 === 0 return even
//if value is odd val%2 !==0 return odd


function orThis (val) {
	if((typeof val == "number") || (typeof val === "string")) {
		console.log('its primitive');
	} else if(typeof val === "object" && val[0]) {
		console.log(val[0]);
	} else {
		console.log('doesnt apply')
	}
}


// function oddEven(num) {

// 	if((num % 2 === 0) && (typeof num === 'number')) {
// 		console.log('even');
// 	} else if((num % 2 !== 0) && (typeof num === 'number')) {
// 		console.log('odd');
// 	} else {
// 		console.log('this is not a number')
// 	}

// }




// function oddEven(num) {
// 	if(typeof num === 'number') {
// 		if(num % 2 === 0 ) {
// 			console.log('even');
// 		} else {
// 			console.log('odd');
// 		}
// 	} else {
// 		console.log('please enter a number');
// 	}

// }




function whoYou (val){


	if (val === "Carine") {
		document.write ("How did you know");
	} else if ( val === "danteh"){
		document.write ("Is he not smart.");
	} else {
		document.write ("Does not exist");
	}

}




//Create a function that returns even if the value is even and odd if the number is odd.

//if value is even val%2 === 0 return even
//if value is odd val%2 ===0 return odd

// function evenOdd (val){
// 	if (val%2 === 0){
// 		document.write ("even")
// 	}else{
// 		document.write ("odd")
// 	}
// }






function oddEven (numb){
	if (typeof numb === 'number'){
		if (numb%2 === 0){
			console.log ("Even")
		}else{
			console.log ("Odd")
		}
	}else{
		console.log ("Please enter a number")
	}
}








/*
//Anogram
var sorted = [];
function alphabetize(word) {
	for(var i=0; i<=word.length; i++){
		if(typeof word = 'string'){
			word = word.split('');
		    word = word.sort();
		    word = word.join('');
		    sorted.push(word);
		}
		
	} 
	return sorted;   
}
*/

var sorted = [];
function Anogram(word){
	for(var i=0; i<=word.length; i++){
		if(word[i]){
			a = word.split(word[i]);
			console.log('split at i:', word[i]);
			a = a.join('') + word[i];
			console.log('Join at i:', a);
			sorted.push(a);
			// for(var j=0; j<=sorted.length; i++){
			// 	if(sorted[a.i]){
			// 		n = sorted.split(sorted[a.i]);
			// 		console.log('split at sorted.a.i:', n);
			// 		n = n.join('') + n;
			// 		console.log('join at sorted.a.i:', n);
			// 		sorted.push(n);
			// 	}
			// }
		}
	}
return sorted;
}


/*
* Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 */

 // write a loop that iterates through another loop to see if 1 character is equal 
 // to another character in that string. if true, then push that character into my 
 // array. 

var commonCharacters = function(string1, string2) {
	var allChar={};
	var string1Object = {};
	for(var i=0; i<string1.length; i++){
		// char = string1[i];
		console.log('char:', string1[i]);
		string1Object[string1[i]] = string1[i];
	}
	for(var j=0; j<string2.length; j++){
		if((string2[j] === string1Object.key) && (string2[j]!== allChar.key)){
			allChar[string[j]] = string2[j];}
		// }else if (string2[j] !== string1Object.key){
		// 	allChar[string[j]] = string2[j];
		// }
	}
		// function secondString(char,string2){
		// 	for(var j=0; j<string2.length; j++){
		// 		var secondChar = string2[j];
		// 		console.log('secondChar:', string2[j]);
		// 		commonCharacters.call(this,char)
		// 		if(char===secondChar){
		// 			console.log('Similar character in i and j:', secondChar);
		// 			sameChar.push(secondChar);
		// 		}
		// 	}
		// }
		return allChar;
	}
	


/*
2a)create a variable called bookcase that is an empty array that had a list of book objects.
Create a Book class that has a name property and a title property
write a function that takes a title and an author as parameters and 
creates a new book and add it to thebookcase array
2b) Write a fucntion that list all the books in the bookcase
2c) write a function that takes a title and changes the name of the book
3d) write a function that dynamically adds an ID property to all fo the book in the bookcase.
*/

var bookCase = [];
class Book{
	constructor(title, author){
		this.author = author;
		this.title = title;
	}
}
function func(title, author){
	console.log('is function running');
	const book1= new Book(title, author);
	console.log(book1);
	bookCase.push(book1);

}

	








function findElement(arr, func) {

 for(var i=0; i<arr.length; i++){
   var num = arr[i];
   console.log('This is num:',num);
   console.log('this is func at num', func(num));
    if(func(num) == true){
    	console.log('this is func at num', func);
    return num;
 	}
 }
 return;
 
}