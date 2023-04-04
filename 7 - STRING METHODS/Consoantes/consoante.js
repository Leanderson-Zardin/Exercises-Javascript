let frase = prompt("Digite uma frase: ", "").toLowerCase();
let count = 0;

for(let i of frase) {
  if(i !== "a" && i !== "e" && i !== "i" && i !== "o" && i !== "u" && i !== " ") {
    count++;
  }
}

alert(frase + "\n\nO numero de contoantes é " + count);