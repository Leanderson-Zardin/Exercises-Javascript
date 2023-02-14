const nomeTurista = prompt("Olá! Qual é o seu nome?");
let cidades = "";
let contagem = 0;
let visita = prompt("Você já visitou alguma cidade? (Sim/Não");

while(visita === "Sim") {
  let cidade = prompt("Qual o nome da cidade visitada?");
  cidades += `${cidade}\n`;
  contagem++;
  visita = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}

alert(`Turista: ${nomeTurista}
\nCidades Visitadas: ${contagem}
\nNomes das Cidades:
${cidades}`);