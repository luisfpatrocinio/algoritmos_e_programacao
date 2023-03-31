import {question} from "readline-sync";

/**
 * 23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
 */

// Entrada
console.log("Vamos converter quilogramas para gramas.");
const kg = Number(question("Valor em KG:"));

// Processamento
const g = kg * 1000;

// Saída
console.log(String(kg) + "kg equivalem a", g, "gramas.")