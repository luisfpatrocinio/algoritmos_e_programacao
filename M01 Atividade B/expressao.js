import {question} from "readline-sync";

/**
 * Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
 *      D = (R + S) / 2 , onde:
 *      R = (A + B) ao quadrado
 *      S = (B + C) ao quadrado
 */

// Entrada
const A = Number(question("Valor de A:"));
const B = Number(question("Valor de B:"));
const C = Number(question("Valor de C:"));

// Processamento
const R = Math.pow(A + B, 2);
const S = Math.pow(B + C, 2);
const D = (R + S) / 2;

// Saida
console.log("O valor de D é", D);