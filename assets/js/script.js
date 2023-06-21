let buttons = document.querySelector(".buttons");
let timerCount = document.querySelector(".time-count");
let mainHeading = document.querySelector(".main-heading");
let subHeading = document.querySelector(".sub-heading");
let answerSection = document.querySelector(".answer-section");
let secondsLeft = 5;
let score = 0;

function startGame() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timerCount.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      mainHeading.textContent = "Game Over";

      subHeading.innerHTML = "Enter your initials";
      let submitScore = document.createElement("form");

      let initials = document.createElement("input");
      initials.setAttribute("type", "text");

      let submitButton = document.createElement("input");
      submitButton.setAttribute("type", "submit");

      submitScore.appendChild(initials).appendChild(submitButton);
      subHeading.appendChild(submitScore);

      submitScore.addEventListener("submit", function (event) {
        event.preventDefault();
        window.location.href = "./assets/html/leaderboard.html";
      });
    }
  }, 1000);
}

buttons.addEventListener("click", function () {
  mainHeading.textContent = "Question text";
  subHeading.innerHTML = "";
  buttons.remove();
  startGame();

  // let newAnswer = document.createElement("li");
  // let newAnswer1 = document.body.appendChild(newAnswer);
  // newAnswer1.textContent = "Answer1";

  let answerArray = ["answer1", "answer2", "answer3", "answer4"];
  for (let i = 0; i < answerArray.length; i++) {
    const answer = answer[i];

    let newAnswer = document.createElement("button");
    newAnswer.textContent = answer[i];

    document.body.appendChild(newAnswer);
  }
});

// let gameOver = function () {
//   if (secondsLeft === 0) {
//     mainHeading.textContent = "Game Over";
//     subHeading.innerHTML = " ";
//     subHeading.createElement("form");
//   }
// };
