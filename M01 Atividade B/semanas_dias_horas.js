import {question} from "readline-sync";

/**
 * 28. Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.
 */

// Entrada
const horas = Math.floor(Number(question("Número de horas: ")));

// Processamento
const dias = Math.floor(horas / 24);
const semanas = Math.floor(dias / 7);
const diasResto = dias % 7;
const horasResto = horas % 24;

// Saida
console.log(String(horas) + " horas equivalem a", semanas, "semanas, ", diasResto, "dias, e ", horasResto, "horas,");