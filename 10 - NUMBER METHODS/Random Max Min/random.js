const randomNumberInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;


alert( randomNumberInteger(1, 5) );
alert( randomNumberInteger(5, 10) );
alert( randomNumberInteger(50, 60) );