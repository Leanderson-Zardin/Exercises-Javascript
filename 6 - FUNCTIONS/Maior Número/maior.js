function menorNumero(a, b) {
  if(a > b) {
    return a;
  }
  return b;
}

let a = prompt("Digite o primeiro número:", "");
let b = prompt("Digite o segundo número: ");
let result = menorNumero(a, b);
alert(result);