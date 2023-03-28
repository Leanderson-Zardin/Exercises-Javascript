let frase = prompt("Digite uma frase: ", "").split(" ");
let novaFrase = ""

for (let i of frase) {
  if(i == "") {
    continue;
  } else if(i == frase[frase.length - 1]) {
    novaFrase += i;
  } else {
    novaFrase += i + " ";
  }
}

// alert(frase);
alert(novaFrase);