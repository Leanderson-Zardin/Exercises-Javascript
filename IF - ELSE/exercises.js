// let person = {name: "João", age: 18, book: "Harry Potter", country: "Brasil"};
// let x = "Um rapaz chamado " + person.name + " com " + person.age + " anos foi deportado para o " + person.country + " por gostar muito de " + person.book;
// let y = `Um rapaz chamado ${person.name} com ${person.age} anos foi deportado para o ${person.country} por gostar muito de ${person.book}.`


// var myAge = prompt("how old are you?", "");
// alert(`You are ${myAge} years old.`);

// let isBoss = confirm("Are you the Boss?");
// alert(isBoss)

// let str = 5 === 6;
// alert(Boolean(str));

// let x = 10;
// let y = 5;
// alert(String(x) + String(y));

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// alert(+a + +b);


// let accessAllowed;
// let age = prompt('How old are you?', '');
// if (age >= 18) {
//   alert('Você já é maior de idade!');
// } else {
//   alert('Você ainda não é maior de idade!');
// }

// let age = prompt('How old are you?', '');
// let message = (age < 3) ? 'Hi, baby!' :
//  (age < 18) ? 'Hello!' :
//  (age < 100) ? 'Greetings!' : 
//  'What an unusual age!';
// alert(message);

// let age = prompt('How old are you?', '')
// if (age < 3) {
//   alert('Hi Baby!');
// } else if (age < 18){
//   alert('Hello!');
// } else if (age < 100) {
//   alert('Greetings!');
// } else {
//   alert('What an unusual age!');
// }

// let jsName = prompt("What's the official name of javascript?");

// if (jsName == "ECMAScript") {
//   alert('Right!');
// } else {
//   alert('Wrong!');
// }

// let number = prompt('Digite um número');
// if (number > 0) {
//   alert(1);
// } else if (number < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }


// let result = (a + b < 4) ? 'Below' : 'Over';

// let hour = prompt('Que horas são?', '');
// let isWeekend = true
// if (hour < 10 || hour > 18 || isWeekend) {
//   alert('The office is closed!');
// } else {
//   alert('The office is open!');
// }

// let firstName = prompt('Qual seu nome?', '');
// let lastName = prompt('Qual seus sobrenome?', '');
// let nickName = prompt('Qual seus apelido?', '');
// alert(firstName || lastName || nickName || 'Anonymous!');

// let age = prompt('How old are you?', '');
// if (age >= 14 && age <= 90) {
//   alert('It is');
// } else {
//   alert("It isn't");
// }

let age = prompt("Number:", '');
if (!(age < 14 && age > 90)) {
  alert('Não está!');
} else {
  alert('Está!'); 
}