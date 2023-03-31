import {question} from "readline-sync";

/**
 * 7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
 */

// Entrada
console.log("Digite três números.");
const num1 = Number(question("Primeiro número: "));
const num2 = Number(question("Segundo número: "));
const num3 = Number(question("Terceiro número: "));

// Processamento
const soma_primeiros = num1 + num2;
const diff_ultimos = Math.abs(num2 - num3);

// Saída
console.log("A soma entre os dois primeiros é", soma_primeiros);
console.log("A diferença entre os dois últimos é", diff_ultimos);