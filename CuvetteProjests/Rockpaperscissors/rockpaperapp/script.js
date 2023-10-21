const closeBtn = document.getElementById('close');
const rulesContainer = document.querySelector('.game_rules');
const rulesBtn = document.getElementById('rulesBtn');
const nextBtn = document.getElementById('nextBtn');
const choices = document.querySelectorAll('.choice');
const winContainer = document.querySelector('.win-container');
const scoreContainer = document.querySelector('.score-container');
const diagram = document.querySelector('.diagram');
const cupContainer = document.querySelector('.cup-container');
const userPicked = document.querySelector('.left');
const pcPicked = document.querySelector('.right');
const playAgainBtn = document.getElementById('play-again');
const rePlayBtn = document.getElementById('rePlay');
const message = document.getElementById('message');
const pcScore = document.getElementById('computer-score');
const myScore = document.getElementById('my-score');
closeBtn.addEventListener('click', () => {
    rulesContainer.style.display = 'none';
});

rulesBtn.addEventListener('click', function () {
    rulesContainer.style.display = 'flex';
});

nextBtn.addEventListener('click', function () {
    rulesBtn.style.right = '2%';
    scoreContainer.style.display = 'none';
    diagram.style.display = 'none';
    winContainer.style.display = 'none';
    cupContainer.style.display = 'flex';
    nextBtn.style.display = 'none';
});

let computerScore = 0;
let userScore = 0;
let winner = '';

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'tie';
    } else if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        return 'user';
    } else {
        return 'computer';
    }
}

function displayResult(player, computer, resultMessage) {
    userPicked.innerHTML = `
        <span>You Picked</span>
        <div class="${player} " >
            <img src="${player}.png" alt="${player}">
        </div>
    `;

    pcPicked.innerHTML = `
        <span>Pc Picked</span>
        <div class="${computer} ">
            <img src="${computer}.png" alt="${computer}">
        </div>
    `;
    message.textContent = resultMessage;
}

function onClick(event) {
    const userChoice = event.currentTarget.id;
    const computerChoice = getComputerChoice();
    winner = getWinner(userChoice, computerChoice);

    const div = document.getElementsByTagName("div");
    if (winner === 'user') {
        userScore+= 15;
        rulesBtn.style.right = '8%';
        nextBtn.style.display = 'block';
        myScore.textContent = userScore;
        diagram.style.display = 'none';
        cupContainer.style.display = 'none';
        winContainer.style.display = 'flex';
        displayResult(userChoice, computerChoice, 'You Win');
        div[11].classList.add('win');
    } else if (winner === 'computer') {
        computerScore+= 15;
        pcScore.textContent = computerScore;
        diagram.style.display = 'none';
        cupContainer.style.display = 'none';
        winContainer.style.display = 'flex';
        displayResult(userChoice, computerChoice, 'You Lost');
        div[14].classList.add('win');
    } else if (winner === 'tie') {
        diagram.style.display = 'none';
        winContainer.style.display = 'flex';
        cupContainer.style.display = 'none';
        displayResult(userChoice, computerChoice, 'Tie Up');
    }
    localStorage.setItem('computerScore', computerScore.toString());
    localStorage.setItem('userScore', userScore.toString());
}
document.addEventListener('DOMContentLoaded', function () {
    const storedComputerScore = localStorage.getItem('computerScore');
    const storedUserScore = localStorage.getItem('userScore');

    if (storedComputerScore) {
        computerScore = parseInt(storedComputerScore);
        pcScore.textContent = computerScore;
    }

    if (storedUserScore) {
        userScore = parseInt(storedUserScore);
        myScore.textContent = userScore;
    }
});



choices.forEach(choice => {
    choice.addEventListener('click', onClick);
});

playAgainBtn.addEventListener('click', function () {
    rulesBtn.style.right = '2%';
    nextBtn.style.display = 'none';
    winContainer.style.display = 'none';
    cupContainer.style.display = 'none';
    diagram.style.display = 'flex';
});
rePlayBtn.addEventListener('click', function () {
    rulesBtn.style.right = '2%';
    nextBtn.style.display = 'none';
    scoreContainer.style.display = 'flex';
    winContainer.style.display = 'none';
    cupContainer.style.display = 'none'
    diagram.style.display = 'flex';
});