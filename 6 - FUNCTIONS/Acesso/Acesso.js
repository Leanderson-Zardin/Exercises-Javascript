function checkAge(age) {
  if(age > 18) {
    return true;
  }

  return confirm("Você tem a autorização dos seus pais?", "");
}

let age = prompt("Quantos anos você tem?", 18);

if(checkAge(age)) {
  alert("Acesso Liberado!");
} else {
  alert("Acesso Negado!");
}