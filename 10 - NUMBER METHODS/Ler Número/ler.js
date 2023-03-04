function readNumber(num) {
  num = prompt("Digite um número", 0);

  if(num === "" || num === undefined) {
    return "Read: Null";
  }

  return "Read: " + +num;
}

alert( readNumber() );