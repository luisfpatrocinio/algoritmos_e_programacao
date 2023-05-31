/**
 * 11. Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.
 */

import { obter_numero, eh_primo, mostrar_texto } from "./utils.js";

function main() {
    const limiteSuperior = obter_numero("Limite Superior: ");
    const limiteInferior = obter_numero("Limite Inferior: ");

    for (let i = limiteInferior; i <= limiteSuperior; i++) {
        if (eh_primo(i)) {
            mostrar_texto(i);
        }
    }
}

main();