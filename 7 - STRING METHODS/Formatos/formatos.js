let nome = "FULANO";

function vertical(nome) {
  let novoNome = "";
  for (let i of nome) {
    novoNome += i + "\n";
  }

  return novoNome;
}

alert(vertical(nome));

function escada(nome) {
  let novoNome = "";
  for (let i in nome) {
    if(i == 0) {
      continue;
    } else if(i == nome.length - 1) {
      novoNome += nome.slice(0, i + 1);
    } else {
      novoNome += nome.slice(0, i) + "\n";
    }
  }

  return novoNome;
}

alert(escada(nome));

function escadaInversa(nome) {
  let novoNome = "";
  for (let i in nome) {
    if(i == 0) {
      novoNome += nome + "\n";
    } else {
      novoNome += nome.slice(0, -i) + "\n";
    }
  }

  return novoNome;
}

alert(escadaInversa(nome));