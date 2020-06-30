'use strict';

//SELECTORS -- document.querySelector("");
const secretNumber = getRandomNumber(100);
console.log(`El número aleatorio es ${secretNumber}`);

const userInput = document.querySelector('.js-user-number');
let userNumber = 0;

const cluesMsg = document.querySelector('.js-clues-msg');
const attemptsMsg = document.querySelector('.js-attempts-msg');

const button = document.querySelector('.js-submit-button');

let attempts = 0;

/*set default cluesMsg text*/
cluesMsg.innerHTML = 'Escribe un número y dale a Prueba';
cluesMsg.style.color = 'blue';

//FUNCTIONS
/*generate secret random number upon loading page*/
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
/*collect data from user number input*/
function getUserNumber() {
  userNumber = parseInt(userInput.value);
  console.log(`La usuaria ha elegido ${userNumber}`);
  return userNumber;
}
/*compare user input to secret number*/
function compareNumbers() {
  attempts += 1;
  attemptsMsg.innerHTML = attempts;
  console.log('Número de intentos', attempts);
  if (userNumber === secretNumber) {
    /*display success msg*/
    cluesMsg.innerHTML = 'Has ganado campeona!!!';
    cluesMsg.style.color = 'yellowgreen';
  } else if (userNumber > 100) {
    /*display over 100 msg*/
    cluesMsg.innerHTML = 'El número debe estar entre 1 y 100';
    cluesMsg.style.color = 'darkorange';
  } else if (userNumber > secretNumber) {
    /*display too high msg*/
    cluesMsg.innerHTML = 'Demasiado alto...';
    cluesMsg.style.color = 'red';
  } else if (userNumber < secretNumber) {
    /*display too low msg*/
    cluesMsg.innerHTML = 'Demasiado bajo...';
    cluesMsg.style.color = 'red';
  }
}
/* eventHandler function that combines above functions into one*/
function buttonHandler() {
  getUserNumber();
  compareNumbers();
}

/*eventHandler function to prevent sending data upon hitting enter*/
function inputEnterHandler(ev) {
  let keyCode = ev.keyCode;
  if (keyCode === 13) {
    ev.preventDefault();
  }
}
//LISTENERS
button.addEventListener('click', buttonHandler);
userInput.addEventListener('keydown', inputEnterHandler);
