import {question} from "readline-sync";

/**
 * 3. Leia um valor em minutos, calcule e escreva o 
 * equivalente em horas e minutos.
 */

// Entrada
console.log("Informe a quantidade de minutos que será convertida para horas.")
const minutes = Number(question('Minutos: '));

// Processamento
const hours = Math.floor(minutes / 60);
const min = minutes % 60;

// Saída
console.log(minutes, "minutos equivalem a ", hours, "horas.");