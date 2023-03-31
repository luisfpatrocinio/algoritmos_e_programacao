import {question} from 'readline-sync'

/**
 * 1. Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.
 */

// Entrada
const num1 = Number(question("Primeiro número: "));
const num2 = Number(question("Segundo número: "));
const num3 = Number(question("Terceiro número: "));

// Processamento
let iguais = 0; // Número

// Dois primeiros números são iguais
if (num1 == num2) {
    iguais = 2;
    // Verificando se o terceiro número também é.
    if (num2 == num3) {
        iguais = 3;
    }
// Já que os dois primeiros são diferentes, vamos ver se os restantes são iguais.
} else if (num1 == num3) {
    iguais = 2;
} else if (num2 == num3) {
    iguais = 2;
}

// Saída
if (iguais > 0) {
    console.log(`Há ${iguais} números iguais`)
} else {
    console.log("Não há números iguais.")
}
