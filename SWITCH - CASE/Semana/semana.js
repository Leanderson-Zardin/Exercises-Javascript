let dia = prompt("Que dia é hoje?", "");

switch(dia) {
  case "Segunda":
  case "Terça":
  case "Quarta":
  case "Quinta":
  case "Sexta":
    alert("É um dia útil");
  break

  case "Sábado":
  case "Domingo":
    alert("É final de semana, Aproveite!");
  break
  default:
    alert("Dia Inválido!");
  break
}