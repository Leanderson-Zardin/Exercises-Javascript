let dinheiro = +prompt("Digite a quantidade inicial de dinheiro:");
let operacao;
let iniciar;

do {
  iniciar = +prompt(`Dinheiro Atual: R$${dinheiro} \n\nQual sua opção? \n1) Adicionar Dinheiro \n2) Tirar Dinheiro \n3) Finalizar`);

  switch (iniciar) {
    case 1:
      operacao = +prompt("Quanto você deseja adicionar? ");
      dinheiro += operacao;
      break
    case 2:
      operacao = +prompt("Quanto você deseja tirar? ");
      dinheiro -= operacao;
      break
    case 3:
      break;
    default:
      alert("Comando Inválido!");
  }
} while(iniciar !== 3);