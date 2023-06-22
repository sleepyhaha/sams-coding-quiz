let buttons = document.querySelector(".buttons");
let timerCount = document.querySelector(".time-count");
let mainHeading = document.querySelector(".main-heading");
let subHeading = document.querySelector(".sub-heading");
let answerSection = document.querySelector(".answer-section");
let timerInterval;
let secondsLeft = 90;
let score = 0;
let questionIndex = 0;
let nameHighScore = [];
let valueHighScore = [];

// function starts timer and initiates first question

function startGame() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerCount.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
  question1();
}

// runs the game over screen once conditions are met, and allows players to enter in initials and submit high score

function gameOver() {
  answerSection.remove();
  mainHeading.textContent = "Game Over";
  subHeading.innerHTML =
    "Your Score is: " + score + "<br/>" + "Enter your initials";
  let submitScore = document.createElement("form");

  let initials = document.createElement("input");
  initials.setAttribute("type", "text");

  let submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");

  submitScore.appendChild(initials).appendChild(submitButton);
  subHeading.appendChild(submitScore);

  submitScore.addEventListener("submit", function (event) {
    event.preventDefault();
    nameHighScore.push(initials.value);
    valueHighScore.push(score);
    localStorage.setItem("nameHighScore", JSON.stringify(nameHighScore));
    localStorage.setItem("valueHighScore", JSON.stringify(valueHighScore));
    window.location.href = "./leaderboard.html";
    highScores();
  });
}

// this is meant to render high scores from local storage to

function highScores() {
  let getHighScoreName = JSON.parse(localStorage.getItem(nameHighScore));
  let getHighScoreValue = JSON.parse(localStorage.getItem(valueHighScore));
  let newHighScore = document.createElement("li");
  document.querySelector("#high-scores").append(newHighScore);
  getHighScoreName;
}
6;
// click event listener for start game button

buttons.addEventListener("click", function () {
  subHeading.innerHTML = "";
  buttons.remove();
  startGame();
});

// code obtained and refactored from https://stackoverflow.com/questions/72588081/working-on-a-javascript-quiz-app-and-having-an-issue-dynamically-generating-ques

// sets the question and answers to values from array and changes answer buttons from display:none state to visible

function question1() {
  mainHeading.textContent = questions[questionIndex].question;

  let answer1 = document.querySelector(".answer1");
  answer1.style.display = "inline-block";
  answer1.setAttribute("data-value", questions[questionIndex].choices[0]);

  let answer2 = document.querySelector(".answer2");
  answer2.style.display = "inline-block";
  answer2.setAttribute("data-value", questions[questionIndex].choices[1]);

  let answer3 = document.querySelector(".answer3");
  answer3.style.display = "inline-block";
  answer3.setAttribute("data-value", questions[questionIndex].choices[2]);

  let answer4 = document.querySelector(".answer4");
  answer4.style.display = "inline-block";
  answer4.setAttribute("data-value", questions[questionIndex].choices[3]);

  answer1.innerHTML = questions[questionIndex].choices[0];
  answer2.innerHTML = questions[questionIndex].choices[1];
  answer3.innerHTML = questions[questionIndex].choices[2];
  answer4.innerHTML = questions[questionIndex].choices[3];
}

// iterates questions and answers from an array defined below. clicking correct answer adds 10 to score and shows question and answers from next index in array. subtracts 10 seconds if answer is incorrect. sets timer to 0, triggering game over if end of array is reached

answerSection.addEventListener("click", function (event) {
  let element = event.target;
  let answerData = element.getAttribute("data-value");

  if (
    element.matches("button") &&
    answerData === questions[questionIndex].answer
  ) {
    score += 10;
    questionIndex++;
  }
  if (
    element.matches("button") &&
    answerData !== questions[questionIndex].answer
  ) {
    secondsLeft -= 10;
  }
  if (questionIndex === questions.length) {
    secondsLeft = 0;
  } else {
    question1();
  }
});

const questions = [
  {
    question: "Question 1",
    choices: ["wrong", "right", "wrong", "wrong"],
    answer: "right",
  },
  {
    question: "Question 2",
    choices: ["right", "wrong", "wrong", "wrong"],
    answer: "right",
  },
  {
    question: "Question 3",
    choices: ["wrong", "wrong", "right", "wrong"],
    answer: "right",
  },
  {
    question: "Question 4",
    choices: ["wrong", "wrong", "wrong", "right"],
    answer: "right",
  },
];
