import {question} from "readline-sync";

/**
 * 31. Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
 * 
 * Conversão de binário para decimal
    Cada posição tem um peso de uma potência de 2 (base do sistema binário). 
    Sendo assim, para se converter um número de binário para decimal, deve-se 
    multiplicar cada bit pela potência de sua posição e somar os resultados.
 */

// Entrada
console.log("Insira um número binário de quatro dígitos para retornar o equivalente na base decimal.")
const numero = question("Numero binário:");

// Processamento
const unidade = numero % 10;
const dezena = ((numero % 100) - (numero % 10)) / 10;
const centena = ((numero % 1000) - (numero % 100)) / 100;
const milhar = ((numero % 10000) - (numero % 1000)) / 1000;

// Saída:
console.log(`M: ${milhar} - C: ${centena} - D: ${dezena} - U: ${unidade}`);
const decimal = milhar * 8 + centena * 4 + dezena * 2 + unidade;

// Método via string
// const decimal = numero[0] * 8 + numero[1] * 4 + numero[2] * 2 + numero[3] * 1;

// Saida
console.log("O numero binário " + String(numero) + " equivale:", decimal);