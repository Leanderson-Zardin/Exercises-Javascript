/*
function checkAge(age) {
  returnage > 18 ? true : confirm("Você tem a autorização dos seus pais?"); 
}

let age = prompt("Qual sua idade?", 18);

if(checkAge(age)) {
  alert("Acesso liberado!");
} else {
  alert("Acesso Negado!");
}
*/

function checkAge(age) {
  return age > 18 || confirm("Você tem a autorização dos seus pais?");
}

let age = prompt("Qual sua idade?", 18);

if(checkAge(age)) {
  alert("Acesso liberado!");
} else {
  alert("Acesso Negado!");
}