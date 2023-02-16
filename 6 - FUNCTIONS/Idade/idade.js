/*
let idade = prompt("Qual sua idade?", 18);
let welcome;

if(idade < 18) {
  welcome = function() {
    alert("Hello!");
  };
} else {
  welcome = function() {
    alert("Greetings!");
  };
}

welcome();
*/

let idade = prompt("Qual sua idade?", 18);

let welcome = idade < 18 ?
  function() {alert("Hello!");} :
  function() {alert("Greetings!");
};

welcome();