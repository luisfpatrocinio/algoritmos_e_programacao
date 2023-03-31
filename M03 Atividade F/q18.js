/**
 * 18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos.
 */

import {question} from 'readline-sync';

// Código Principal
function main() {
    // Introdução
    cabecalho("Calculadorinha")

    // Entrada
    instrucao("Insira dois valores a serem calculados:");
    const num1 = perguntar_numero("Primeiro número");
    const num2 = perguntar_numero("Segundo número");

    instrucao("Insira a operação desejada:");
    instrucao("1 - Adição, 2 - Subtração, 3 - Multiplicação e 4 - Divisão");
    const operacao = perguntar_numero("Operação")

    // Processamento
    const resultado = calcular(num1, num2, operacao);
    if (resultado === false) {  // Fail Fast
        return
    }

    // Saída
    console.log(`O resultado é: ${resultado}.`);

    // Encerramento
    cabecalho("Fim do Programa");
}

// Cabeçalho do programa
function cabecalho(titulo) {
    console.log("");
    console.log(`### ${titulo} ###`);
}

// Função de método de entrada do usuário
function perguntar_numero(txt) {
    return Number(question(`${txt}: `));
}

// Exibir instrução para o usuário
function instrucao(txt) {
    console.log(`>>> ${txt}`);
}

function calcular(n1, n2, oper){
    if (oper == 1) {
        // Adição
        return n1 + n2
    } else if (oper == 2) {
        // Subtração
        return n1 - n2
    } else if (oper == 3) {
        // Multiplicação
        return n1 * n2
    } else if (oper == 4) {
        // Divisão
        if (n2 != 0) {
            return n1 / n2
        } else {
            console.log("OPERAÇÃO INVÁLIDA: NÃO É POSSÍVEL DIVIDIR POR ZERO");
            return false
        }
    } else {
        console.log("NÚMERO DE OPERAÇÃO INVÁLIDO")
        return false
    }
}

// Executar código principal
main();