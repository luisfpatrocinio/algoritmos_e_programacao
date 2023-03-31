import {question} from "readline-sync";

/**
 * 24. Leia um valor em m, calcule e escreva o equivalente em cm.
 */

// Entrada
console.log("Insira um valor em metros para obter o equivalente em cm.")
const metros = Number(question("Valor em metros: "))

// Processamento
const centimetros = metros * 100;

// Saida
console.log(`${metros} metros equivale a`, centimetros, "centímetros.");