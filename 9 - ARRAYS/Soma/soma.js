let ar = [];
let num;
let escolha;

do {
  num = prompt("Digite um número:");
  ar.push(+num);
  escolha = confirm("Deseja adicionar um novo número?");
} while (escolha === true);


let i = 1;
let sum = 0;

if (ar !== null) {
  for (i of ar) {
    if (i <= 1000) {
      sum += i;
    }
  }
  alert(sum);
} else {
  alert(sum);
}