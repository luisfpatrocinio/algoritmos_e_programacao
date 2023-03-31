import {question} from "readline-sync";

/**
 * 16. Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)
 */

// Entrada
console.log("Vamos calcular a área do quadrado.")
const lado = Number(question("Valor do lado do quadrado: "));

// Processamento
const area = Math.pow(lado, 2);

// Saída
console.log("A área do quadrado de lado " + String(lado) + " é de", area);