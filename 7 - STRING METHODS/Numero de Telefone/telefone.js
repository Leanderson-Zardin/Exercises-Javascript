let numero = "";
let resultado = "";

do {
  numero = prompt("Digite um número acima de 7 dígitos: ", "").slice(0, 8);
} while(numero == "" || numero.length < 7);

if(numero.length == 7) {
  numero = "3" + numero;
}

for(let i in numero) {
  resultado += numero[i];
  if(i == 3) {
    resultado += "-";
  }
}

alert("Número Formatado\n\n" + resultado);