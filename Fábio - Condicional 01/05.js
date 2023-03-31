import {question} from 'readline-sync'

/**
 * 05. Leia 3 (três) números e escreva-os em ordem crescente.
 */

function main() {
    // Entrada: Obter números
    const numA = perguntar_numero("Número A");
    const numB = perguntar_numero("Número B");
    const numC = perguntar_numero("Número C");

    let menor, meio, maior

    if (eh_o_menor(numA, numB, numC)) {
        menor = numA;
        if (numB < numC) {
            meio = numB;
            maior = numC;
        } else {
            meio = numC;
            maior = numB;
        }
    } else if (eh_o_menor(numB, numA, numC)) {
        menor = numB;
        if (numA < numC) {
            meio = numA;
            maior = numC;
        } else {
            meio = numC;
            maior = numA;
        }
    } else {
        menor = numC;
        if (numA < numB) {
            meio = numA;
            maior = numB;
        } else {
            meio = numB;
            maior = numA;
        }
    }
    console.log("sequencia:", menor, meio, maior);
}

// Método de entrada do usuário
function perguntar_numero(txt) {
    return Number(question(`${txt}: `));
}

function eh_o_menor(num, num1, num2) {
    return num <= num1 && num <= num2
}

main();