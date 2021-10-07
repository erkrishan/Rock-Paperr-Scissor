// console.log("hello")

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userscore");
const compScore_span = document.getElementById("compscore");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const rock_div = document.getElementById("r");

function getCompChoice() {
    const choices = ['p', 'r', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function convertToWord(letter) {
    if (letter == "r") return "ROCK";
    if (letter == "p") return "PAPER";
    return "SCISSORS";
}

function win(userChoice, compChoice) {
    userScore++;
    
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " beats " + convertToWord(compChoice) + smallCompWord + " ! YOU WIN";
    userChoice_div.classList.add('green-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('green-glow');
    }, 1000);
    const result_div = document.querySelector(".result>p");
    result_div.classList.add('green-glow')
    setTimeout(() => {
        result_div.classList.remove('green-glow');
    }, 1000);
}

function lose(userChoice, compChoice) {
    const smallCompWord = "comp".fontsize(3).sub();
    const smallUserWord = "user".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    const result_div = document.querySelector(".result>p");
    compScore++;
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " LOST " + convertToWord(compChoice) + smallCompWord + " ! YOU LOST. ";
    userChoice_div.classList.add('red-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('red-glow');
    }, 1000);
    result_div.classList.add('red-glow')
    setTimeout(() => {
        result_div.classList.remove('red-glow');
    }, 1000);
}

function draw(userChoice, compChoice) {
    const smallCompWord = "comp".fontsize(3).sub();
    const smallUserWord = "user".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " EQUAL " + convertToWord(compChoice) + smallCompWord + " It's a DRAW";
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('grey-glow');
    }, 1000);
    const result_div = document.querySelector(".result>p");
    result_div.classList.add('grey-glow');
    setTimeout(() => {
        result_div.classList.remove('grey-glow');
    }, 1000);
}


function game(userChoice) {
    const compChoice = getCompChoice();

    switch (userChoice+compChoice) {
        case 'rs':
        case 'pr':
        case "sp":
            
            win(userChoice, compChoice);
            break;
        case 'rp':
        case 'sr':
        case 'ps':
            
            
            lose(userChoice, compChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            

            draw(userChoice, compChoice)
            break;
    }
}


function main() {
    paper_div.addEventListener('click', function () {
        game("p");
    });
    scissor_div.addEventListener('click', function () {
        game("s");

    });
    rock_div.addEventListener('click', function () {
        game("r");
    });
}

main();
