/**
 * Leia N, calcule e escreva o valor de S.
17. S = 1/1 + 1/2 + 1/3 + ... + 1/N
 */

import { mostrar_texto, obter_numero } from "../M06 Atividade K/utils.js";

function main() {
    // Entrada:
    const numero = obter_numero("Valor de N: ");

    // Processamento:
    const resultado = calcular_valor_de_saida(numero);

    // Saída:
    mostrar_texto(`O valor da saída é de ${resultado}`);
}

function calcular_valor_de_saida(num) {
    let acumulado = 0;
    for (let i = 1; i <= num; i++) {
        acumulado += 1 / i
    }
    return acumulado
}

main();