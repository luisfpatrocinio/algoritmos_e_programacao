import {question} from "readline-sync";

/**
 * 5. Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).
 */

// Entrada
const numero = Number(question("Número: "));

// Processamento
const centena   = Math.floor(numero / 100);
const dezena    = Math.floor((numero - centena * 100) / 10);
const unidade   = numero - centena * 100 - dezena * 10;
const total     = centena + dezena + unidade;

// Saída
console.log("A soma de", centena, "+", dezena, "+", unidade, "é:", total);