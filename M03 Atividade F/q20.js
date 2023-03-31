/**
 * 20. Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
quarto) em que o ângulo se localiza.
 */

import {question} from 'readline-sync';

// Código Principal
function main() {
    // Introdução
    cabecalho("Identificador de Quadrante")

    // Entrada
    instrucao("Insira um ângulo, para sabermos seu quadrante.");
    const angulo = perguntar_numero("Ângulo");

    // Processamento
    const angulo_ajustado = ajustar_angulo(angulo);
    if (angulo != angulo_ajustado) {
        console.log(`O ângulo ${angulo} equivale a ${angulo_ajustado}.`);
    }

    const quadrante = identificar_quadrante(angulo_ajustado);

    // Saída
    console.log(`O ângulo ${angulo} pertence ao ${quadrante} quadrante.`);

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

// Função para tornar o ângulo dentro de 0 a 360
function ajustar_angulo(angulo) {
    return (angulo % 360 + 360) % 360
}

// Identificador de Quadrante
function identificar_quadrante(angulo) {
    let quadrante = Math.floor(angulo/90) + 1
    if (quadrante == 1) return "primeiro"
    else if (quadrante == 2) return "segundo"
    else if (quadrante == 3) return "terceiro"
    else if (quadrante == 4) return "quarto"
}

// Executar código principal
main();