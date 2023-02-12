let num = Number(prompt("Digite um número:"));

if(num == null || num == "") {
  alert("É preciso digitar um número!");
} else if(Number.isSafeInteger(num /= 3)) {
  alert(`É divisível por 3! \nresultado: ${num}`);
} else {
  alert(`Não é divisível por 3! \nresultado: ${num}`);
}