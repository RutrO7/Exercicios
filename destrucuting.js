const pessoaPassaro = {
  vida: 5000,
  power: 10000,
  nome: "Kaliope",
  idade: 27,
  sexo: "Masculino",
  horasTrabalhadas: 9,

  
};


console.log(`Nome do pasarro é, ${pessoaPassaro.nome}`);

const { nome, idade, horasTrabalhadas, power } = pessoaPassaro;
console.log(
  `- Nome da minha kakatua é ${nome}, ela tem ${idade} anos de idade, 
com um poder de mais de ${power.toLocaleString(2)} mil e ela geralmete trabalha ${horasTrabalhadas}h por dia.`,
);
