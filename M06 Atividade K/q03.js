import { mostrar_texto, obter_numero } from "./utils.js";

function main() {
    const inicial = obter_numero("Valor A0: ");
    const limite = obter_numero("Limite: ");
    const razao = obter_numero("Razão: ");

    for (let i = inicial; i < limite; i += razao) {
        mostrar_texto(i);
    }
}

main();