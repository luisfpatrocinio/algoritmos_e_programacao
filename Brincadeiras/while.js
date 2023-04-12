import {question} from 'readline-sync'

/**
 * Escrever os X primeiros multiplos de Y
 */

function main() {
    const numero = Number(question("Qual número você quer os múltiplos?"));
    const quantos_multiplos = Number(question("Quantos múltiplos?"));

    let contador = 0;
    while (contador < quantos_multiplos) {
        console.log(`${numero} x ${contador + 1} = ${numero * (contador + 1)}`);
        contador++;
    }

    //console.log("Fim do programa.")
    //console.log("Sua linguagem não é especial.")
    //console.log("Formatar texto > comando do visual studio code.")
}

main()