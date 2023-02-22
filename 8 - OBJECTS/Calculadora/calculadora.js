let calculadora = {
  read() {
    this.a = +prompt("Digite o primeiro número:", 0);
    this.b = +prompt("Digite o segundo número:", 0);
  },

  soma() {
    return this.a + this.b;
  },

  mult() {
    return this.a * this.b;
  },
}

calculadora.read();
alert( calculadora.soma() );
alert( calculadora.mult() );