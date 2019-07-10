/*

create a function that takes a string as a parameter and return the string without any vowels 


example: input               Output
		 
		 noVowels("rice") |  "rc"

hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
*/ 

function noVowels(stri){
	return stri.replace(/[aeiou]/gi, '')
}



// var noVowels = function(stri){
// 	for(var i=0)
// }