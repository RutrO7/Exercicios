const listaDeFrutas = ["banana", "manga", "perá"];
console.log(listaDeFrutas);

listaDeFrutas.push("Pitaya", "Laranja");

const listaDeMaisFrutas = [...listaDeFrutas];
console.log(listaDeMaisFrutas);

console.log(`As frutas que eu gosto são a: ${listaDeFrutas.splice(3)}`);

const soma = [...listaDeFrutas, ...listaDeMaisFrutas];
console.log(
  `Minha lista antes de passar no mercado: ${listaDeFrutas}.`,
  "\n",
  `Lista atualizada, depois do mercado: ${listaDeMaisFrutas}`,
);
