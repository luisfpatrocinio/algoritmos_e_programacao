import {question} from "readline-sync";

/**
 * 14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada
 */

// Entrada
console.log("Insira três notas.");
const nota1 = Number(question("Primeira nota: "));
const nota2 = Number(question("Segunda nota: "));
const nota3 = Number(question("Terceira nota: "));
console.log("Insira seus respectivos pesos.");
const peso1 = Number(question("Peso da primeira nota: "));
const peso2 = Number(question("Peso da segunda nota: "));
const peso3 = Number(question("Peso da terceira nota: "));

// Processamento
const media_ponderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

// Saída
console.log("A média ponderada entre as três notas, de acordo com os pesos atribuídos é de", media_ponderada);