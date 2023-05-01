/**
 * Consumo de até 30KWh isento de tarifa. 
 * Até 100 KWh será cobrado R$ 0,59 por cada um cada de todo os KWh consumidos;
 * Acima de 100KWh o valor de R$ 0,75 por cada um de todos os KWh consumidos. 
 * Sobre o valor tarifado/apurado são 25% de ICMS e 15% de PIS/COFINS.
 * Taxa de iluminação: Apenas para acima de 80KWh/mês
 * Taxa de iluminação: 6% do valor tarifado (antes dos impostos)
 */

import { ajeitar_janela, exibir_cabecalho, mostrar_mensagem, mostrar_texto_centralizado, perguntar_numero_positivo, valor_moeda } from "./utils.js";
import chalk from "chalk";

async function main() {
    ajeitar_janela();
    exibir_cabecalho("6. Energia");
    await mostrar_mensagem("Insira a leitura anterior, e a atual.");
    const leitura_anterior = await perguntar_numero_positivo("Leitura anterior");
    let leitura_atual = await perguntar_numero_positivo("Leitura atual");
    while (leitura_atual < leitura_anterior) {
        await mostrar_mensagem("A leitura atual não pode ser menor que a leitura anterior.");
        leitura_atual = await perguntar_numero_positivo("Leitura atual");
    }

    let consumo = leitura_atual - leitura_anterior;
    
    let tarifa = calcular_tarifa(consumo);
    

    let icms = calcular_icms(tarifa);
    let pis = calcular_pis(tarifa);
    let taxa_luz = calcular_taxa_de_iluminacao(consumo, tarifa);

    let qnt_bandeiras = Math.floor(consumo/100);
    let bandeira = qnt_bandeiras * 8;
    

    let valor_total = tarifa + icms + pis + taxa_luz + bandeira;

    // Saída:
    mostrar_texto_centralizado(`Consumo:\t\t ${consumo}KWh.`);
    mostrar_texto_centralizado(`Valor Faturado:\t\t ${valor_moeda(tarifa)}.`);
    mostrar_texto_centralizado(`Bandeira:\t\t ${valor_moeda(bandeira)}. (x ${qnt_bandeiras})`);
    mostrar_texto_centralizado(`Imp. ICMS:\t\t ${valor_moeda(icms)}.`);
    mostrar_texto_centralizado(`Imp. PIS/COFINS:\t\t ${valor_moeda(pis)}.`);
    mostrar_texto_centralizado(`Taxa de Iluminação:\t\t ${valor_moeda(taxa_luz)}.`);
    mostrar_texto_centralizado(`Valor Total:\t\t ${valor_moeda(valor_total)}.`);

    mostrar_texto_centralizado("== FIM ==")
}

main();

function calcular_icms(valor) {
    return 0.25 * valor;
}

function calcular_pis(valor) {
    return 0.15 * valor;
}

function calcular_taxa_de_iluminacao(consumo, tarifa) {
    return (consumo > 80) ? 0.06 * tarifa : 0;
}

function calcular_tarifa(consumo) {
    // É menor que 30?
    if (consumo < 30) {
        return 0;
    } else if (consumo < 100) {
        return 0.59 * consumo;
    } else {
        return 0.75 * consumo;
    }
}