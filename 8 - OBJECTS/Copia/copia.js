// Object.assign();
/*
let user = {
  name: "John",
  sizes: {
    height: 180,
    widht: 60,
  },
};

let clone = Object.assign({}, user);
console.log(clone)

clone.name = "Leanderson";
console.log(clone);
console.log(user);
*/

// StructuredClone();
let user = {
  name: "Leanderson",
  sizes: {
    height: 180,
    widht: 60,
  },
};

let clone = structuredClone(user);
console.log(clone);

clone.name = "John";
console.log(clone);
console.log(user);