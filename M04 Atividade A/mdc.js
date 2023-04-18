import { question } from "readline-sync";

/**
 * 3. Leia 2 (dois) números, calcule e escreva
 * o mdc (máximo divisor comum) entre os números lidos.
 */

function main() {
    // Entrada
    const numero1 = Number(question("Número 1: "));
    const numero2 = Number(question("Número 2: "));

    // Processamento
    const mdc = calcular_mdc(numero1, numero2);

    // Saída:
    console.log(`O MDC de ${numero1} entre ${numero2} é: ${mdc}`);
}


function calcular_mdc(numero1, numero2) {
    let candidato = numero1;
    while (candidato > 0) {
        if (eh_divisor(candidato, numero1) && eh_divisor(candidato, numero2)) {
            return candidato
        }
        candidato--;
    }
}


function eh_divisor(numero1, numero2) {
    return numero2 % numero1 === 0
}

main();