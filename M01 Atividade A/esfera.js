import {question} from "readline-sync";

/**
 * 19. Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)
 */

// Entrada
console.log("Vamos calcular o volume da esfera.")
const raio = Number(question("Valor do raio:"));

// Processamento
const volume = (4 * Math.PI * Math.pow(raio, 3)) / 3;

// Saída
console.log("O valor do volume da esfera é de", volume);