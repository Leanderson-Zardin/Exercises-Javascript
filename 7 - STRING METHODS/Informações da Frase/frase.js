let frase = prompt("Digite uma frase: ", "");

let caracteres = frase.length;
let palavras = 0;
let lista = frase.split(" ");

for (let i of lista) {
  palavras++;
}

alert("Informações da Frase \n" +
  "\nNúmero de caracteres: " + caracteres +
  "\nNúmero de Palavras: " + palavras
)