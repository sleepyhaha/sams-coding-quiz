let buttons = document.querySelector(".buttons");
let timerCount = document.querySelector(".time-count");
let mainHeading = document.querySelector(".main-heading");
let subHeading = document.querySelector(".sub-heading");
let answerSection = document.querySelector(".answer-section");

let secondsLeft = 90;
let score = 0;
let questionIndex = 0;

function startGame() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timerCount.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
  question1();
}

function gameOver() {
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

buttons.addEventListener("click", function () {
  subHeading.innerHTML = "";
  buttons.remove();
  startGame();
});

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

  // answerSection.append(answer1, answer2, answer3, answer4);
}

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
  if (questionIndex === questions.length - 1) {
    secondsLeft = 0;
  }

  question1();
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
