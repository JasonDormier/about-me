'use strict';

let answer = '';

let userName = '', q1 = '', q2 = '', q3 = '', q4 = '';

const responseYes = function (input) {
  if (input === 'yes' || input === 'y') {
    answer = 'correct! Nice work!';
  } else {
    answer = 'Incorrect, nice try';
  }
  alert(answer);
};

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

alert(`Well ${userName}, thanks for playing. See ya!`);





//alert(`Well hello ${userName}, ${userAge} that's a good age, and ${userLocation} is a nice place to live. ${party}`);
