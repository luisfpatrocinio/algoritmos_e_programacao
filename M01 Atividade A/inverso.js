import {question} from "readline-sync";

/**
 * 11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)
 */

// Entrada
console.log("Insira um número de 3 dígitos a ser invertido.")
const numero = Math.floor(Number(question("Digite o número:")));

// Processamento
const centena   = Math.floor(numero / 100);
const dezena    = Math.floor((numero - centena * 100) / 10);
const unidade   = numero - centena * 100 - dezena * 10;

const resultado = unidade * 100 + dezena * 10 + centena;

// Saída
console.log("Invertendo o número", numero, "temos", resultado, ".");
