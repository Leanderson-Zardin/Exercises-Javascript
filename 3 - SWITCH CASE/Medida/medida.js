let num = +prompt("Digite o valor para a conversão:", "");
let medida = prompt("Digite a unidade de medida: mm, cm, dm, dam, hm, km", "");
let valorConvertido;

switch(medida) {
  case "mm":
    valorConvertido = num * 1000;
    alert(`Resultado da conversão: ${valorConvertido}mm.`)
  break
  case "cm":
    valorConvertido = num * 100;
    alert(`Resultado da conversão: ${valorConvertido}cm.`)
  break
  case "dm":
    valorConvertido = num * 10;
    alert(`Resultado da conversão: ${valorConvertido}dm.`)
  break
  
  case "dam":
    valorConvertido = num / 10;
    alert(`Resultado da conversão: ${valorConvertido}dam.`)
  break
  case "hm":
    valorConvertido = num / 100;
    alert(`Resultado da conversão: ${valorConvertido}hm.`)
  break
  case "km":
    valorConvertido = num / 1000;
    alert(`Resultado da conversão: ${valorConvertido}km.`)
  break
  default:
    alert("Medida incorreta")
  break
}