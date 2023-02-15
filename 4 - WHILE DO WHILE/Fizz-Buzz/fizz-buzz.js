let num = 1;
let list = "";

while(num <= 100) {
  if(num % 3 == 0 && num % 5 == 0) {
    list += `${num} Fizz Buzz\n`;
  } else if(num % 3 == 0) {
    list += `${num} Fizz\n`;
  } else if(num % 5 == 0) {
    list += `${num} Buzz\n`;
  } else {
    list += `${num}\n`
  }

  num++;
}

alert(list);
console.log(list);