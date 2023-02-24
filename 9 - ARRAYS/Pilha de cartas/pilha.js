let pilha = [];
let escolha;

do {
  let numeroCartas = pilha.length;

  escolha = prompt(
    "Nº de Cartas no Baralho: \n" +
    numeroCartas + " Cartas \n" +
    "\nOpções: " +
    "\n1) Adicionar Carta" +
    "\n2) Puxar Carta" +
    "\n3) Sair"
  );

  if (escolha === "2" && pilha.length === 0) {
    alert("Não há nenhuma carta na pilha!");
    continue;
  }

  switch (escolha) {
    case "1":
      novaCarta();
      break;
    case "2":
      retirarCarta();
      break;
    case "3":
      break;
    default:
      alert("Valor Desconhecido!");
      break;
  };
}  while (escolha !== "3");

function novaCarta(nome) {
  do {
    nome = prompt("Digite o nome da carta para adicionar à pilha:", "");
  } while (nome === null || nome === "");
  pilha.unshift(nome);
}

function retirarCarta(cartaRetirada) {
  cartaRetirada = pilha.shift();
  alert(`Carta Retirada: ${cartaRetirada}`);
}