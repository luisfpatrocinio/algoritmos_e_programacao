import {question} from 'readline-sync';

/**
 * A Taxa Metabólica Basal (TMB) é o mínimo de energia necessária para manter 
 * as funções do organismo em repouso, como os batimentos cardíacos, a pressão 
 * arterial, a respiração e a manutenção da temperatura corporal.
 * Fórmula da TMB para homens: TMB = 88,36 + (13,4 x peso) + (4,8 x altura) - (5,7 x idade)
 */

function main() {
    cabecalho("Cálculo de Taxa Metabólica Basal (TMB)");
  
    // Entrada: Obter informações do usuário
    // Gênero
    instrucao("> Insira seu gênero:");
    instrucao("- Digite 1 para gênero masculino, ou");
    instrucao("- Digite 2 para gênero feminino.");
    const genero = perguntar_numero("Gênero");
    // Peso
    instrucao("> Insira seu peso em kg.")
    const peso = perguntar_numero("Peso");
    // Altura
    instrucao("> Insira sua altura em cm.")
    const altura = perguntar_numero("Altura (cm)");
    // Idade
    instrucao("> Insira sua idade.")
    const idade = perguntar_numero("Idade");
    
    // Processamento: Calcular TMB
    const tmb = calcular_tmb(peso, altura, idade, genero);

    // Saída:
    console.log("A sua Taxa Metabólica Basal (TMB) é de: ", tmb);
    
    // Exibir cálculos:
    const _m = Math.abs(genero - 2);
    const _f = Math.abs(genero - 1);
    console.log(`(Cálculo: ${88.36 * _m + 447.60 * _f} + (${13.4 * _m + 9.2 * _f} * peso (${peso}kg)) + (${4.8 * _m + 3.1 * _f} * altura (${altura}cm)) - (${5.7 * _m + 4.3 * _f} * idade (${idade} anos)))`);

    // Encerramento
    cabecalho("Fim do Programa");
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

// Calcular TMB
function calcular_tmb(peso, altura, idade, genero) {
    // Masculino
    const tmb_m = Math.floor(88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade)) * Math.abs(genero - 2);
    
    // Feminino
    const tmb_f = Math.floor(447.60 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade)) * Math.abs(genero - 1);;

    const tmb = tmb_m + tmb_f;
    return tmb
}

// Executar código principal
main();