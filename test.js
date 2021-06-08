'use strict';
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
// clicking on check result
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //conditions when there is no input
  if (!guess) {
    displayMessage('😂No Number');
  }
  //conditions when player predict correct value
  else if (guess === secretNumber) {
    displayMessage('👍YOU have won the game');
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  ////conditions when the guess is high
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('❌You lost the Game');
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//click on again function
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage((textContent = 'Start guessing.......'));
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'blue';
  // document.querySelector('.highscore').textContent = 0;
});
