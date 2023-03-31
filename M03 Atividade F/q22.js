/**
 * 22. Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
seguinte.
 */

import {question} from 'readline-sync';

// Código Principal
function main() {
    // Introdução
    cabecalho("Calculadora de Duração de Jogo")

    // Entrada
    instrucao("Insira a hora de início e a hora de fim do jogo:");
    instrucao("(Inserir primeiro a hora e depois os minutos)");
    instrucao("Horário do Jogo 1:");
    const hora1 = perguntar_numero("Hora do jogo 1:");
    const min1  = perguntar_numero("Minutos do jogo 1:");
    const hora2 = perguntar_numero("Hora do jogo 2:");
    const min2  = perguntar_numero("Minutos do jogo 2:");

    // Processamento
    // Converter horas para minutos
    const total_minutos1 = converter_horario_para_minutos(hora1, min1);
    const total_minutos2 = converter_horario_para_minutos(hora2, min2);

    const diferenca = total_minutos2 - total_minutos1;

    let diferenca_horas_str = "";
    if (diferenca > 0) {
        diferenca_horas_str = converter_minutos_para_horas(diferenca);
    } else if (diferenca < 0) {
        // TODO: Falta desenvolver
    }
    

    // Saída
    console.log(`A quantidade é de ${diferenca_horas_str}h.`);

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

function converter_horario_para_minutos(horas, minutos) {
    return horas * 60 + minutos;
}

function converter_minutos_para_horas(min, oper) {
    const horas = Math.floor(min / 60);
    const minutos = min % 60;
    return `${horas}:${minutos}`
}

// Executar código principal
main();