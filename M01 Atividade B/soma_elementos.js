import {question} from "readline-sync";

/**
 * 35. Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
número = 9534 ; soma = 9+5+3+4 = 21.
 */

// Entrada
const numero = question("Digite um número de 4 dígitos:");

// Processamento
const soma = Number(numero[0]) + Number(numero[1]) + Number(numero[2]) + Number(numero[3]);

// Saida
console.log("A soma dos quatro dígitos desse número corresponde a", soma);