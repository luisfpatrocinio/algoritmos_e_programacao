import {question} from "readline-sync";

/**
 * 34. Leia 3 números, calcule e escreva a média dos números.
 */

// Entrada
console.log("Vamos calcular a média de três números:");
const num1 = Number(question("Número 1:"));
const num2 = Number(question("Número 2:"));
const num3 = Number(question("Número 3:"));

// Processamento
const media = (num1 + num2 + num3) / 3;

// Saida
console.log("A média dos três números é:", media);