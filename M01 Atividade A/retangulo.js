import {question} from "readline-sync";

/**
 * 17. Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)
 */

// Entrada
console.log("Vamos calcular a área do retângulo.")
const base = Number(question("Valor da base:"));
const altura = Number(question("Valor da altura:"));

// Processamento
const area = base * altura;

// Saída
console.log("O valor da área do retângulo de base " + String(base) + " e altura " + String(altura) + "é de:", area);