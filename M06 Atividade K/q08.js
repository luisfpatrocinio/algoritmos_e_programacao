/**
 * 8. Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.
 */

import { obter_numero, eh_multiplo, mostrar_texto } from "./utils.js";

function main() {
    const numero = obter_numero("Valor de N: ");
    const limiteSuperior = obter_numero("Limite Superior: ");
    const limiteInferior = obter_numero("Limite Inferior: ");

    for (let i = limiteInferior; i <= limiteSuperior; i++) {
        if (eh_multiplo(i, numero)) {
            mostrar_texto(i);
        }
    }
}

main();