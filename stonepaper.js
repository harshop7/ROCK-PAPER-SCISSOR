let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rndidx = Math.floor(Math.random() * 3);
    return options[rndidx];
};

const drawgame = () => {
    msg.innerText = "GAME DRAW-play again"
    msg.style.backgroundColor = "#081b31";


};

const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compscorepara.innerText = compScore;
        msg.innerText = `You lost! Your ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";


    }
};

const playgame = (userchoice) => {
    const compchoice = gencompchoice();

    if (userchoice == compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice == "rock") {
            userwin = compchoice == "paper" ? false : true;
        } else if (userchoice == paper) {
            userwin = compchoice == "scissor" ? false : true;
        }
        else {
            userwin = compchoice == "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);
    }


};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice clicked", userchoice);
        playgame(userchoice);
    });
});