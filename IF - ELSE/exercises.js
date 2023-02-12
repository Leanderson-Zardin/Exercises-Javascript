// EXERCÍCIO 1 -----------------------------
/*
let accessAllowed;
let age = prompt('How old are you?', '');
if (age >= 18) {
  alert('Você já é maior de idade!');
  } else {
  alert('Você ainda não é maior de idade!');
}
*/

// EXERCÍCIO 2 -----------------------------
/*
let age = prompt('How old are you?', '');
let message = (age < 3) ? 'Hi, baby!' :
(age < 18) ? 'Hello!' :
(age < 100) ? 'Greetings!' : 
'What an unusual age!';
alert(message);
*/

// EXERCÍCIO 3 -----------------------------
/*
let age = prompt('How old are you?', '')
if (age < 3) {
  alert('Hi Baby!');
} else if (age < 18){
  alert('Hello!');
} else if (age < 100) {
  alert('Greetings!');
} else {
  alert('What an unusual age!');
}
*/

// EXERCÍCIO 4 -----------------------------
/*
let jsName = prompt("What's the official name of javascript?");
if (jsName == "ECMAScript") {
  alert('Right!');
} else {
  alert('Wrong!');
}
*/

// EXERCÍCIO 5 -----------------------------
/*
let number = prompt('Digite um número');
if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}
*/

// EXERCÍCIO 6 -----------------------------
// let result = (a + b < 4) ? 'Below' : 'Over';

// EXERCÍCIO 7 -----------------------------
/*
let hour = prompt('Que horas são?', '');
let isWeekend = true
if (hour < 10 || hour > 18 || isWeekend) {
  alert('The office is closed!');
} else {
  alert('The office is open!');
}
*/

// EXERCÍCIO 8 -----------------------------
/*
let firstName = prompt('Qual seu nome?', '');
let lastName = prompt('Qual seus sobrenome?', '');
let nickName = prompt('Qual seus apelido?', '');
alert(firstName || lastName || nickName || 'Anonymous!');
*/

// EXERCÍCIO 9 -----------------------------
/*
let age = prompt('How old are you?', '');
if (age >= 14 && age <= 90) {
  alert('It is');
} else {
  alert("It isn't");
}
*/

// EXERCÍCIO 10 -----------------------------
/*
let age = prompt("Number:", '');
if (!(age < 14 && age > 90)) {
  alert('Não está!');
} else {
  alert('Está!'); 
}
*/

// EXERCÍCIO 11 -----------------------------