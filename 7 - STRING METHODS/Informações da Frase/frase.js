let frase = prompt("Digite uma Frase: ", "");

let caracteres = frase.length;
let palavras = 1;
let espacos = 0;
let vogal = 0;

for(let i of frase.toLowerCase()){
  if(i == " ") {
    espacos++;
  }

  if(espacos == frase.length) {
    palavras = 0;
  } else {
    palavras = espacos + 1;
  }

  if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u" || i == "é") {
    vogal++
  }
}

alert("Informações da Frase \n" +
  "\n" + frase + "\n" +
  "\nCaracteres: " + caracteres +
  "\nPalavras: " + palavras +
  "\nEspaços: " + espacos +
  "\nVogais: " + vogal
)