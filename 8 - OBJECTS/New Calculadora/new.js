function Calculadora() {
  this.read = function() {
    this.a = +prompt("Digite o primeiro número:", 0);
    this.b = +prompt("Digite o segundo número:", 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mult = function() {
    return this.a * this.b;
  };
}

let calculadora = new Calculadora();
calculadora.read();
alert( calculadora.sum() );
alert( calculadora.mult() );