let num = "";
let list = "";

do {
  list += `${num}\n`
  num = +prompt("Digite um número positivo entre 1 e 10");
  if(num < 1 || num > 10) {
    break;
  }
} while(num !== 7)

alert(list)