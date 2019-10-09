var userInput = 'rock';
userInput = userInput.toLowerCase();
function getComputerChoice(){
  num = Math.floor(Math.random() * 3);
	if ( num === 0){
    return 'rock';
  }else if (num === 1){
    return 'paper';
  }else if (num === 2){
    return 'scissors';
  }
}
function determineWinner(userChoice,computerChoice){
  
    if (userChoice =='bomb'){
    return 'the human won';
    }
    if (userChoice == computerChoice){
        return "the game was a tie";
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'the computer won';
        } else {
            return 'the human won';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'the computer won';
        } else {
            return 'the human won';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'the computer won';
        } else {
            return 'the human won';
        }
    } else {
        return "not an option";
    }
}
function playGame(){
    var userChoice = userInput;
    var computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice,computerChoice));
    console.log('human threw ' + userChoice);
    console.log('computer threw ' + computerChoice);
}



playGame();