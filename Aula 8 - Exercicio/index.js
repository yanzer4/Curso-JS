/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 m de altura e seu IMC é de ....
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
var indiceMassaCorporal  // peso / (altura * altura)
var anoNascimento

indiceMassaCorporal = peso / (alturaEmM * alturaEmM)
anoNascimento = 2025 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} KGs e tem ${alturaEmM} M de altura.`)
console.log(`Seu IMC é de ${indiceMassaCorporal}.`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)
