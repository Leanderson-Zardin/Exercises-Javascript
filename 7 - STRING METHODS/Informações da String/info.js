let str = "";

do {
  str = prompt("Digite uma palavra: ", "");
} while (str == "");

let letras = str.length;
let maiuscula = str.toUpperCase();
let vogais = 0;
let digitos = 0;

for(let i of str) {
  if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
    vogais++;
  }

  if(i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9) {
    digitos++;
  }
}

let initial = maiuscula.startsWith("INS");
let end = maiuscula.endsWith("AIS");


alert("Informações da String \n" +
  "\nNúmero de Caracteres: " + letras +
  "\nPalavra Maiúscula: " + maiuscula +
  "\nNúmero de Vogais: " + vogais +
  "\nComeça com \"INS\"? " + initial +
  "\nTermina com \"AIS\"? " + end +
  "\nNúmero de Dígitos: " + digitos
)