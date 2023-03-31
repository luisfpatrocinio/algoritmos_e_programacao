import {question} from "readline-sync";

/**
 * 33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).
 */

// Entrada
console.log("Insira um número de 3 dígitos a ser somado com seu inverso.")
const numero = Math.floor(Number(question("Digite o número:")));

// Processamento
const centena   = Math.floor(numero / 100);
const dezena    = Math.floor((numero - centena * 100) / 10);
const unidade   = numero - centena * 100 - dezena * 10;

const inverso = unidade * 100 + dezena * 10 + centena;
const resultado = numero + inverso;

// Saída
console.log("Invertendo o número", numero, "temos", resultado, ".");
