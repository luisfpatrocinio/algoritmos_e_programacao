import {question} from "readline-sync";

/**
 * 25. Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
 */

// Entrada
const metros = Math.floor(Number(question("Número de metros:")));

// Processamento
const km = Math.floor(metros / 1000);
const resto_metros = metros % 1000;

// Saida
console.log(String(metros) + " corresponde a " + String(km) + "km e " + String(resto_metros) + "m.");