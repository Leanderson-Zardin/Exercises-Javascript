let num = 0;
let media = 0;
let i = -1;

do {
  media += num;
  num = +prompt("Digite um número positivo:");
  i++;
} while(num > 0);

media /= i;

alert(media);