import {question} from "readline-sync";

/**
 * 15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
 */

// Entrada
console.log("Vamos calcular a área do triângulo.");
const base = Number(question("Valor da base:"));
const altura = Number(question("Valor da altura:"));

// Processamento
const area = base * altura / 2;

// Saída
console.log("O valor da área do triângulo é de: ", area);