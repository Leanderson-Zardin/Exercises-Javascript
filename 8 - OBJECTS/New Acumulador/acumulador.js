function Acumulador(valorInicial) {
  this.value = valorInicial;
  this.read = function() {
    this.value += +prompt("Digite um valor para soma:", 0);
    return this;
  }
}

let valorInicial = +prompt("Digite o valor incial:", 0);

let acumulador = new Acumulador(valorInicial);
acumulador.read().read();
alert( acumulador.value );