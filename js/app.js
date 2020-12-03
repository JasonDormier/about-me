'use strict';

let answer = '';

let userName = '', q1 = '', q2 = '', q3 = '', q4 = '';

//checked with Ryan and leaving function in from Lab2
const responseYes = function (input) {
  if (input === 'yes' || input === 'y') {
    answer = 'correct! Nice work!';
  } else {
    answer = 'Incorrect, nice try';
  }
  alert(answer);
};

//checked with Ryan and leaving function in from Lab2
const responseNo = function (input) {
  if (input === 'no' || input === 'n') {
    answer = 'correct! Nice work!';
  } else {
    answer = 'Incorrect, nice try';
  }
  alert(answer);
};

userName = prompt('What is your name?').toLowerCase();
//console.log(`The users name is ${userName}.`);

q1 = prompt(`Hello ${userName}, welcome to my interactive bio. Is my name Jason?`).toLowerCase();
console.log(q1);
responseYes(q1);

q2 = prompt('Are the Seahawks my favorite football team?').toLowerCase();
console.log(q2);
responseYes(q2);

q3 = prompt('Is soccer my favorite sport?').toLowerCase();
console.log(q3);
responseNo(q3);

q4 = prompt('Am I in my 40s?').toLowerCase();
console.log(q4);
responseNo(q4);

//add the guessing game
//need a let for number of guesses.

const guessNumber = '5';
let numOfGuesses = 4;
let guess = prompt('Guess a number between 1 and 10.');
console.log(guess);

while (numOfGuesses > 1 || guess !== guessNumber) {
  if (!guess || isNaN(guess)) {
    guess = prompt('You didn\'t even guess, please input a number between 1 and 10');
  }
  else if (guess === guessNumber) {
    alert(`Nice job ${guessNumber} is correct.`);
    break;
  }
  else if (guess > guessNumber) {
    if (numOfGuesses > 1) {
      guess = prompt(`${guess} was to high. Try again.`);
      numOfGuesses--;
    } else {
      alert('OOF, sorry you/re out of guesses.');
    }
  }
  else if (guess < guessNumber) {
    if (numOfGuesses > 1) {
      guess = prompt(`${guess} was to low. Try again.`);
      numOfGuesses--;
    } else {
      alert(`OOF, sorry you're out of guesses. The correct answer was ${guessNumber}`);
      break;
    }
  }
}

//Add a multiple choice question for the user to guess.
//number of guesses left
let guessLeft = 6;
let score = 0;
//an array that stores multiple answers
const anwserArr = ['pizza', 'steak', 'burritos'];
//prompt a question like guess what my top 3 favorite foods are?
let multiGuess = prompt(`Can you guess what my top 3 favorite foods are? You have ${guessLeft} trys.`);

//loop through the problem while guesses left is > 1
while (guessLeft > 1) {
  console.log(guessLeft);

  for (let i = 0; i < anwserArr.length; i++) {
    //check to see if multguess = one of the answers in the array.
    if (multiGuess === anwserArr[i]) {
      alert(`Awesome ${anwserArr[i]} is one of my favorite foods.`);
      score = score + 1;
    }
  }
  guessLeft--;
  multiGuess = prompt(`Try again? You have ${guessLeft} trys. You have ${score} correct.`);
  if (score === 3) {
    break;
  }
}
if (guessLeft === 1) {
  alert(`Thanks for playing ${userName}. Your score was ${score}/3. Here are the correct anwers. ${anwserArr}. Thanks for playing.`);
} else {
  alert(`Thanks for playing ${userName}! You got them all right! You got a score of ${score}/3.`);
}
