let styles = ["Jazz", "Blues"];

styles.push("Rock");
console.log(styles)

styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);

console.log( styles.shift() )
styles.push("Rap", "Reggae");

console.log(styles);