'use strict';
// VARIABLES:
const inputNumber = document.querySelector('.js-input');
const trackTest = document.querySelector('.js-track');
const counter = document.querySelector('.js-counter');
const btn = document.querySelector('.js-btn');
const maxNumber = 100;
let count = 0;


// FUNCIONES
// Generar número random
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(maxNumber);

// Escribir en la consola número random
console.log('El numero aleatorio es ' + randomNumber);
console.log(randomNumber);

// Tomar el número del input
function BringInputValue() {

  const number = inputNumber.value;
  console.log(number);
  
  if( number == randomNumber ) {
    trackTest.innerHTML = ("Has ganado campeona!!!");
  }

  else if( number > 101) {
    trackTest.innerHTML = ("El número debe estar entre 0 y 100");
  }

  else if( number > randomNumber ) {
    trackTest.innerHTML = ("Demasiado alto");
  }
  else if( number < randomNumber) {
    trackTest.innerHTML = ("Demasiado bajo");
  }
  
  return number;
}

// Contar número
function CounterNumber(){
  console.count();
  count= count+1;
  counter.innerHTML = ("Número de intentos: "+ count);
  return count;
}

//EVENTO
function handleClickBtn( event ){
  event.preventDefault();
  BringInputValue();
  CounterNumber();
}

btn.addEventListener("click", handleClickBtn);



