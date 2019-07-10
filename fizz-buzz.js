/*

Create a function that takes a number as a parameter and returns fizz if the number is divisible by 3 
and buzz if the number is divisible by 5. If it is divisible by 3 and 5 it should return fizzbuzz. 
Your function should output as follows 

Input 	           Output 
fizzBuzz(45)      // "fizz"
fizzBuzz(20)      // "buzz"
fizzBuzz(15)      //"fizzbuzz"


Extra Credit 
your function should return "flat soda" if the input is not a number. Your function should return "please enter a number" 
if the input is not a number.

Input               Output
fizzBuzz(7)         //"flat soda"
fizzBuzz("hello")   // "please enter a number"

Please write your code below
*/ 

// create a function
// that says fizz when it sees 45

// f(x)=x*2

function double(x){
	document.write(2 * x);
} 
double(20);





function fizzBuzz (num){
	if ((num%3 === 0) && (num%5 !== 0) && (typeof num === 'number')) {
		console.log ('fizz')
	}else if ((num%5 === 0) && (num%3 !==0) && (typeof num === 'number')) {
		console.log ('buzz')
	}else if ((num%3 === 0) && (num%5 === 0) && (typeof num === 'number')) {
		console.log ('fizzbuzz')
	}else if ((num%3 !== 0) && (num%5 !== 0) && (typeof num === 'number')) {
		console.log ('flat soda')
	}else if (typeof num === 'string'){
		console.log ('please enter a number');
	}else {
		console.log ('Are you stupid or something, ENTER A NUMBER DUMMY');
	}
}