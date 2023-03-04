let str = prompt("Digite uma palavra");
alert( upperCase(str) );

function upperCase(str) {
  if (!str) return "Você não digitou uma palavra";

  return (str[0].toUpperCase() + str.slice(1));
}
