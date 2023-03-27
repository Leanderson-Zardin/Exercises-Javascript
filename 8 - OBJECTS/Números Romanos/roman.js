let rom = prompt("Digite um Número Romano", "").toUpperCase()

let romObj = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
}

let num = 0;

for (let i = 0; i < rom.length; i++) {

  if(romObj[rom[i]] < romObj[rom[i+1]]) {
    num -= romObj[rom[i]];
  } else {
    num += romObj[rom[i]]
  }

}

alert(num);