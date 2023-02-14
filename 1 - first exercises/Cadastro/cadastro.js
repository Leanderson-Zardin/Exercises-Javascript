let firstName = prompt('Seu primeiro nome:', '');
let lastName = prompt('Seu sobrenome:', '');
let studyArea = prompt('Campo de estudo:', '');
let birthYear = prompt('Ano do seu nascimento:', '');
let age = 2023 - Number(birthYear);
alert(`${firstName} ${lastName}, ${studyArea}, ${age}`);