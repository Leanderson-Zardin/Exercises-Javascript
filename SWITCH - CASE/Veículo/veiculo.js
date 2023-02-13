let carro = prompt("Digite o carro que queira comprar:", "");

switch(carro) {
  case "Hatch":
    alert("Compra efetuada com sucesso!");
  break;
  case "Sedan":
  case "Motocicleta":
  case "Caminhonete":
    alert("Tem certeza que não prefere este modelo?");
  break
  default:
    alert("Não trabalhamos com este tipo de automóvel aqui!");
  break
}