let buttons = document.querySelector(".buttons");
let timerCount = document.querySelector(".time-count");
let mainHeading = document.querySelector(".main-heading");
let subHeading = document.querySelector(".sub-heading");

function timer() {
  let secondsLeft = 90;
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timerCount.textContent = secondsLeft;
  }, 1000);
}

buttons.addEventListener("click", function (event) {
  mainHeading.innerHTML = "";
  subHeading.innerHTML = "";
  timer();
});
