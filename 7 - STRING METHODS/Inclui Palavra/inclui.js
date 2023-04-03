let frase = prompt("Digite uma frase: ", "");
let palavra = prompt("Digite uma palavra para procurar", "");
let count = 0;
let indice = 0;

while(indice !== -1) {
  if( frase.indexOf(palavra, indice) !== -1 ) {
    count++;
  }
  indice = frase.indexOf(palavra, indice + 1);
}

alert(frase + "\n\nA palavra " + palavra + " aparece " + count + " vezes na frase.");