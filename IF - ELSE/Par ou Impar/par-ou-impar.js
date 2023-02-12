let num = Number(prompt("digite um número:", ''));
num /= 2;

if(Number.isSafeInteger(num)) {
  alert("Número Par!");
} else {
  alert("Número Ímpar!");
}