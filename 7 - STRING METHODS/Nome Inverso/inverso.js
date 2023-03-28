let frase = prompt("digite um nome: ", "");
let novaFrase = "";

for (let i = 0; i < frase.length; i++) {
  if(i == 0) {
      continue;
  } else {
      novaFrase += frase[frase.length - i]
  }
}

novaFrase += frase[0];


alert(novaFrase.toLowerCase());

if(frase === novaFrase) {
  alert("É um palíndromo!");
} else {
  alert("Não é um palíndromo!");
}