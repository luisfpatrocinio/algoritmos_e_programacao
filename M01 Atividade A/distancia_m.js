import {question} from "readline-sync";

/** 
 * 22. Leia um valor em km, calcule e escreva o equivalente em m.
 */

// Entrada
console.log("Vamos converter quilômetros para metros.")
const km = Number(question("Distância em KM:"))

// Processamento
const m = km * 1000;

// Saída
console.log(String(km) + "km equivalem a", String(m) + " metros");