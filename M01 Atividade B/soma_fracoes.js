import {question} from "readline-sync";

/**
 * 38. Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
resultado em forma de fração.
 */

// Entrada
const num1 = Number(question("Numerador 1: "));
const den1 = Number(question("Denominador 1: "));
const num2 = Number(question("Numerador 2: "));
const den2 = Number(question("Denominador 2: "));

// Processamento
const denominador = den1 * den2;
const numerador = num1 * den2 + num2 * den1;

// Saida
console.log(`A soma das frações ${num1}/${den1} e ${num2}/${den2} é ${numerador}/${denominador}.`);
