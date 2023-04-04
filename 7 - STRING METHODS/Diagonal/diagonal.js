let palavra;

do {
  let resultado = "";
  palavra = prompt("Digite uma palavra:", "");
  alert(palavra[0] + " - " + palavra[palavra.length - 1]);
  
  for(let i in palavra) {
    for(let j = 0; j < i; j++) {
      resultado += "   ";
    }
    resultado += palavra[i] + "\n";
  }
  alert(resultado);
} while(palavra[0] !== "f" && palavra[0] !== "F");