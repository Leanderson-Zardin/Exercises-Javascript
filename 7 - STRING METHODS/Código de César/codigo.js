let letras = {
  "a": "D",
  "b": "E",
  "c": "F",
  "d": "G",
  "e": "H",
  "f": "I",
  "g": "J",
  "h": "K",
  "i": "L",
  "j": "M",
  "k": "N",
  "l": "O",
  "m": "P",
  "n": "Q",
  "o": "R",
  "p": "S",
  "q": "T",
  "r": "U",
  "s": "V",
  "t": "W",
  "u": "X",
  "v": "Y",
  "w": "Z",
  "x": "A",
  "y": "B",
  "z": "C",
  " ": " ",
}

let frase = prompt("Digite uma palavra", "");

let novaFrase = frase.toLowerCase().split("");

function replacePhrase(frase, novaFrase, letras) {
  let encrypted = ""
  for ( let i in novaFrase ) {
    encrypted += letras[novaFrase[i]]
  }

  return encrypted;

}

alert("Palavra Encriptografada \n\n" + replacePhrase(frase, novaFrase, letras) )