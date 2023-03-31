import {question} from "readline-sync";

/**
 * 4. Leia o valor do dólar e um valor em dólar, 
 * calcule e escreva o equivalente em real (R$)
 */

// Entrada
const cotacao = Number(question("Cotacao do dolar: "));
console.log("Insira o valor em dolar para ser convertido em real.")
console.log("A cotacao do dolar esta em", cotacao, ".")
const dolar = Number(question("Valor em dolar:"));

// Processamento
const real = dolar * cotacao;

// Saída
console.log(dolar, "dolares equivale a R$", real, ".")