/*
function pow(a, b) {
  return Math.pow(a, b);
}

let a = prompt("Digite um número:", "");
let b = prompt("Digite sua potência:", "");
alert(pow(a,b));
*/

function pow(a, b) {
  let result = a;

  for(let i = 1; i < b; i++) {
    result *= a;
  }

  return result;
}

let a = prompt("Digite o primeiro número:", "");
let b = prompt("Digite a potência:", "");

if(b < 1) {
  alert(`Utilize uma potência inteira positiva.`);
} else {
  alert(pow(a, b));
}