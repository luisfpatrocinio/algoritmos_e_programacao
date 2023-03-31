import {question} from "readline-sync";

/**
 * Crie um programa que receba a idade de uma pessoa e calcule a sua frequência cardíaca máxima, 
 * que é dada pela fórmula 220 menos a idade. O programa deve então calcular a faixa de batimentos 
 * cardíacos ideais para atividades físicas moderadas e intensas, que correspondem a 50-70% e 70-85% 
 * da frequência cardíaca máxima, respectivamente. Os resultados devem ser exibidos na tela. 
 */

// Código Principal
function main() {
    // Exibir Cabeçalho do Programa
    cabecalho("Calculadora de Batimentos");

    // Entrada: Obter idade e frequência cardíaca máxima
    instrucao("> Insira a sua idade:");
    const idade = perguntar_numero("Idade");
    const frequencia = obter_freq_maxima(idade);
    console.log("A sua frequência cardíaca máxima é: ", frequencia, "BPM");

    // Entrada: Obter atividade física
    console.log("");
    instrucao("> Insira seu nível de atividade física diária:");
    instrucao("- Digite 1 para atividade física moderada, ou");
    instrucao("- Digite 2 para atividade física intensa.");
    const treino = perguntar_numero("Treino");

    // Processamento: Calcular faixa de batimentos
    const faixa_min = calcular_batimentos(1, frequencia, treino);
    const faixa_max = calcular_batimentos(2, frequencia, treino);
    const faixa_texto = `${faixa_min}-${faixa_max}`;

    // Saída: Exibir Resultado
    console.log("");
    console.log("A faixa de batimentos cardíacos ideais para suas atividades físicas é de", faixa_min, "-", faixa_max, "BPM.");
    console.log("");

    // Saída: Exibir Cálculo da Frequencia Máxima
    console.log(`(Cálculo da frequência máxima: 220 - ${idade} = ${frequencia} BPM)`)

    // Saída: Exibir Cálculo da Frequencia Ideal
    const faixa_total = (20 - (treino - 1) * 5);
    console.log(`(Cálculo: ${frequencia} BPM * ${(50 + (treino - 1) * 20)}% a ${(50 + (treino - 1) * 20 + faixa_total)}%)`);

    // Encerramento
    cabecalho("Fim do Programa");
}

// Cabeçalho do programa
function cabecalho(titulo) {
    console.log("");
    console.log(`### ${titulo} ###`);
}

// Exibir instrução para o usuário
function instrucao(txt) {
     console.log(`>>> ${txt}`);
}

// Método de entrada do usuário
function perguntar_numero(txt) {
    return Number(question(`${txt}: `));
}

// Cálculo da quantidade recomendada a partir do peso e nível de atividade.
function obter_freq_maxima(idade) {
    return 220 - idade;
}

// Cálculo da frequencia cardíaca ideal
// 1 - valor mínimo
// 2 - valor máximo
function calcular_batimentos(min_ou_max, frequencia_max, treino) {
    const faixa_total = (20 - (treino - 1) * 5);
    const porcentagem = 50 + (treino - 1) * 20 + ((min_ou_max - 1) * faixa_total);
    return Math.round(porcentagem/100 * frequencia_max);
}

// Executar código principal
main();