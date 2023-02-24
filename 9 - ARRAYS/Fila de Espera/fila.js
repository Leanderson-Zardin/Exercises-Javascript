let fila = [];
let escolha;

do {
  let paciente = "";
  for (let indice = 0; indice < fila.length; indice++) {
    paciente += (indice + 1) + "º " + fila[indice] + "\n";
  }

  escolha = prompt(
  "Fila de Pacientes: \n" +
  paciente +

  "\nOpções:" +
  "\n1) Novo Paciente" +
  "\n2) Consultar" +
  "\n3) Sair")

  switch(escolha) {
    case "1":
      novoPaciente();
      break
    case "2":
      consultar();
      break
    case "3":
      break;
    default:
      alert("Valor Desconhecido!")
      break
  }
} while (escolha !== "3");

function novoPaciente(nome) {
  do {
    nome = prompt("Digite o nome do novo paciente:", "");
  } while(nome === null || nome === "");

  fila.push(nome);
}

function consultar() {
  alert(`${fila[0]} foi chamado para consulta.`);
  alert("Consulta Finalizada!");
  fila.shift();
}