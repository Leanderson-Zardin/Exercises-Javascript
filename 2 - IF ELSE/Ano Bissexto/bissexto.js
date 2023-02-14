let ano = prompt("Digite o ano em que deseja verificar:", "");

if(ano == "" || ano == null) {
  alert('É preciso digitar um ano!')
} else if(ano % 4 === 0 && ano.substr(-2) !== "00" || ano % 100 === 0 && ano % 400 === 0) {
  alert(`${ano} é um ano bissexto!`);
} else {
  alert(`${ano} não é um ano bissexto!`);
}