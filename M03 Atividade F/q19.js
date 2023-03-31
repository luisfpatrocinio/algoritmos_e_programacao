/**
 * 19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
(IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso
(IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).
 */

import {question} from 'readline-sync';

// Código Principal
function main() {
    // Introdução
    cabecalho("Calculadora de IMC")

    // Entrada
    instrucao("Insira sua altura (m) e peso (kg)");
    const altura = perguntar_numero("Altura");
    if (altura <= 0) {  // Fail Fast
        console.log("ERRO: Altura inválida!");
        return
    }

    const peso = perguntar_numero("Peso");
    if (peso <= 0) {    // Fail Fast
        console.log("ERRO: Peso inválido!");
        return
    } 

    // Processamento
    const imc = calcular_imc(altura, peso);
    const tipo = obter_categoria(imc);

    // Saída
    console.log(`Seu IMC é de ${imc.toFixed(2)}, o que equivale a categoria ${tipo}.`);

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

// Função para calcular IMC
function calcular_imc(altura, peso) {
    return peso / altura ** 2
}

// Obter categoria do IMC
function obter_categoria(imc) {
    if (imc < 25) {
        return "PESO NORMAL"
    } else if (imc < 30) {
        return "OBESO"
    } else {
        return "OBESIDADE MÓRBIDA"
    }
}


// Executar código principal
main();