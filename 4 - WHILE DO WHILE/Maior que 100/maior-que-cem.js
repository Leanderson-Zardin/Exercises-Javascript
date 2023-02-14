let num = 0;

while(num < 100) {
  num = +prompt("Digite um número:", "");

  if(num == null || num == "") {
    break;
  }
}

/*
let num;
do {
  num = prompt("Digite um número:", "");
} while(num <= 100 && num)
*/