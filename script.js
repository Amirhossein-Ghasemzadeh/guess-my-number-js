'use strict'

//selectors
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const number = document.querySelector('.number');


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20
let highScore = 0;

// check Button
checkBtn.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // when there is no input
    if (!guess) {
        message.textContent = '⛔ No number!';

        // when players win
    } else if (guess === secretNumber) {
        message.textContent = '🎉 correct Number!';
        number.textContent = secretNumber
        number.style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347'

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            message.textContent = guess > secretNumber ? '📈 Too high!' : '📈 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            message.textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

// again Button
againBtn.addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    message.textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    number.textContent = '?';
    document.querySelector('.guess').value = '';
    number.style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
});