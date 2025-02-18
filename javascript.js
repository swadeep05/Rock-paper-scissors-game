let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");


const genCompChoice = () => {
    //to gerate random choices we will store it in an array
    const options = ["rock", "paper", "scissors"];
    //rock , paper, scisoor
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
//function for draw game
const drawGame = () => {

    msg.innerText = "It's a Draw"
    msg.style.backgroundColor = "#081b31";
};
// function to show winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {

        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        user.innerText = userScore;

    } else {

        msg.innerText = `You Lose ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        comp.innerText = compScore;
    }
}
const playGame = (userChoice) => {

    // genrate computer choice
    const compChoice = genCompChoice();


    // draw game
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // comp choice can be paper or scissor, if rock was there then game already have been draw
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //comp choice = rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //here user choice can be scissors
            // comp choices = rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }


};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});
