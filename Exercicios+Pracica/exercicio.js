{
  //Crie um objeto com nome, idade e email.
  //  Use destructuring para extrair essas informações em variáveis separadas.

  const id = {
    nome: "Artur",
    idade: 20,
    email: "artur021@gmail.com",
  };
  let { nome, idade, email } = id;
  console.log(`Meu nome é: ${nome}`);
  console.log(`Eu tenho ${idade} anos de idade`);
  console.log(`Meu email para contato é: ${email}`);
}

{
  //Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.

  const linguagensDeProgamações = ["Pyton", "java", "C##"];
  let [ling1, ling2, ling3] = linguagensDeProgamações;
  console.log("-", ling1);
  console.log("-", ling2);
  console.log("-", ling3);
}

{
  //Crie uma função que receba vários números como parâmetros usando o operador rest (...).
  //Utilize um laço for para somar todos os valores recebidos e retorne o total.

  function operador(...numeros) {
    let total = 0;

    for (let numero of numeros) {
      total += numero;
    }

    return total;
  }

  console.log(operador(28, 9, 27));
}

{
  //Crie dois arrays de frutas e combine-os usando o operador spread.

  const frutasDaRoça = ["banana", "goiaba", "manga", "pitaya"];
  console.log(`${frutasDaRoça}`);

  const frutasDaCidade = ["morango", "pera", "lotus"];
  console.log(`${frutasDaCidade}`);

  const todasAsFrutas = ["Jaca", ...frutasDaRoça, ...frutasDaRoça, "Pana"];
  console.log(todasAsFrutas);
}

{
  //Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.
  const pessoa = {
    nome: "Artur",
  };
  const cidades = {
    rg: "Minas Gerais",
  };
  const tudo = { ...pessoa, ...cidades };
  console.log(tudo);
}

{
  //Crie uma função que recebe um nome e imprime "Olá, [nome]".
  // Se o nome não for passado, use "visitante" como valor padrão
  function funcao(nome) {
    if ((nome = "Artur")) {
      console.log("Olá", nome);
    } else {
      console.log("Olá visitante");
    }
  }
  funcao();
}

{
  //Crie uma variável com a data atual e exiba o dia, mês e ano formatados.
  const dataEHora = new Date();
  console.log(
    dataEHora.getDate(),
    dataEHora.getMonth(),
    dataEHora.getFullYear(),
  );
}
//Crie uma função simples chamada somar(a, b) e exporte-a como módulo
// (modo CommonJS ou ES Modules, dependendo do ambiente).

//Crie uma função construtora chamada Livro que receba titulo e autor como parâmetros e os
// armazene em propriedades do objeto. Em seguida, crie dois objetos Livro usando essa função.

//Adicione à função construtora Livro uma função chamada descrever,
// que retorna uma frase com o título e o autor do livro, usando concatenação de strings.
