'use strict';

//SELECTORS document.querySelector("");
const secretNumber = getRandomNumber(100);
console.log(`El número aleatorio es ${secretNumber}`);
const cluesMsg = document.querySelector('.js-clues-msg');
const attemptsMsg = document.querySelector('.js-attempts-msg');
const button = document.querySelector('.js-submit-button');
let userInput = document.querySelector('.js-user-number');
let userNumber = 0;
let attempts = 0;

//FUNCTIONS
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function getUserNumber() {
  userNumber = parseInt(userInput.value);
  console.log(`La usuaria ha elegido ${userNumber}`);
  return userNumber;
}
function compareNumbers() {
  attempts += 1;
  console.log(attempts);
  console.log(typeof userNumber, typeof secretNumber);
  if (userNumber === secretNumber) {
    console.log(userNumber, secretNumber);
    cluesMsg.innerHTML = 'Has ganado campeona!!!';
    cluesMsg.style.color = 'green';
  }
}
function buttonEventHandler() {
  getUserNumber();
  compareNumbers();
}

//LISTENERS
button.addEventListener('click', buttonEventHandler);
