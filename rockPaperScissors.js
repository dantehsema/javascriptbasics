let rockPaperScissorsShoot = (player1,player2) => {
	let winner = '';

	switch (player1 + player2){
		case 'rock' + 'scissors':
		case 'scissors' + 'rock':
			winner = 'rock';
			break;

		case 'paper' + 'scissors':
		case 'scissors' + 'paper':
			winner = 'scissors';
			break;

		case 'rock' + 'paper':
		case 'paper' + 'rock':
			winner = 'paper';
			break;

		case 'scissors' + 'scissors':
		case 'rock' + 'rock':
		case 'paper' + 'paper':
			winner = 'Try again slim';
			break;

		default:
			winner = 'play the game damn it.';
			break;

	}
	return winner;
}	




let rockPaperScissors = (player1, player2) => {
	let win;

	switch(player1){

	case 'rock':
		switch(player2){
			case 'scissors':
				win = 'rock';
				break;
			case 'paper':
				win = 'paper';
				break;
			case 'rock':
				win = 'Try again slim';
				break;
			default:
				win = "play the game damn it.";
				break;
	
		}
		break;
		
	case 'scissors':
		switch(player2){
			case 'paper':
				win = 'scissors';
				break;
			case 'rock':
				win = 'rock';
				break;
			case 'scissors':
				win = 'Try again slim';
				break;
			default:
				win = "play the game damn it.";
				break;
	
		}
		break;

	case 'paper':
		switch(player2){
			case 'rock':
				win = 'paper';
				break;
			case 'scissors':
				win = 'scissors';
				break;
			case 'paper':
				win = 'Try again slim';
				break;
			default:
				win = "play the game damn it.";
				break;
	
		}
		break;

		default:
			win = "play the game damn it.";
			break;
	}
	
	return win;
}





/*
var player1 ={
	Plays: rock,
	name: carine
}

var player2 ={
	plays:scissors,
	name: danteh
}
*/

let rockPaperScissorsShoot2 = (a,b) => {
	let winner = '';

	switch (a.plays + b.plays){
		case 'rock' + 'scissors':
			winner = a.name;
			break;

		case 'scissors' + 'rock':
			winner = b.name;
			break;

		case 'rock' + 'paper':
			winner = b.name;
			break;

		case 'paper' + 'rock':
			winner = a.name;
			break;

		case 'scissors' + 'paper':
			winner = a.name;
			break;

		case 'paper' + 'scissors':
			winner = b.name;
			break;

		case 'scissors' + 'scissors':
		case 'rock' + 'rock':
		case 'paper' + 'paper':
			winner = 'Try again slim';
			break;

		default:
			winner = 'Play the game man.'
			break;

	}
	return winner;
}




let rockPaperScissorsShoot3 = (a,b) => {
	let winner = '';

	switch (a.plays + b.plays){
		case 'rock' + 'scissors':
		case 'scissors' + 'rock':
			winner = 'rock';
			break;

		case 'paper' + 'scissors':
		case 'scissors' + 'paper':
			winner = 'scissors';
			break;

		case 'rock' + 'paper':
		case 'paper' + 'rock':
			winner = 'paper';
			break;

		case 'scissors' + 'scissors':
		case 'rock' + 'rock':
		case 'paper' + 'paper':
			winner = 'Try again slim';
			break;

		default:
			winner = 'play the game damn it.';
			break;

	}

	if(a.plays === winner) {
		console.log("The winner is a.name", a.name);
		return a.name;
	}else if(b.plays === winner){
		console.log("The winner is b.name", b.name);
		return b.name;
	}

	return winner;
}	


/*
the game can stay the same as the first function i had
*/

/*
Write a function that returns all possible throws a player can make 
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


/*

rock rock rock
rock rock paper
rock rock scissors
rock paper paper
rock paper scissors
rock paper rock
rock scissors scissors
rock scissors paper
rock scissors rock


paper paper paper
paper paper rock
paper paper scissors
paper rock rock
paper rock scissors
paper rock paper
paper scissors scissors
paper scissors rock
paper scissors paper

scissors scissors scissors
scissors scissors rock
scissors scissors paper
scissors rock rock
scissors rock paper
scissors rock scissors
scissors paper paper
scissors paper rock
scissors paper scissors


1)in the general sense we have rock paper scissors
2)each rock, paper and scissors have 9 ways to display or throw
3)each first throw has 3 different second throw and not exclusive to repeats
4)each second throw has 3 different endings that is why we have 9 throws (nto exclusive to repeats)




*/