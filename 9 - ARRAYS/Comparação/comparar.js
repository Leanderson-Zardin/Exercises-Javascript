//COMPARAÇÃO DE 2 ARRAYS

/*
let a = [5, 6, 7];
let b = [3, 6, 10];

let pontoA = 0;
let pontoB = 0;
let resultado = [];

for (let i = 0; i < a.length; i++) {

  if(a[i] > b[i]) {
    pontoA += 1;
  } else if (a[i] < b[i]) {
    pontoB += 1;
  }
}

resultado.push(pontoA);
resultado.push(pontoA);
console.log(resultado);
*/

let a = [28, 73, 16];
let b = [21, 10, 90];
let resultado = [0, 0];

for (let i = 0; i < a.length; i++) {

  if(a[i] > b[i]) {
    resultado[0]++;
  } else if(a[i] < b[i]) {
    resultado[1]++;
  }

}
console.log(resultado);