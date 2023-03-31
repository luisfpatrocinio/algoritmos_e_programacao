import {question} from "readline-sync";

/**
 * O Índice de Adiposidade Corporal (IAC) é um método utilizado para avaliar a 
 * composição corporal de uma pessoa com base em suas medidas corporais.
 * >> A fórmula do IAC é: [Quadril/(altura x √altura)] – 18
 * O resultado obtido é um valor que indica a proporção de gordura corporal em relação ao tamanho da pessoa.
 */

function main() {
    // Apresentação
    cabecalho("Cálculo do Índice de Adiposidade Corporal");

    // Entrada: obter da e dos
    instrucao("Insira a circuferência do quadril, em cm:");
    const quadril = perguntar_numero("Quadril");
    instrucao("Insira sua altura, em cm:");
    const altura = perguntar_numero("Altura");

    // Processamento: calcular IAC
    const iac = calcular_iac(quadril, altura);

    // Saída: Exibir resultados
    console.log("O seu IAC é de", iac);
}

// Cabeçalho do programa
function cabecalho(titulo) {
    console.log("");
    console.log(`### ${titulo} ###`);
    console.log("");
}

// Exibir instrução para o usuário
function instrucao(txt) {
    console.log(`>>> ${txt}`);
}

// Método de entrada do usuário
function perguntar_numero(txt) {
    return Number(question(`${txt}: `));
}

// Calcular IAC
function calcular_iac(quadril, altura) {
    const altura_metros = altura / 100;
    const iac = (quadril / (altura_metros * Math.sqrt(altura_metros))) - 18;
    return Number(iac.toFixed(2)); 
}

function calcular_quadril_minimo(iac, altura) {
    // a faixa normal é 9 e 20.9
    const altura_metros = altura / 100;
    const quadril_minimo = altura**2 * 
}

// Executar código principal
main();