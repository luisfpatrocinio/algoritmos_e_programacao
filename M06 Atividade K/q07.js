import { mostrar_texto, obter_numero } from "./utils.js"

function main() {
    let numero = obter_numero();
    let soma = 0;
    
    for (let i = 1; i <= numero; i++) {
        soma += i;
    }

    mostrar_texto(`A soma dos números de 1 até ${numero} é: ${soma}.`);
}

main()