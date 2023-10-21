
let btn = document.querySelectorAll('.btn');
let computerscore = document.getElementById('scr1');
let playerscore = document.getElementById('scr2');
let playagain = document.querySelectorAll("#playAgain")
let playerscoreDisplay = document.getElementById('scr02');
let computerscoreDisplay = document.getElementById('scr01');
let losspagescor1 = document.getElementById('scr1.1');

let choices = ['paper', 'sizer', 'hamer'];
let computerscorevalue = 0
let playerscorevalue = 0

function navigateWithDelay(page , delay){
  setTimeout(() => {

    window.location.href = page
  }, delay);
}


for (let i = 0; i < playagain.length; i++) {
  playagain[i].addEventListener("click", () => {
    window.location.href = ("index.html")

  });
}
btn.forEach(btns => {
  btns.addEventListener('click', () => {
    let player = btns.value;
    let rendom = choices[Math.floor(Math.random() * choices.length)];


    console.log("player value", player)
    console.log("computer value", rendom)


    if ((player == rendom)) {

      navigateWithDelay("page3.html", 80);

      console.log("match draw")
    } else if (
      (player === 'paper' && rendom === 'hamer') ||
      (player === 'sizer' && rendom === 'paper') ||
      (player === 'hamer' && rendom === 'sizer')) {

      console.log("player win")
      playerscorevalue += 15
      playerscore.textContent = playerscorevalue
      // playerscoreDisplay.textContent = playerscorevalue

      navigateWithDelay("page1.html", 80);

      // localStorage.setItem("playerscoreDisplay", playerscore.toString());
      navigateWithDelay("page1.html", 80);
            // let savedScore = localStorage.getItem("playerscore");
            // console.log(savedScore);
            // playerscoreDisplay.textContent = savedScore;
    } else {

      console.log("computer win")
      computerscorevalue += 15
      computerscore.textContent =  computerscorevalue;
      // computerscoreDisplay.textContent = computerscorevalue
      // navigateWithDelay("page2.html", 80);

      // localStorage.setItem("losspagescor1", computerscorevalue.toString());
      navigateWithDelay("page2.html", 8000);
            // let savedScore = localStorage.getItem("losspagescor1");
            // console.log(savedScore);
            // losspagescor1.textContent = savedScore;
    }
  })
});

function updatePlayerScore(playerscorevalue) {
  let playerScoreDisplay = document.getElementById('scr02');
  playerScoreDisplay.textContent = playerscorevalue;
}
function updateComputerScore(computerscorevalue) {
  let computerScoreDisplay = document.getElementById('scr01');
  computerScoreDisplay.textContent = computerscorevalue;
}

updateComputerScore(computerscorevalue);
updatePlayerScore(playerscorevalue);













