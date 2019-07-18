//balance parameter
var a=[];
var check = {
	'(': ')',
	'{': '}',
	'[': ']'
};

//(){][]
var match = function(stri){
	for(var i=0; i<stri.length; i++){
		if(stri[i] === '(' || stri[i] === '{' || stri[i] === '['){
			a.push(stri[i]);
		}else{
			let last = a.pop();
			if(check[last] !== stri[i]){ //what is i if you are outside of your for loop ?
				return false;
			}
		}

	}
	return true;
}



//interview prociess
// step 1
	//--Tell my story. And technical problem from recruiter and how did i solve it
			//-i have worked with angular
			//-micro services and API
			//-html java, script and css

// step 2 actual phone interview with team
	//--Tell your story. know your shyte. Then you need to code


//built in function.
//Array.push()
//Array.pop()
//Array.join
//Object.keys
//Object.indexof
//string.split 
//splice
//isArray
// different between let operate within that block, var, const
//block scope
//this and that

//concepts
//link list
//Tree
//Angular
//Asyncronous and synchronous
//different between promises and observables
//know how to resolve a promise(how its data looks like)
//Thing you do to make your web page run faster
//what is scope
// difference between local, storage session storage and cookie storage





//Questions: 
//converting telephone pad to possible combos from leters on numbers
//Anogram
//https://leetcode.com/problemset/all/
//you can do all the easy and medium problems here

