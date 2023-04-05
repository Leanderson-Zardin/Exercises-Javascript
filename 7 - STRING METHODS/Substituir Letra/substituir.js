let str = prompt("Digite uma palavra");
alert( upperCase(str) );
let letra = prompt("Digite uma letra para substituir as vogais:", "");

function upperCase(str) {
  if (!str) return "Você não digitou uma palavra";

  return (str[0].toUpperCase() + str.slice(1));
}

function vogal(str, letra) {
  let resultado = "";
  for(let i of str) {
    if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      str = str.replace(i, letra);
    }
  }

  return str;
}

alert( vogal(str, letra) );