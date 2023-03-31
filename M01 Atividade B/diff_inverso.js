import {question} from "readline-sync";

/**
 * 32. Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
 */

// Entrada
const numero = Number(question("Insira o número:"));

// Processamento
const centena   = Math.floor(numero / 100);
const dezena    = Math.floor((numero - centena * 100) / 10);
const unidade   = numero - centena * 100 - dezena * 10;

const inverso = unidade * 100 + dezena * 10 + centena;
const resultado = Math.abs(numero - inverso);

// Saida
console.log("A diferença entre o número e seu inverso é", resultado, ".");