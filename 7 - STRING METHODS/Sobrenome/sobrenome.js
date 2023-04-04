// let nome = "Omero Francisco Bertol".split(" ");
// alert(nome[nome.length - 1]);

let nome = prompt("Digite um nome: ", "");
let i = nome.lastIndexOf(" ");
let result = nome.slice(i + 1, nome.length);

alert(result);