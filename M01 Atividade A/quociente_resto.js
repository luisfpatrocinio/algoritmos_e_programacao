import {question} from "readline-sync";

/**
 * 10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º
 */

// Entrada
console.log("Insira dois números inteiros para obtermos o quociente e o resto da divisão entre eles.");
const num1 = Math.floor(Number(question("Primeiro número:" )));
const num2 = Math.floor(Number(question("Segundo número:" )));

// Processamento
const quociente = Math.floor(num1 / num2);
const resto = num1 % num2;

// Saída
console.log("Dividindo o primeiro pelo segundo.");
console.log("O quociente é de:", quociente);
console.log("O resto é de:", resto);
