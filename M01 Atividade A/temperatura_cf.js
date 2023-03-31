import {question} from "readline-sync";

/**
 * 20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)
 */

// Entrada
console.log("Vamos converter a temperatura em graus Celsius para Fahrenheit.")
const celsius = Number(question("Valor em graus Celsius:"));

// Processamento
const fahrenheit = (9 * celsius + 160) / 5;

// Saída
console.log(celsius, "graus Celsius equivalem a", fahrenheit, "graus Fahrenheit.");