// essa é a forma de converter o "JSON" em Objeto, e de quebra a sintaxe do JSON!
let respostaDoServidor = '{"nome":"Artur","idade":19}';
let conversao = JSON.parse(respostaDoServidor);
console.log(conversao.nome);

// tentei fazer um json, e falhei, kkk saiu um objeto normal, vou pesquisar mais e depois atualizo aqui em baixo!
const test = {
  nome: "ARTUR",
  idade: "19",
};
console.log(test.idade);

// Ja para tranformar um objeto em JSON, saiu como o esperado e deu certin!
const objEmJson = {
  idade: 39,
  trabalho: "Vender Consorsio",
  salario: 2159,
};

let convert = JSON.stringify(objEmJson);
console.log(convert);

const realConvert = objEmJson.salario.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
console.log(realConvert);
