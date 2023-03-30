let numero = 0;
let obj = {
  "2": "Vinte",
  "3": "Trinta",
  "4": "Quarenta",
  "5": "Cinquenta",
  "6": "Sessenta",
  "7": "Setenta",
  "8": "Oitenta",
  "9": "Noventa"
}
do {
  numero = prompt("Digite um número entre 20 e 99", 20);
} while(numero < 20 || numero > 99);

if(numero % 10 == 0) {
  switch(numero) {
    case "20":
      alert(obj[2]);
      break
    case "30":
      alert(obj[3]);
      break
    case "40":
      alert(obj[4]);
      break
    case "50":
      alert(obj[5]);
      break
    case "60":
      alert(obj[6]);
      break
    case "70":
      alert(obj[7]);
      break
    case "80":
      alert(obj[8]);
      break
    case "90":
      alert(obj[9]);
      break
    default:
      break;
  }
} else {
  switch(numero[1]) {
    case "1":
      alert(obj[numero[0]] + " e Um");
      break;
    case "2":
      alert(obj[numero[0]] + " e Dois");
      break;
    case "3":
      alert(obj[numero[0]] + " e Três");
      break;
    case "4":
      alert(obj[numero[0]] + " e Quatro");
      break;
    case "5":
      alert(obj[numero[0]] + " e Cinco");
      break;
    case "6":
      alert(obj[numero[0]] + " e Seis");
      break;
    case "7":
      alert(obj[numero[0]] + " e Sete");
      break;
    case "8":
      alert(obj[numero[0]] + " e Oito");
      break;
    case "9":
      alert(obj[numero[0]] + " e Nove");
      break;
  }
}