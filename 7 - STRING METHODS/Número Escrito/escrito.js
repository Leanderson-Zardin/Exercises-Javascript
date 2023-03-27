let num = prompt("Digite um número: ", 0);
let numObj = {
  0: "Zero",
  1: "Um",
  2: "Dois",
  3: "Três",
  4: "Quatro",
  5: "Cinco",
  6: "Seis",
  7: "Sete",
  8: "Oito",
  9: "Nove",
}
let resultado = [];
for (let i of num) {
  resultado.push(" " + numObj[i]);
}

alert(resultado)