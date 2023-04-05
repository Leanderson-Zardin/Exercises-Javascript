let data = prompt("Digite uma data", "dd/mm/aaaa");
let mes = data.substring(3, 5);
let dia = data.substring(0, 2);
let ano = data.slice(6);

switch(mes) {
  case "01":
    mes = "de Janeiro de";
    break;
  case "02":
    mes = "de Fevereiro de";
    break;
  case "03":
    mes = "de Março de";
    break;
  case "04":
    mes = "de Abril de";
    break;
  case "05":
    mes = "de Maio de";
    break;
  case "06":
    mes = "de Junho de";
    break;
  case "07":
    mes = "de Julho de";
    break;
  case "08":
    mes = "de Agosto de";
    break;
  case "09":
    mes = "de Setembro de";
    break;
  case "10":
    mes = "de Outubro de";
    break;
  case "11":
    mes = "de Novembro de";
    break;
  case "12":
    mes = "de Dezembro de";
    break;
  }

let newDate = data.substring(0, 2) + " " + mes + " " + data.slice(-4);
alert(newDate)

function validacao(data) {
  if(data[2] === "/" && data[5] === "/") {
    return "Barras Corretas!"
  }
  return "Barras Incorretas!";
}

alert( validacao(data) );
alert(dia + " - " + mes + " - " + ano);