import {question} from "readline-sync";

/** 
 * 21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).
 */

// Entrada
console.log("Vamos converter graus Fahrenheit para Celsius.")
const fahrenheit = Number(question("Valor em graus Fahrenheit:"))

// Processamento
const celsius = (5 * fahrenheit - 160) / 9;

// Saída
console.log(fahrenheit, "graus Fahrenheit equivalem a", celsius, "graus Celsius.");