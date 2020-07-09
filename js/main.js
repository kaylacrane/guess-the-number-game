'use strict';

//SELECTORS
let secretNumber = getRandomNumber(100);
const userInput = document.querySelector('.js-user-number');
const cluesMsgBox = document.querySelector('.js-clues-msg');
const attemptsMsg = document.querySelector('.js-attempts-msg');
const submitButton = document.querySelector('.js-submit-button');
const newGameButton = document.querySelector('.js-newGame-button');

let userNumber;
let attempts = 0;

console.log(`El número aleatorio es ${secretNumber}`);

//FUNCTIONS
/*generates secret random number upon loading page*/
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
/*collects data from user number input*/
function getUserNumber() {
  userNumber = parseInt(userInput.value);
  console.log(`La usuaria ha elegido ${userNumber}`);
}
/*increases attempts number*/
function updateAttempts() {
  attempts += 1;
  attemptsMsg.innerHTML = attempts;
  console.log('Número de intentos', attempts);
}
/*changes clue text and colors*/
function changeClues(msg, color) {
  cluesMsgBox.innerHTML = msg;
  cluesMsgBox.style.color = color;
}
/*sets default cluesMsg text*/
changeClues('Type a number and hit submit', 'blue');
/*compares numbers and makes changes to clues*/
function compareNumbers() {
  if (userNumber < 1 || userNumber > 100) {
    /*displays under 1 or over 100 msg*/
    changeClues('Guess a number from 1 to 100', 'rgb(156, 2, 136)');
  } else if (userNumber === secretNumber) {
    /*displays success msg*/
    changeClues(
      `💐 💐 ${userNumber} is the secret number! 💐 💐`,
      'rgb(230, 14, 99)'
    );
    /*deactivates button*/
    submitButton.disabled = true;
    submitButton.style.opacity = '0.5';
  } else if (userNumber > secretNumber) {
    /*displays too high msg*/
    changeClues(`${userNumber} is too high...`, 'rgb(230, 14, 99)');
  } else if (userNumber < secretNumber) {
    /*display too low msg*/
    changeClues(`${userNumber} is too low...`, 'rgb(230, 14, 99)');
  }
}
/*Clears number input when button is clicked*/
function clearNumber() {
  if (userInput.value) {
    userInput.value = '';
  }
}
// EVENT HANDLERS
/* Combines above functions into one*/
function submitButtonHandler() {
  getUserNumber();
  updateAttempts();
  compareNumbers();
  clearNumber();
}
/*Prevents sending data upon hitting enter*/
function inputEnterHandler(ev) {
  let keyCode = ev.keyCode;
  if (keyCode === 13) {
    ev.preventDefault();
  }
  /*to activate button*/
  submitButton.disabled = false;
  submitButton.style.opacity = '1';
}
/*starts a new game*/
function startNewGame() {
  secretNumber = getRandomNumber(100);
  console.log(`El número aleatorio es ${secretNumber}`);
  attempts = 0;
  changeClues('Type a number and hit submit', 'blue');
  submitButton.disabled = true;
  submitButton.style.opacity = '0.5';
}

// LISTENERS
submitButton.addEventListener('click', submitButtonHandler);
userInput.addEventListener('keydown', inputEnterHandler);
userInput.addEventListener('click', clearNumber);
newGameButton.addEventListener('click', startNewGame);
