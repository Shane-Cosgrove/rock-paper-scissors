function playGame(playerChoice) {
	const choices = ['rock', 'paper', 'scissors'];
	const computerChoice = choices[Math.floor(Math.random() * 3)];
	
	
	let resultMessage = "You chose <strong>" + playerChoice + "</strong>. Computer chose <strong>" + computerChoice + "</strong>.<br>";
	
	if (playerChoice === computerChoice) {
		resultMessage += "<span class='text-secondary'>It's a draw!</span>";
		
	} else if (playerChoice === 'rock') {
		if (computerChoice === 'scissors') {
			resultMessage += "<span class='text-success'>You win this one! Rock smashes Scissors!</span>";
		}else {
			resultMessage += "<span class='text-danger'>Unlucky, you lost this one! Paper covers Rock.</span>";
		}
	} else if (playerChoice === 'paper') {
		if (computerChoice ==='rock') {
			resultMessage += "<span class='text-success'>You win! Paper covers Rock.</span>";
		} else {
			resultMessage += "<span class='text-danger'>Unlucky, you lost this one! Scissors slices Paper.</span>";
		}
	} else if (playerChoice === 'scissors') {
		if (computerChoice === 'paper') {
			resultMessage += "<span class='text-success'>You win this one! Scissors slices Paper</span>";
		} else {
			resultMessage += "<span class='text-danger'>Unlucky, you lost this one! Rock smashes Scissors.</span>";
		}
	}
	
	document.getElementById('result').innerHTML = resultMessage;
}