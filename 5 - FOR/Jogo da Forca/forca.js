let palavra = "";
let tentativa;

for(tentativa = 5; palavra !== "Javascript"; tentativa--) {
  palavra = prompt("Digite uma palavra:", "");
  
  if(tentativa < 1) {
    break;
  } else if(palavra == "Javascript") {
    continue;
  }

  alert(`você tem ${tentativa} tentativas restantes`);
}

if(palavra === "Javascript" && tentativa >= 1) {
  alert("Parabéns, você acertou a palavra!");
} else {
  alert("GAME OVER! Você foi enforcado!");
}