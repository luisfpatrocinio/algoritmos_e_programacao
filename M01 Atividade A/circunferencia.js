import {question} from "readline-sync";

/**
 * 18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)
 */

// Entrada
console.log("Vamos calcular o comprimento da circunferencia.")
const raio = Number(question("Valor do raio:"));

// Processamento
const comprimento = 2 * Math.PI * raio;

// Saída
console.log("O valor do comprimento da circunferência é de", comprimento);