let escolha = "";

do {
  escolha = +prompt("Escolha uma das 5 opções a seguir: \n1) Café da Manhã \n2) Almoço \n3) Café da tarde \n4) Janta \n5) Encerrar.");

  switch (escolha) {
    case 1:
      alert("Você escolheu 'Café da Manhã'");
      break
    case 2:
      alert("Você escolheu 'Almoço'");
      break
    case 3:
      alert("Você escolheu 'Café da Tarde'");
      break
    case 4:
      alert("Você escolheu 'Janta'");
      break
    case 5:
      break
    default:
    alert("Sua escolha não está disponível no momento!");
  }
} while(escolha !== 5);