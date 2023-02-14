let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = num1

if(num1 == null || num1 == "") {
  alert("É preciso digitar um número!");
} else if (Number.isSafeInteger(num1 /= 3) && Number.isSafeInteger(num2 /= 5)) {
  alert(`O número é divisível por 3 e 5. \nResultados: ${num1} e ${num2}`);
} else {
  alert(`O número não é divisível por 3 e 5. \nResultados: ${num1} e ${num2}`);
}