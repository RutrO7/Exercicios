// Apenas uma variavel contendo minha idade e nome;
var nome = "Artur";
var idade = 20;
console.log("Meu nome é", nome, "e eu tenho", idade, "anos de idade!");

// Agora vai ser uma arrow function que percore os numero de 1 a 10 em loop;
for (let i = 0; i <= 10; i++) {
  console.log([i]);
} // extremamente facil e eu fiz ficar dificil, melhor maneira de executar um arrow sem quebrar a cabeça;
let test1 = 1;
if (test1) {
  test1 <= 1;
  console.log("Voce pode entrar", test1);
} else {
  console.log("Você não pode");
}

var test = 10;
console.log("Numero é:", test);

//Uma função com if else basica que compara os numeros e retorna no console

function conta1(i = 0) {
  if (i <= 10 && i == 0) {
    console.log("Pode entrar");
  } else {
    console.log("Erro");
  }
}
conta1();

//Super simples essa sintax, para percorrer um numero até a parada determinada
function loop(i = 0) {
  while (i <= 10) {
    console.log(`-Seu numero atual é ${i}`);
    i++;
  }
}
loop();
