/**
 * 17. Leia valores inteiros em duas variáveis distintas e 
 * > se o resto da divisão da primeira pela segunda for 1, escreva a soma dessas variáveis mais o resto da divisão; 
 * > se for 2 escreva se o primeiro e o segundo valor são pares ou ímpares; 
 * > se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; 
 * > se for igual a 4 divida a soma dos números lidos pelo segundo, se este for diferente de zero. 
 * > Em qualquer outra situação escreva o quadrado dos números lidos.
 */

import {question} from 'readline-sync';

// Código Principal
function main() {
    // Introdução
    cabecalho("Gerenciador de Restos")

    // Entrada
    const num1 = Math.floor(perguntar_numero("Primeiro número"));
    const num2 = Math.floor(perguntar_numero("Segundo número"));

    // Processamento
    const resto = obter_resto_da_divisao(num1, num2);
    console.log(`O resto da divisão é igual a ${resto}.`);
    gerenciar_numeros(num1, num2);

    // Encerramento
    cabecalho("Fim do Programa");
}

// Fazer os cálculos solicitados
function gerenciar_numeros(num1, num2) {
    if (resto == 1) {
        console.log("A soma das variáveis + o resto, é:");
        console.log(`${num1} + ${num2} + ${resto} = ${num1 + num2 + resto}`);
    } else if (resto == 2) {
        const par1 = par_ou_impar(num1);
        const par2 = par_ou_impar(num2);
        if (par1 === par2) {
            console.log(`O número ${num1} é ${par1}, e ${num2} também.`);
        } else {
            console.log(`O número ${num1} é ${par1}, e ${num2} é ${par2}.`);
        }
    } else if (resto == 3) {
        console.log("Multiplicando a soma dos valores lidos pelo primeiro:")
        console.log(`${num1} x (${num1} + ${num2}) = ${num1 * (num1 + num2)}`);
    } else if (resto == 4) {
        console.log("Dividindo a soma dos números lidos pelo segundo:")
        if (num2 != 0) {
            console.log(`(${num1} + ${num2}) / ${num2} = ${(num1 + num2) / num2}`);
        } else {
            console.log("O segundo número é zero, então não é possível fazer a divisão.")
        }
    } else {
        console.log("O quadrado dos números lidos é:");
        console.log(`${num1 ** 2}, e ${num2 ** 2}`);
    }
}

// Cabeçalho do programa
function cabecalho(titulo) {
    console.log("");
    console.log(`### ${titulo} ###`);
}
// Checar se o número é par
function checar_par(num) {
    return num % 2 == 0
}

// Retorna se o número é "par" ou "ímpar"
function par_ou_impar(num) {
    if (checar_par(num)) {
        return "par"
    } else {
        return "impar"
    }
}

// Obter resto da divisão
function obter_resto_da_divisao(num1, num2) {
    return num1 % num2;
}

// Função de método de entrada do usuário
function perguntar_numero(txt) {
    return Number(question(`${txt}: `));
}

// Executar código principal
main();