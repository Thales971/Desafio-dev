
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

// Removendo produto
let produtoRemovido = producao.pop();

console.log("Depois do pop");
console.table(producao);

console.log
("Produto Removido:", produtoRemovido)

console.log(`-------------------------`);

//Cancelamento de última inscrição
 
let inscritos = [
    "Pedro", "Larissa", "João", "Amanda", "Lucas", "Mariana"
  ];

  console.log
("Antes do pop");
console.table(inscritos);

// Removendo ultimo 
let pessoaRemovidoo = inscritos.pop();

console.log("Depois do pop");
console.table(inscritos);

console.log
(" Pessoa removida:", pessoaRemovidoo)

console.log(`--------------------`);

// 5 – Erro de importação

let importados = [
    "carregador portátil",
    "cabo HDMI",
    "leitor biométrico",
    "controle sem fio",
    "webcam 4K"
  ];

  console.log
("Antes do Shift");
console.table(importados);

// Removendo o primeiro estilo
let importadosRemovido = importados.shift();

console.log("Depois do shift");
console.table(importados);

console.log
("Importado Removido:", importadosRemovido)

console.log(`-------------------`);

//– Primeira mensagem indevida

let mensagens = [
    "Propaganda indevida",
    "Bom dia, posso ajudar?",
    "Preciso de suporte técnico",
    "Claro, qual o problema?",
    "Erro ao acessar conta"
  ];

  console.log
("Antes do Shift");
console.table(mensagens);

// Removendo o primeiro 
let mensagemRemovida = mensagens.shift();

console.log("Depois do shift");
console.table(mensagens)

console.log
("Mensagem Removido:", mensagemRemovida)

console.log(`-----------------`);





  


  

