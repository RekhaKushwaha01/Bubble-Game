var timer = 34;
var score = 0;
var hitrn = 0;
var showScore;
function decscore() {
  score -= 10;
  document.querySelector("#score").textContent = score;
}
function incscore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function getHit() {
  hitrn = Math.floor(Math.random() * 20);
  document.querySelector("#hit").textContent = hitrn;
}

function makeBubble() {
  var clutter = " ";
  for (var i = 0; i <= 263; i++) {
    var rn = Math.floor(Math.random() * 20);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#panelbottom").innerHTML = clutter;
}
function runTimer() {
  var timerint = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(
        "#panelbottom"
      ).innerHTML = `<h1 class="panelbottom" id="game">Game Over <br>Your Score is ${score}</h1> `;
    }
  }, 1000);
}
document
  .querySelector("#panelbottom")
  .addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
      incscore();
      makeBubble();
      getHit();
    } else {
      decscore();
    }
  });

decscore();
incscore();
getHit();
runTimer();
makeBubble();
function loaderAnimation() {
  var loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}
loaderAnimation();