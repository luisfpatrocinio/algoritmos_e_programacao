import {question} from "readline-sync";

// Código principal
function main() {
    // Exibir Cabeçalho do Programa
    cabecalho("Calculadora de Água");

    // Entrada: Obter peso do usuário
    instrucao("> Insira seu peso (kg): ");
    const peso = perguntar_numero("Peso: ");

    // Entrada: Obter atividade física
    instrucao("> Insira seu nível de atividade física diária:");
    instrucao("- Digite 1 para atividade física moderada, ou");
    instrucao("- Digite 2 para atividade física intensa.");
    const treino = perguntar_numero("Treino: ");

    // Processamento
    const resultado = Number(calcular_agua_recomendada(peso, treino).toFixed(3));

    // Saída: Exibir resultado
    console.log("A quantidade de água que você deve ingerir, com base na sua atividade física, é de:", resultado, "litros por dia.");
    console.log(`(Cálculo: ${peso}kg x ${(35 + (treino - 1) * 10)}mL = ${resultado}L)`);

    // Encerramento
    cabecalho("Fim do Programa");
}

// Cabeçalho do programa
function cabecalho(titulo) {
    log(`### ${titulo} ###`);
}

// Exibir instrução para o usuário
function instrucao(txt) {
    log(`>>> ${txt}`);
}

// Método de entrada do usuário
function perguntar_numero(txt) {
    return Number(question(txt));
}

// Exibir texto na tela
function log(txt, txt2 = "") {
    return console.log(txt, txt2);
}

// Cálculo da quantidade recomendada a partir do peso e nível de atividade.
function calcular_agua_recomendada(peso, atividade) {
    const quantidade = peso * (35 + (atividade - 1) * 10);
    return quantidade/1000;
}

// Executar código principal
main();