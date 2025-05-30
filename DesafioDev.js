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
  "feijoada",
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
  "roteador",
];

console.log("Antes do pop");
console.table(producao);

// Removendo produto
let produtoRemovido = producao.pop();

console.log("Depois do pop");
console.table(producao);

console.log("Produto Removido:", produtoRemovido);

console.log(`-------------------------`);

//Cancelamento de última inscrição

let inscritos = ["Pedro", "Larissa", "João", "Amanda", "Lucas", "Mariana"];

console.log("Antes do pop");
console.table(inscritos);

// Removendo ultimo
let pessoaRemovidoo = inscritos.pop();

console.log("Depois do pop");
console.table(inscritos);

console.log(" Pessoa removida:", pessoaRemovidoo);

console.log(`--------------------`);

// 5 – Erro de importação

let importados = [
  "carregador portátil",
  "cabo HDMI",
  "leitor biométrico",
  "controle sem fio",
  "webcam 4K",
];

console.log("Antes do Shift");
console.table(importados);

// Removendo o primeiro estilo
let importadosRemovido = importados.shift();

console.log("Depois do shift");
console.table(importados);

console.log("Importado Removido:", importadosRemovido);

console.log(`-------------------`);

//– Primeira mensagem indevida

let mensagens = [
  "Propaganda indevida",
  "Bom dia, posso ajudar?",
  "Preciso de suporte técnico",
  "Claro, qual o problema?",
  "Erro ao acessar conta",
];

console.log("Antes do Shift");
console.table(mensagens);

// Removendo o primeiro
let mensagemRemovida = mensagens.shift();

console.log("Depois do shift");
console.table(mensagens);

console.log("Mensagem Removido:", mensagemRemovida);

console.log(`-----------------`);

//  Prioridade na fila

let filaAtendimento = [
  "cliente 003",
  "cliente 004",
  "cliente 005",
  "cliente 006",
  "cliente 007",
];

console.log("Antes do UnShift");
console.table(filaAtendimento);

filaAtendimento.unshift("cliente 002");
filaAtendimento.unshift("cliente 001");

console.log("Depois do Unshift");
console.table(filaAtendimento);

console.log(`---------------------`);

// – Alunos transferidos

let chamada = ["Carlos", "Fernanda", "João", "Mariana", "Lucas", "Camila"];

console.log("Antes do UnShift chamada");
console.table(chamada);

filaAtendimento.unshift("Beatriz");
filaAtendimento.unshift("Rafaela");

console.log("Depois do Unshift chamada");
console.table(chamada);

console.log(`---------------`);

//– Conferência de presença

let presenca = [
  "João Lima",
  "Carla Nunes",
  "Amanda Souza",
  "Bruno Ribeiro",
  "Fernanda Sales",
];

console.log(
  "A lista inclui a Amanda Souza ?",
  presenca.includes("Amanda Souza")
);

console.log(`------------------------`);

//– Verificação de produto em estoque

let estoque = [
  "mesa para PC",
  "cadeira gamer",
  "monitor 27 polegadas",
  "hub USB",
  "mouse sem fio",
];
console.table(estoque);
console.log(
  "O estoque inclui 'cadeira gamer' ?",
  estoque.includes("cadeira gamer")
);

console.log(`---------------------------`);



// Lista de receita de Bolo
let ingredientes = [
  "farinha de trigo",
  "fermento",
  "leite",
  "ovos",
  "açúcar",
  "manteiga"
];

console.log("Ingredientes com String: ", ingredientes.join(", "));

console.log(`------------------`);


//Tags para URL

let palavrasChave = [
  "desenvolvimento",
  "frontend",
  "javascript",
  "css",
  "react"
];

console.log("palavras chave com String: ", ingredientes.join("_"));

console.log(`--------------------------------`);

