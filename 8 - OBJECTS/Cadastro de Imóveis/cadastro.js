let escolha;
let imoveis = [];

do {
  escolha = prompt(
    "Número de Imóveis: " + imoveis.length +

    "\n\nOpções:" +
    "\n1) Salvar Novo Imóvel" +
    "\n2) Ver Imóveis" +
    "\n3) Sair"
  );

  switch (escolha) {
    case "1":
      newHome();
      break
    case "2":
      lookHome();
      break
    case "3":
      alert("Encerrando o programa...")
      break;
    default:
      alert("Opção Inválida!");
  }

} while (escolha !== "3");

function newHome() {
  let casa = {};
  casa.proprietario = prompt("Digite o nome do proprietário:", "");
  casa.quartos = prompt("Digite o número de quartos:", 0);
  casa.banheiros = prompt("Digite o número de banheiros:", 0);
  casa.garagem = prompt("A casa possui garagem?", "");
  
  let confirma = confirm(
    "Nome: " + casa.proprietario +
    "\nQuartos: " + casa.quartos +
    "\nBanheiros: " + casa.banheiros +
    "\nGaragem: " + casa.garagem
  );

  if (confirma) {
    alert("Adicionando nova casa...")
    imoveis.push(casa);
  } else {
    return;
  };
}

function lookHome(imoveis) {
  if (imoveis == null) {
    alert("Nenhuma casa foi adicionada!");
  } else {
    for (imovel in imoveis) {
      alert(
        "Imóvel " + (+imovel + 1) + "\n\n" +
        "Proprietario: " + imoveis[imovel].proprietario + "\n" +
        "N° de Quartos: " + imoveis[imovel].quartos + "\n" +
        "N° de Banheiros: " + imoveis[imovel].banheiros + "\n" +
        "Possui Garagem? " + imoveis[imovel].garagem
      );
    }
  }
}