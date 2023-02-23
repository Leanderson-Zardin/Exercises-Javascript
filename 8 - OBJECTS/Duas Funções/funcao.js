let obj = {};

function A() {
  return obj;
};

function B() {
  return obj; 
};

alert( new A() == new B() );

A().name = "Godzila";
A().age = 18;
console.log( A() );

B().name = "Ann";
B().age = 20;

console.log( B() );
console.log( A() );
console.log( A() );