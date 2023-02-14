let firstCar = prompt("Digite o nome do primeiro veículo:", "");
let firstSpeed = prompt(`Digite a velocidade de ${firstCar}`);
let secondCar = prompt(`Digite o nome do segundo veículo:`, "");
let secondSpeed = prompt(`Digite a velocidade de ${secondCar}`);

if(firstSpeed == secondSpeed) {
  alert(`A velocidade de ambos é a mesma: ${firstSpeed} Km/h.`);
} else if(firstSpeed > secondSpeed) {
  alert(`${firstCar} é mais veloz que ${secondCar}`);
} else {
  alert(`${secondCar} é mais veloz que ${firstCar}`);
}
