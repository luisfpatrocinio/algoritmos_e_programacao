import {question} from "readline-sync";

/**
 * 9. Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
 */

// Entrada
const num1 = Number(question("Primeiro número: "));
const num2 = Number(question("Segundo número: "));

// Processamento
const inseridos = String(num1) + ", " + String(num2);
const resultado = String(num2) + ", " + String(num1);

// Saída
console.log("Valores inseridos: ", inseridos)
console.log("Valores invertidos: ", resultado);