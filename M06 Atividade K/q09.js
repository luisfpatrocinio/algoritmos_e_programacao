/**
 9. Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos.
 */

import { obter_numero, mostrar_texto, eh_par } from "./utils.js";

function main() {
    const limiteSuperior = obter_numero("Limite Superior: ");
    const limiteInferior = obter_numero("Limite Inferior: ");

    for (let i = limiteInferior; i <= limiteSuperior; i++) {
        if (eh_par(i)) {
            mostrar_texto(i);
        }
    }
}

main();