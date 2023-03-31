import {question} from "readline-sync";

/**
 * 26. Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde. 
 */

// Entrada
const dias = Math.floor(Number(question("Número de dias: ")));

// Processamento
const semanas = Math.floor(dias / 7);
const diasResto = dias % 7;

// Saida
console.log(dias, "dias correspondem a", semanas, "semanas e", diasResto, "dias.");