'use strict';

let answer = '';

let userName = '', q1 = '', q2 = '', q3 = '', q4 = '';

let score = 0;

//checked with Ryan and leaving function in from Lab2
const responseYes = function (input) {
  if (input === 'yes' || input === 'y') {
    answer = 'correct! Nice work!';
    score++;
  } else {
    answer = 'Incorrect, nice try';
  }
  alert(answer);
};

//checked with Ryan and leaving function in from Lab2
const responseNo = function (input) {
  if (input === 'no' || input === 'n') {
    answer = 'correct! Nice work!';
    score++;
  } else {
    answer = 'Incorrect, nice try';
  }
  alert(answer);
};

function questionOne(){
  userName = prompt('What is your name?').toLowerCase();
//console.log(`The users name is ${userName}.`);
}

function questionTwo(){
  q1 = prompt(`Hello ${userName}, welcome to my interactive bio. Is my name Jason?`).toLowerCase();
  console.log(q1);
  responseYes(q1);
}

function questionThree(){
  q2 = prompt('Are the Seahawks my favorite football team?').toLowerCase();
  console.log(q2);
  responseYes(q2);
}

function questionFour(){
  q3 = prompt('Is soccer my favorite sport?').toLowerCase();
  console.log(q3);
  responseNo(q3);
}

function questionFive(){
  q4 = prompt('Am I in my 40s?').toLowerCase();
  console.log(q4);
  responseNo(q4);
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();


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
    score++;
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


//number of guesses left
let guessLeft = 6;
//score for arrGame to end game - should be changed out for boolean
let arrGameScore = 0;

//an array that stores multiple answers
const anwserArr = ['pizza', 'steak', 'burritos'];

//loop through the problem while guesses left is > 1
while (guessLeft > 1) {

  //prompt a question like guess what my top 3 favorite foods are?
  let multiGuess = prompt(`Can you guess what my top 3 favorite foods are? You have ${guessLeft} trys.`);
  //subract from guesses
  guessLeft--;
  //console.log(guessLeft);
  for (let i = 0; i < anwserArr.length; i++) {
    //check to see if multguess = one of the answers in the array.
    if (multiGuess === anwserArr[i]) {
      alert(`Awesome ${anwserArr[i]} is one of my favorite foods.`);
      score++;
      arrGameScore++;
    }
  }
  //if they guessed them all end the game.
  if (arrGameScore >= 3) {
    break;
  }
}
if (guessLeft === 0) {
  alert(`Thanks for playing . Your score was ${score}/3. Here are the correct anwers. ${anwserArr}. Thanks for playing.`);
} else {
  alert(`Thanks for playing ! You got them all right! You got a score of ${score}/3.`);
}
