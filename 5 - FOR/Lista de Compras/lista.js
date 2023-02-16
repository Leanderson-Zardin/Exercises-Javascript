let lista = [];
let compra = prompt("Deseja adicionar algum item à lista? (Sim/Não)", "");
let item = "";

for(; compra === "Sim"; lista += `${item}\n`) {
  item = prompt("Digite o item que deseja adicionar à lista:", "");
  compra = prompt("Deseja adicionar algum item à lista? (Sim/Não)", "");
}

alert(`Lista Completa: \n${lista}`);