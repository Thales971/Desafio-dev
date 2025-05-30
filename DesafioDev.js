
// Cadastro de novos produtos

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

console.log("-------------------------");


// Adicionar itens ao cardapio
let cardapio = [
    "pizza de calabresa",
    "lasanha",
    "sushi",
    "salada Caesar",
    "pastel",
    "yakisoba",
    "feijoada"
  ];


  console.log("Antes do push");
console.table(cardapio);

cardapio.push("hambúrguer artesanal");
cardapio.push("wrap de frango");

console.log("depois do push");
console.table(cardapio);

console.log("---------------");

//Último produto com defeito

let producao = [
    "mousepad",
    "placa de vídeo",
    "fonte de alimentação",
    "HD externo",
    "notebook gamer",
    "roteador"
  ];

  console.log
("Antes do pop");
console.table(producao);

// Removendo ultimo estilo
let estiloRemovido = producao.pop();

console.log("Depois do pop");
console.table(producao);

console.log
("Estilo Removido:", estiloRemovido)

  


  

