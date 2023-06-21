let buttons = document.querySelector(".buttons");
let timerCount = document.querySelector(".time-count");
let mainHeading = document.querySelector(".main-heading");
let subHeading = document.querySelector(".sub-heading");
let answerSection = document.querySelector(".answer-section");
let secondsLeft = 20;
let score = 0;

function startGame() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timerCount.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      mainHeading.textContent = "Game Over";
      answerSection.remove();

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
  question1();
}

buttons.addEventListener("click", function () {
  subHeading.innerHTML = "";
  buttons.remove();
  startGame();
});

function question1() {
  mainHeading.textContent = "Question 1";

  let answer1 = document.createElement("button");
  answer1.setAttribute("data-value", "wrong");

  let answer2 = document.createElement("button");
  answer2.setAttribute("data-value", "right");

  let answer3 = document.createElement("button");
  answer3.setAttribute("data-value", "wrong");

  let answer4 = document.createElement("button");
  answer4.setAttribute("data-value", "wrong");

  answer1.textContent = "Wrong";
  answer2.textContent = "Right";
  answer3.textContent = "Wrong";
  answer4.textContent = "Wrong";

  answerSection.append(answer1, answer2, answer3, answer4);
}

answerSection.addEventListener("click", function (event) {
  let element = event.target;
  let answerData = element.getAttribute("data-value");

  if (element.matches("button") && answerData === "right") {
    score += 10;
  }
  if (element.matches("button") && answerData === "wrong") {
    secondsLeft -= 10;
  }
});
