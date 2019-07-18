/*
2a)create a variable called bookcase that is an empty array that had a list of book objects.
Create a Book class that has a name property and a title property
write a function that takes a title and an author as parameters and 
creates a new book and add it to thebookcase array
2b) Write a fucntion that list all the books in the bookcase
2c) write a function that takes a title and changes the title of the book 
3d) write a function that dynamically adds an ID property to all fo the book in the bookcase.
*/

//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


var bookCase =[];

class Book{
	constructor(title,author){
		this.title = title;
		this.Author = author;
	}
}

function addBook(title,author){
	const newbook = new Book(title,author);
	bookCase.push(newbook);
	return bookCase;
}

function changeTitle(oldTitle,newTitle){
	for(var i=0; i<bookCase.length; i++){
		if(bookCase[i].title === oldTitle){
			bookCase[i].title = newTitle;
			console.log(bookCase[i]);
		}
	}
	return bookCase;
}