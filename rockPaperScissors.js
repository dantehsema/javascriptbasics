let rockPaperScissorsShoot = (player1,player2) => {
	let winner = '';

	switch (player1 + player2){
		case 'rock' + 'scissors':
		case 'scissors' + 'rock':
			winner = 'rock';
			break;

		case 'rock' + 'rock':
			winner = 'Try again slim';
			break;

		case 'paper' + 'scissors':
		case 'scissors' + 'paper':
			winner = 'scissors';
			break;

		case 'scissors' + 'scissors':
			winner = 'Try again slim';
			break;

		case 'rock' + 'paper':
		case 'paper' + 'rock':
			winner = 'paper';
			break;

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
