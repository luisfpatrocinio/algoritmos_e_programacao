import {question} from "readline-sync";

/**
 * 36. Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias
 */

// Entrada
console.log("Expresse a idade em anos, meses e dias:")
const anos  = Number(question("Anos:"));
const meses = Number(question("Meses:"));
const dias  = Number(question("Dias:"));

// Processamento
const diasTotal = dias + meses * 30 + anos * 360;

// Saida
console.log("A idade total em dias é de " + diasTotal);
console.log("Vale observar que para o cálculo, foi considerado que o mês tem 30 dias, e o ano, 360.");