import {question} from "readline-sync";

/**
 * 27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos 
 *     segundos ele corresponde.
 */

// Entrada
const segundos = Number(question("Quantos segundos:"))

// Processamento
const minutos       = Math.floor(segundos / 60);
const horas         = Math.floor(minutos / 60);
const minutosResto  = Math.floor((segundos - horas * 3600) / 60);
const segundosResto = segundos - horas * 3600 - minutosResto * 60;

// Saida
console.log(String(segundos) + " equivalem a ", horas, "horas, ", minutosResto, "minutos, e ", segundosResto, "segundos");