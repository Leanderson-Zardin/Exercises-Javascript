let palavra = "Leanderson";
let word = "";

for (let i = 0; i < palavra.length; i++) {
  word += palavra[i];
  console.log(word)

  if(i == palavra.length - 1) {
    
    for ( let i = palavra.length - 1; i >= 0; i--) {
      word = palavra.substring(-1, i);
      console.log(word)
    }

  }
} 