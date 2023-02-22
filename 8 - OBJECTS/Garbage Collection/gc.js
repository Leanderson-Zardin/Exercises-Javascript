function marry(man, woman) {
  woman.husband = man
  man.wife = woman

  return {
    father: man,
    mother: woman,
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});

console.log(family);
family = null;
console.log(family);

// function marry() se torna inacessível (vai para o lixo)