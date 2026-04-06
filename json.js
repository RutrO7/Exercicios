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
  salario: {
    corresaoDoSalario: (2159).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }),
  },
};

let convert = JSON.stringify(objEmJson);
console.log(convert);

const realConvert = objEmJson.salario.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
console.log(realConvert);

//let numeroEmReais = objEmJson.salario.realConvert;
//console.log(numeroEmReais);
console.log(objEmJson.salario.corresaoDoSalario);

// Real forma de fazer um objeto com decimais em R$ no padrão R$ 1.000,00;
const salario = 2159;

const objEmJsons = {
  idade: 39,
  trabalho: "Vender Consorcio",
  salario: {
    formatado: salario.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }),
  },
  // não podemos simplismente colocar o R$ já formatado, pq o js não aceita, creio que nenhum aceite
  //valor: 'R$' 2.1159,00 POR ISSO USAMOS "toLocaleString"
};

console.log(objEmJsons);
