const agora = new Date();
console.log(agora);
// Todos os .Get, tem que receber seus (), caso contrario não vai ser executado da madeira certa;
console.log("Exibindo a hora em milesegundos", agora.getTime());
console.log("Exibindo a  hora:", agora.getHours());
console.log("Exibindo os minutos:", agora.getMinutes());
console.log("Exibindo os segundos:", agora.getSeconds());
console.log("Exibindo a data de hj:", agora.getDate());
console.log("Exibindo o mês de hj:", agora.getUTCMonth());
//O getUTC, é praticamente a mesma coisa que o getDate
console.log("Exibindo a data em UTC:", agora.getUTCDate());
//console.log('Exibindo o dia de hj:', agora.getDay());
console.log("Exibindo o ano de hj:", agora.getFullYear());

const nascimento = new Date("2006-04-04:3:45.000Z");
console.log(nascimento);
console.log(
  "Atualizando meu nascimento com o padrão pt-BR",
  nascimento.toLocaleDateString("pt-BR"),
);
console.log(
  "Atualizando meu nascimento com o padrão in-US",
  nascimento.toLocaleDateString("in-US"),
);
// Já esse seria para aparecer tanto data quanto horario, porém, meu horário está errado.
console.log(
  "Atualizando meu nascimento com o padrão pt-BR",
  nascimento.toLocaleString("pt-BR"),
);
