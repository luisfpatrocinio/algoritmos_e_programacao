import { question } from "readline-sync";
/**
 * 2 - Leia um valor em horas e um valor em minutos, 
 * calcule e escreva o equivalente em minutos.
 */

// Entrada
console.log("Insira um valor em horas.");
const hours = Number(question('Horas: '));
console.log("Insira um valor em minutos.");
const minutes = Number(question('Minutos: '));

// Processamento
const total = hours * 60 + minutes;

// Saída
console.log("Total:", total, "minutos.");