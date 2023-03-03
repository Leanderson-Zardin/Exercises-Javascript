let year = +prompt("Digite um número:");
alert(solution(year));

function solution(year) {
  return Math.ceil(year / 100);
}

/*
function solution(year) {
  let str;
  let num;
  if (year >= 1 && year <= 100) {
      return 1;
  } else if (Number.isInteger(year / 100)) {
      str = String(year).slice(0, -2);
      num = Number(str);
      return num;
  } else {
      str = String(year).slice(0, -2);
      num = Number(str);
      return num + 1;
  }
}
*/