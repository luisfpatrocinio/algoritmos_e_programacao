import {question} from "readline-sync";

/**
 * 29. Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
 */

// Entrada
console.log("Informe a quantidade de meses.");
const meses = Number(question("Meses: "));

// Processamento
const anos = Math.floor(meses / 12);
const meses_resto = meses - anos * 12;


// Saida
console.log("Esse valor corresponde a " + String(anos) + " anos e " + String(meses_resto) + "meses.");