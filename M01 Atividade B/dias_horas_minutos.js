import {question} from "readline-sync";

/**
 * 30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
corresponde.
 */

// Entrada
const minutos = Number(question("Número de minutos:"));

// Processamento
const horas = minutos / 60;
const dias = horas / 24;

// Saida
console.log(String(minutos) + " minutos correspondem a " + String(horas) + " horas, ou " + String(dias) + " dias.");