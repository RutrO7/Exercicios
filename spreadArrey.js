const listaDeFrutas = ["banana", "manga", "perá"];
console.log(listaDeFrutas);

//Apenas usando mais o push para add uma coisa a mais na lista;
listaDeFrutas.push("Pitaya", "Laranja");

//Eu chamei novamente com outro nome, mas contendo as caracteriscitas da lista depois do push;
const listaDeMaisFrutas = [...listaDeFrutas];
console.log(listaDeMaisFrutas);

// forma otimizada, porém, está errada na forma de se pegar um determidado parametro, de um arrey;
console.log(`As frutas que eu gosto são a: ${listaDeFrutas.splice(3)}`);

const soma = [...listaDeFrutas, ...listaDeMaisFrutas];
console.log(
  `- Minha lista antes de passar no mercado: ${listaDeFrutas}.`,
  "\n",
  `- Lista atualizada depois do mercado: ${listaDeMaisFrutas}`,
);

// Da forma certa para poder pegar um pedaço do arrey e dar segmento na palavra;
const [primeira, segunda, terceira, quarta, quinta] = listaDeMaisFrutas;
console.log("Minhas frutas favoritas são a:", quarta, "e a", quinta);

// Essa é a diferença e a necessidade de usar o ${} em vez de ',' evita muitass ,,,,;
console.log(`Minhas frutas favoritas são a: ${quarta} e a ${quinta}`);
