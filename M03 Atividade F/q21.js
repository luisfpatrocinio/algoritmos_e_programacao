/**
 * 21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
contrario, é arredondado para o inteiro imediatamente inferior.
 */

import {question} from 'readline-sync';

// Código Principal
function main() {
    // Introdução
    cabecalho("Arredondador")

    // Entrada
    instrucao("Insira um número a ser arredondado");
    const numero = perguntar_numero("Número");

    // Processamento
    const numero_arredondado = arredondar_numero(numero);

    // Saída
    console.log(`O número ${numero} pode ser arredondado para ${numero_arredondado}.`);

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

// Função para obter parte fracionaria
function obter_parte_fracionaria(numero) {
    return numero % 1
}

// Função para arredondar
function arredondar_numero(numero) {
    const parte_fracionaria = obter_parte_fracionaria(numero);
    if (parte_fracionaria >= 0.50) {
        return numero - parte_fracionaria + 1;
    } else {
        return numero - parte_fracionaria;
    }
}

// Executar código principal
main();