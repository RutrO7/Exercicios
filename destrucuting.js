const pessoaPassaro = {
  vida: 5000,
  power: 10000,
  nome: "Kaliope",
  idade: 27,
  sexo: "masculino",
  horasTrabalhadas: 9,
};

console.log(`Nome do pasarro é, ${pessoaPassaro.nome}`);

//Está desconstruindo um objeto utilizando as {};
const { nome, idade, horasTrabalhadas, power } = pessoaPassaro;
console.log(
  `- Nome da minha kakatua é ${nome}, ela tem ${idade} anos de idade, 
com um poder de mais de ${power.toLocaleString(2)} mil e ela geralmete trabalha ${horasTrabalhadas}h por dia.`,
);

//Da para ficar bem mais legivel, mas, melhor arrumar ou melhor, refatorar, posteriormente;
//Fazer um função que recebe as caracteristicas de um objeto;
function caracteristicas({ nome, sexo, idade }) {
  //Usamos os {}, pois estamos pegando/chamando um pedaço do objeto;
  console.log("ola", nome);
  if (idade >= 18) {
    console.log("Você pode entrar,", nome);
  } else {
    console.log("Você não é maior de idade,", nome);
  }
  console.log('É um prazer ter um mano,', sexo ,'aqui!');
}
// NÃO SE ESQUEÇA DE CHAMAR A FUNÇÃO JAJCUUUUUU
caracteristicas(pessoaPassaro);
