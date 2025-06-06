//1- Cadastro de novos produtos

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

//2- Adicionar itens ao cardapio
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

//3- Último produto com defeito

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

//- Removendo produto
let produtoRemovido = producao.pop();

console.log("Depois do pop");
console.table(producao);

console.log("Produto Removido:", produtoRemovido);

console.log(`-------------------------`);

//4-Cancelamento de última inscrição

let inscritos = ["Pedro", "Larissa", "João", "Amanda", "Lucas", "Mariana"];

console.log("Antes do pop");
console.table(inscritos);

//- Removendo ultimo
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

//6– Primeira mensagem indevida

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

// 7 Prioridade na fila

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

//8 – Alunos transferidos

let chamada = ["Carlos", "Fernanda", "João", "Mariana", "Lucas", "Camila"];

console.log("Antes do UnShift chamada");
console.table(chamada);

filaAtendimento.unshift("Beatriz");
filaAtendimento.unshift("Rafaela");

console.log("Depois do Unshift chamada");
console.table(chamada);

console.log(`---------------`);

//9– Conferência de presença

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

//10– Verificação de produto em estoque

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

//11 Lista de receita de Bolo
let ingredientes = [
  "farinha de trigo",
  "fermento",
  "leite",
  "ovos",
  "açúcar",
  "manteiga",
];

console.log("Ingredientes com String: ", ingredientes.join(", "));

console.log(`------------------`);

//12 Tags para URL

let palavrasChave = [
  "desenvolvimento",
  "frontend",
  "javascript",
  "css",
  "react",
];

console.log("palavras chave com String: ", ingredientes.join("_"));

console.log(`--------------------------------`);

//13 – Relatório de férias: Primeira semana

let diasFaltas = [
  "Carlos – Segunda",
  "Carlos – Terça",
  "Carlos – Quarta",
  "Carlos – Quinta",
  "Carlos – Sexta",
  "Carlos – Segunda (semana 2)",
  "Carlos – Terça (semana 2)",
  "Carlos – Quarta (semana 2)",
];

console.table(diasFaltas);
console.log("parte da lista (índices 0 ao 5):", diasFaltas.slice(0, 5));

console.log(`---------------------`);

//14  – Destaques da semana no blog

let artigosBlog = [
  "Como usar Docker com Node.js",
  "5 erros comuns em JavaScript",
  "Introdução ao TypeScript",
  "Clean Code na prática",
  "Design Patterns úteis",
  "Refatoração de código",
  "Boas práticas de API REST",
  "Segurança em aplicações web",
];

console.table(artigosBlog);
console.log("parte da lista (índices 0 ao 5):", artigosBlog.slice(0, 4));

console.log(`---------------------`);

//15– Remoção de itens inativos no menu

let menuNavegacao = [
  "Início",
  "Serviços",
  "Portfólio",
  "Blog",
  "Contato",
  "Login",
  "Área do cliente",
];

console.log("Antes do splice:");
console.table(menuNavegacao);

// Removendo 2 elementos

let elementosRemovidos = menuNavegacao.splice(2, 3);

console.log("Depois do splice");
console.table(menuNavegacao);

console.log("Elementos removidos:", elementosRemovidos);

console.log(`---------------------`);

// 16 – Substituição de matérias na grade

let gradeCurricular = [
  "Matemática",
  "Português",
  "Biologia",
  "Física",
  "História",
  "Educação Física",
  "Inglês",
];

//removendo o item
gradeCurricular.splice(2, 1);
gradeCurricular.splice(3, 1);

//adicionando
gradeCurricular.splice(2, 0, "Programação");
gradeCurricular.splice(3, 0, "Robótica");

console.log(gradeCurricular);

console.log(`---------------------`);

// 17 – Atualização de lista de usuários

let usuariosSistema1 = [
  "aline.souza",
  "maria.ferreira",
  "carlos.lima",
  "ana.martins",
];

let usuariosSistema2 = [
  "joao.silva",
  "paulo.pereira",
  "fernanda.alves",
  "marcelo.cardoso",
];

// juntando as duas listas
console.log(
  "Todos os usuarios do sistema:",
  usuariosSistema1.concat(usuariosSistema2)
);

console.log(`---------------------`);

//18 – Catálogo unificado

let hardwares = ["processador i7", "placa-mãe", "memória RAM 16GB", "SSD 1TB"];

let perifericos = [
  "teclado gamer",
  "mouse ótico",
  "webcam HD",
  "fone com microfone",
];

// juntando as duas listas
console.log("Hardwares e perifericos:", hardwares.concat(perifericos));

console.log(`---------------------`);

// 19 – Códigos de produtos formatados

let codigos = [
  "abc123",
  "def456",
  "ghi789",
  "jkl012",
  "mno345",
  "pqr678",
  "stu901",
  "vwx234",
];

//Transformando as letras em maiusculas
let codigosEmMaiusculo = codigos.map((item) => item.toUpperCase());

console.log("Nova lista em maiusculo:", codigosEmMaiusculo);

console.log(`---------------------`);

//20 – Formatando lista de preços

let precos = [129.9, 399.5, 259.0, 89.9, 599.99, 39.5, 999.0];

// adicionando "R$"
let reais = precos.map((item) => "R$" + item);

console.log(reais);

console.log(`---------------------`);

//21 – Filtrar itens acima do estoque mínimo

let estoquess = [
  { produto: "Teclado", quantidade: 5 },
  { produto: "Mouse", quantidade: 12 },
  { produto: "Monitor", quantidade: 3 },
  { produto: "Notebook", quantidade: 18 },
  { produto: "Impressora", quantidade: 9 },
  { produto: "Webcam", quantidade: 20 },
];

let produtosAcimaDasUnidades = estoquess.filter((item) => item.quantidade > 10);
console.log("Os produtos com mais de 10 unidades: ", produtosAcimaDasUnidades);

console.log(`---------------------`);

// 22 – Alunos com média acima de 7

let alunos = [
  { nome: "Carlos", media: 6.5 },
  { nome: "Fernanda", media: 7.2 },
  { nome: "Lucas", media: 8.1 },
  { nome: "Marina", media: 5.9 },
  { nome: "João", media: 7.0 },
  { nome: "Aline", media: 9.3 },
];
let alunosAprovados = alunos.filter((aluno) => aluno.media >= 7);
console.log("Alunos com a média acima de 7:", alunosAprovados);

console.log(`---------------------`);

//23 – Organizar lista de candidatos

let candidatos = [
  "Marcos",
  "Aline",
  "Carla",
  "João",
  "Fernanda",
  "Lucas",
  "Bruno",
  "Isabela",
];

// Em ordem alfabetica
let alfabetica = candidatos.sort();
console.log("Candidatos em ordem alfabética:", alfabetica);

console.log(`---------------------`);

//24 – Ranking de vendas

let vendas = [3500, 1800, 4200, 3900, 5000, 1200, 2900, 4700];

let listaOrdenada = vendas.sort((b, a) => a - b);

console.log(listaOrdenada);

console.log(`---------------------`);

//25– Últimas atualizações do sistema

let atualizacoes = [
  "Backup diário concluído",
  "Servidor reiniciado",
  "Nova versão implantada",
  "Logs exportados",
  "Firewall atualizado",
  "Monitoramento ativado",
  "Banco de dados otimizado",
  "Script de segurança executado",
];

// invertenção da lista
let atualizacoesRecentes = atualizacoes.reverse();

console.log(atualizacoesRecentes);

console.log(`---------------------`);

//26 – Histórico de navegação

let historico = [
  "login",
  "painel",
  "relatórios",
  "detalhes do cliente",
  "editar dados",
  "configurações",
  "logout",
];

// invertendo a lista
let ReverseHistorico = historico.reverse();

console.log(historico);

console.log(`---------------------`);

// Fim ^_____^
