"use strict";

let party = "";

const userName = prompt("What is your name?").toLowerCase();
//console.log(`The users name is ${userName}.`);

const userLocation = prompt("Where do you live?").toLowerCase();
//console.log(`The users name is ${userLocation}.`);

const userAge = prompt(`How old are you ${userName}?`).toLowerCase();
//console.log(`${userAge}.`);

let userParty = prompt("Do you like to party? yes or no?").toLowerCase();
//console.log(`${userParty}`);

if (userParty === "yes" || userParty === "y") {
  party = `Rightous, Party on! `;
} else {
  party = `No worries, there are plenty of other things to do beside party.`;
}

alert(
  `Well hello ${userName}, ${userAge} that's a good age, and ${userLocation} is a nice place to live. ${party} `
);

var poptart = 24