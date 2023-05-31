/**
 * Leia N e escreva todos os números inteiros de 1 a N.
 */

import { obter_numero, mostrar_texto } from "./utils.js";

function main() {
    const numero = obter_numero();

    for (let i = 1; i <= numero; i++) {
        mostrar_texto(i);
    }
}

main();
