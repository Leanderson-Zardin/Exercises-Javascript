let nome = prompt("Digite um nome: ", "").split(" ");

function firstLetter(nome) {
  let initials = "";
  for (let i of nome) {
    if(i == "e" || i == "do" || i == "da" || i == "dos" || i == "das" || i == "de" || i == "di" || i == "du") {
      continue;
    } else {
      initials += i[0];
    }
  }

  return initials;
}

alert(firstLetter(nome));