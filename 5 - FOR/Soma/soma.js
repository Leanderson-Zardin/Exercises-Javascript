let num;
let maximo = +prompt("Digite até onde você quer somar:", 0);
let soma = 0;

for(num = 1; num <= maximo; num++) {
  alert(`${num} \nSoma: ${soma += num}`);
}

alert(`Resultado final: ${soma}`);