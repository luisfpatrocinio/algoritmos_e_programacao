import { obter_numero, mostrar_texto } from "./utils.js";

function main() {
    let numero = obter_numero();

    let valor_fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        valor_fatorial *= i;
    }

    mostrar_texto(valor_fatorial);
}

main();
