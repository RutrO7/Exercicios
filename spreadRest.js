//O conceito do spreadRest é que, com ele vc consegue duplicar um objeto, ou ate mesmo subscrever parte dele;
// Spread e Rest operator, sintaxe ...;
let artur = {
  idade: 19,
  profissao: "Consultor",
  estuda: "Progamação",
  possueCNH: "Simm",
};
console.log(artur);

// Forma errada de se duplicar um objeto,proposital;
const artur2 = artur;

// Forma certa de criar outro objeto com os mesmos dados de um ja existente;
const novoArtur = { ...artur };
novoArtur.idade = 20;
novoArtur.profissao = "Progamador Junior";

console.log("Minha nova profissao é", novoArtur.profissao);

// Ja aqui é como usar o Rest operator e pegando um pedaço do codigo😊;
const { idade, ...resto } = artur;

console.log(novoArtur.idade);
console.log(resto);
