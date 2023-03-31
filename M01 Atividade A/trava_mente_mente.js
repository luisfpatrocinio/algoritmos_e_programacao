import {question} from "readline-sync";

/**
 * 8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos
 */

// Entrada
const num1 = Number(question("Primeiro número: "));
const num2 = Number(question("Segundo número: "));

// Processamento
const soma = num1 + num2;
const diff = Math.abs(num1 - num2);
const divisao = soma / diff;

// Saída
console.log("A divisão da soma pela subtração dos números lidos é:", divisao);
console.log("(", soma, "dividido por", diff, "é igual a", divisao, ")");