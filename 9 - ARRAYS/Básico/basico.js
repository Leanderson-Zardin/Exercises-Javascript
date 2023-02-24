let arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];

console.log(arr);

// //PUSH - adiciona o último elemento
// let tamanho = arr.push("Boromir");
// console.log(arr);
// console.log(tamanho);

// //UNSHIFT - adiciona o primeiro elemento
// tamanho = arr.unshift("Teste");
// console.log(arr);
// console.log(tamanho);

// //POP - retira o último elemento
// let ultimoElemento = arr.pop();
// console.log(arr);
// console.log(ultimoElemento);

// //SHIFT - retira o primeiro elemento
// ultimoElemento = arr.shift();
// console.log(arr);
// console.log(ultimoElemento);

// INCLUDES - verifica se o elemento existe no array
let inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf - verifica o índice do elemento na array
let indice = arr.indexOf("Gandalf");
console.log(indice);

// SLICE - copia uma parte da array
let hobbits = arr.slice(0, 4); //não inclui o 4º elemento
console.log(hobbits);

let outros = arr.slice(-4); //de trás para frente
console.log(outros);

console.log(arr); //SLICE não modifica o array original

// CONCAT - concatena 1 ou mais arrays
let sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// SPLICE - substituição de elementos
let elementoRemovido = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(sociedade);
console.log(elementoRemovido);

// iterar sobre os elementos
for (indice = 0; indice < sociedade.length; indice++) {
  let elemento = sociedade[indice];
  console.log(`${elemento} está na posição ${indice}.`);
}