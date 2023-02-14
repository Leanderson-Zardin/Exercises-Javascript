let num;
let soma = 0;

do {
  num = +prompt("Digite um número positivo acima de 0:");
  soma += num;
} while (num !== 0)

alert(`A soma do números é igual a ${soma}`);