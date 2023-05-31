import { obter_numero, mostrar_texto, eh_par } from "./utils.js";

function main() {
    const numero = obter_numero();

    for (var i = 1; i <= numero; i++) {
        if (eh_par(i)) mostrar_texto(i);
    }
}

main();