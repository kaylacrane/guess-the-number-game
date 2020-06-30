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
  attemptsMsg.innerHTML = attempts;
  console.log('Número de intentos', attempts);
  if (userNumber === secretNumber) {
    console.log(userNumber, secretNumber);
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
function buttonEventHandler() {
  getUserNumber();
  compareNumbers();
}

//LISTENERS
button.addEventListener('click', buttonEventHandler);
