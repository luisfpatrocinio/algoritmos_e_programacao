import {question} from 'readline-sync';

function main() {
    instrucao("Insira seu peso atual (kg)");
    const peso = perguntar_numero("Peso");
    instrucao("Quanto a perder (%)");
    const percentual = perguntar_numero("Percentual");
    instrucao("Em quantas semanas:")
    const qnt_semanas = perguntar_numero("Semanas")

    const peso_a_perder = calcular_peso_a_perder(peso, percentual);
    const calorias_a_reduzir = peso_para_calorias(peso_a_perder);
    const qnt_dias = converter_semanas_em_dias(qnt_semanas);
    
    const deficit_diario = calorias_a_reduzir / qnt_dias;

    console.log(`Déficit diário necessário: ${deficit_diario.toFixed(2)}`)

    instrucao("Quanto deseja consumir por dia (kcal) ?");
    const consumo_diario = perguntar_numero("Consumo diário")

    const gasto_diario = consumo_diario + deficit_diario;
    console.log(`Você deverá gastar diariamente ${gasto_diario}kcal com suas atividades.`)
}

function converter_semanas_em_dias(semanas) {
    return (semanas * 7);
}

function peso_para_calorias(peso) {
    const calorias = peso * 7700;
    return calorias;
}

function calcular_peso_a_perder(peso, percentual) {
    const peso_a_perder = peso * percentual / 100;
    return peso_a_perder;
}

// Exibir instrução para o usuário
function instrucao(txt) {
    console.log(`>>> ${txt}`);
}

// Método de entrada do usuário
function perguntar_numero(txt) {
   return Number(question(`${txt}: `));
}

main();