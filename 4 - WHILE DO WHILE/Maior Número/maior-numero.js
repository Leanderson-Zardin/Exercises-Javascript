let num = +prompt("Digite um número positivo:");
let maiorNumero = 0;


while(num >= 0) {
  if(num > maiorNumero) {
    maiorNumero = num;
  }
  num = prompt("Digite outro número positivo:");
}

alert(`O maior número digitado foi ${maiorNumero}`);