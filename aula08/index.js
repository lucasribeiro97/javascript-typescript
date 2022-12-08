/*
Lucas Ribeiro Cunha tem 25 anos, 85 kg
tem 1.77 de altura e seu IMC é de 25.9259259295925924
*/

const nome = 'Lucas';
const sobrenome = 'Ribeiro Cunha';
const idade = 25;
const peso = 85;
const alturaEmM = 1.77;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

