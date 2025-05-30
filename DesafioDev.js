let promocoes = [
  "teclado mecânico",
  "mouse gamer",
  "monitor ultrawide",
  "cadeira ergonômica",
  "webcam HD",
  "fone bluetooth",
  "notebook i5",
  "hub USB",
];

console.log("Antes do push");
console.table(promocoes);

promocoes.push("SSD 1TB");
promocoes.push("mesa digitalizadora");

console.log("depois do push");
console.table(promocoes);
