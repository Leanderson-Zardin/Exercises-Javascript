let fruta = prompt("Digite o nome de uma fruta:", "");

switch(fruta) {
  case "Maçã":
    alert("Não vendemos esta fruta aqui!");
  break
  case "Kiwi":
    alert("Estamos com escassez de Kiwis!");
  break
  case "Melancia":
    alert("Aqui está, são 3 reais o quilo!");
  break
  default:
    alert("Fruta Inexistente!");
  break
}