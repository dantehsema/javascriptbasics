let game = (player1,player2) => {
	let winner = "";

	switch (player1,player2){
		case 'rock':
		case 'scissors':
			winner = 'rock';
			break;
		case 'paper':
		case 'scissors':
			winner = 'scissors';
			break;
		case 'rock':
		case 'paper':
			winner = 'paper';
			break;
		default:
			winner = 'play the game damn it.';
			break;

	}
	return winner;
}	