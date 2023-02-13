let playerOne = prompt("Digite o nome do primeiro jogador:", "");
let ataque = Number(prompt(`Digite o poder de ataque de ${playerOne}:`));
let playerTwo = prompt("Digite o nome do segundo jogador:", "");
let vida = Number(prompt(`Digite quantos pontos de vida ${playerTwo} terá:`, ""));
let defesa = Number(prompt(`Digite quantos pontos de defesa ${playerTwo} terá:`, ""));
let escudo = confirm(`${playerTwo} terá um escudo?`);

confirm(`INFORMAÇÕES:
\nJogador 1: ${playerOne}
Ataque: ${ataque}
\nJogador 2: ${playerTwo}
Pontos de vida: ${vida}
Pontos de defesa: ${defesa}
Possui escudo? ${escudo}`);

alert("ALERTA DE ATAQUE!!!");

if(ataque > defesa && escudo == false) {
  vida = vida - (ataque - defesa);
  defesa = 0;
} else if(ataque > defesa && escudo == true) {
  vida = vida - ((ataque - defesa) / 2);
} else if(ataque <= defesa) {
  alert("vida intacta!");
  defesa = defesa - ataque;
}

if(vida > 0) {
  alert(`INFORMAÇÕES ATUALIZADAS:
  \nJogador 1: ${playerOne}
  Ataque: ${ataque}
  \nJogador 2: ${playerTwo}
  Vida restante: ${vida}
  Defesa restante: ${defesa}
  Possui Escudo? ${escudo}`);
} else {
  alert(`INFORMAÇÕES ATUALIZADAS:
  \nJogador 1: ${playerOne}
  Ataque: ${ataque}
  \nJogador 2: MORTO!`);
}