
    const body = document.querySelector("body")
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerPlay = button.id;
            roundGame();
        })
    })

    const play = ["rock", "paper", "scissors"];
    let playerCount = 0;
    let computerCount = 0;
    function game() {
        for(let i = 0; i < 5; i++) {
            roundGame()
        }
        if (playerCount < computerCount) {
            alert("computer wins the game!");
        } else if (playerCount > computerCount){
            alert("player wins the game!");
        } else {
            alert("the match is tie!");   
        }
        
    }
    
    function roundGame(){
        let result;
        const computerPlayRandom = Math.floor(Math.random()*play.length);
        const computerPlay = play[computerPlayRandom];
        if (computerPlay === playerPlay) {
        result = "is tie!";
        }
        else if ((computerPlay == "rock" && playerPlay == "paper") ||
                (computerPlay == "paper" && playerPlay == "scissors") ||
                (computerPlay == "scissors" && playerPlay == "rock")) {
            result = "player wins!";
            playerCount++;
        }
        else {
            result = "computer wins!";
            computerCount++;
        }
    const divComputerPlay = document.createElement("div");
    divComputerPlay.textContent=`The computer played ${computerPlay}`;
    body.appendChild(divComputerPlay);

    const divResult = document.createElement("div");
    divResult.textContent= result;
    body.appendChild(divResult);
    
    }
    
    
