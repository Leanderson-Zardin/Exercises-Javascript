//---------------------- PRIMEIRA FORMA
/*
function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");

  if (str === joinArray) {
    alert(`${str} é um palíndromo!`);
  } else {
    alert(`${str} não é um palíndromo!`);
  }
}

let str = prompt("Digite uma palavra:");
reverseString(str);
*/

// --------------------- PRIMEIRA FORMA SIMPLIFICADA
/*
function reverseString(str) {
  let reverseString = str.split("").reverse().join("");
  reverseString === str ? alert("PALÍNDROMO!") : alert("NÃO É PALÍNDROMO");
}

let str = prompt("Digite uma palavra:");
reverseString(str);
*/

// --------------------- SEGUNDA FORMA

function reverseString(str) {
  let newString = "";

  for (i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  str === newString ? alert("PALÍNDROMO!") : alert("NÃO É PALÍNDROMO!");
}

let str = prompt("Digite uma palavra:");
reverseString(str);