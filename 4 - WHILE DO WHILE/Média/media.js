let num = +prompt("Digite o primeiro número:");
let num2 = +prompt("Digite o segundo número:");
let media;
let i = 1;

while(num2 > 0) {
  media = (num + num2) / ++i;
  num += num2;
  num2 = +prompt("Digite mais um número:")
}

alert(media);