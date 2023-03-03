let escolha;

do {
  escolha = prompt(
    "Bem vindo à Calculadora Geométrica!\n" +
    "\nEscolha um dos cálculos:" +
    "\n1) Área do triângulo" +
    "\n2) Área do retângulo" +
    "\n3) Área do quadrado" +
    "\n4) Área do trapézio" +
    "\n5) Área do círculo" +
    "\n\n6) Sair da Calculadora"
  )

  switch (escolha) {
    case "1":
      alert(
        "Área do triângulo: " + triangulo());
      break
    case "2":
      alert(
        "Área do retângulo: " + retangulo()
      )
      break
    case "3":
      alert(
        "Área do quadrado: " + quadrado()
      )
      break
    case "4":
      alert(
        "Área do trapézio: " + trapezio()
      )
      break
    case "5":
      alert(
        "Área do círculo: " + circulo()
      )
      break
    case "6":
      break
    default:
      alert("Comando Inválido");
      break
  }

} while (escolha !== "6");

function triangulo() {
  let base = +prompt("Valor da base:", 0);
  let altura = +prompt("Valor da altura:", 0);
  return base * altura / 2;
}

function retangulo() {
  let base = +prompt("Valor da base:", 0);
  let altura = +prompt("Valor da altura:", 0);
  return base * altura;
}

function quadrado() {
  let lado = +prompt("Valor do lado:", 0);
  return lado * lado;
}

function trapezio() {
  let baseMaior = +prompt("Valor da base maior:", 0);
  let baseMenor = +prompt("Valor da base menor:", 0);
  let altura = +prompt("Valor da altura:", 0);
  return (baseMaior + baseMenor) * altura / 2;
}

function circulo() {
  let raio = +prompt("Valor do raio:", 0);
  return 3.14 * (raio * raio);
}