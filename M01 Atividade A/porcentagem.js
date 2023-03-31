import {question} from "readline-sync";

/**
 * 13. Leia um valor em real (R$), calcule e escreva 70% deste valor. 
 */

// Entrada
const valor = Number(question("Informe o valor: ")).toFixed(2);

// Processamento
let resultado = valor * 0.70;
resultado = resultado.toFixed(2);

// Saída
console.log("70% de R$", valor, "equivale a: R$", resultado);