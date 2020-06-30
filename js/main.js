'use strict';

//SELECTORS document.querySelector("");
const secretNumber = getRandomNumber(100);
console.log(`El número aleatorio es ${secretNumber}`);
const button = document.querySelector('.js-submit-button');
let userInput = document.querySelector('.js-user-number');
let userNumber = 0;
let attempts = 0;

//FUNCTIONS
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function getUserNumber() {
  userNumber = userInput.value;
  console.log(`La usuaria ha elegido ${userNumber}`);
}
function compareNumbers() {}
function buttonEventHandler() {
  getUserNumber();
  compareNumbers();
}

//LISTENERS
button.addEventListener('click', getUserNumber);
