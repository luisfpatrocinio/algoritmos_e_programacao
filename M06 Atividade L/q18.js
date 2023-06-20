/**
 * Leia N, calcule e escreva o valor de S.
18. S = 1/N + 2/(N-1) + 3/(N-2) + ... + N/1
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
        acumulado += num / (num - (i-1));
    }
    return acumulado
}

main();