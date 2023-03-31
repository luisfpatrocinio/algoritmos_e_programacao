import {question} from "readline-sync";

/**
 * 37. Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.
 */

// Entrada
const dias = Number(question("Idade em dias:"));

// Processamento
const meses = Math.floor(dias / 30);
const anos = Math.floor(meses / 12);
const meses_resto = meses % 12;
const dias_resto = dias % 30;

// Saida
console.log("A idade é: " + String(anos) + " anos, " + String(meses_resto) + " meses e " + String(dias_resto) + " dias.");