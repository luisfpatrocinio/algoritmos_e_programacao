/**
 * DESISTO - juros absurdo
 */

import { ajeitar_janela, exibir_cabecalho, mostrar_mensagem, perguntar_numero } from "./utils.js";

async function main() {
    ajeitar_janela();
    exibir_cabecalho("4. Empréstimo")
    await mostrar_mensagem("Oi");

    const salario_minimo = 1320;    // a partir de maio/2023
    const selic = 0.1375;           // 13.75%
    
    // Pedir o valor do empréstimo:
    let valor_do_emprestimo = await perguntar_numero("Valor do emprestimo");
    // O valor do empréstimo deve ser maior que um salário mínimo.
    while (valor_do_emprestimo < salario_minimo) {
        await mostrar_mensagem("O valor do empréstimo deve ser maior que um salário mínimo.");
        valor_do_emprestimo = await perguntar_numero("Valor do emprestimo");
    }

    // Pedir renda mensal
    let renda_mensal = await perguntar_numero("Renda mensal");

    // Pedir quantas parcelas (2x - 24x)
    let numero_de_parcelas = await perguntar_numero("Parcelas");
    let taxa = calcular_taxa_de_juros(numero_de_parcelas, selic);
    let montante = calcular_juros_compostos(valor_do_emprestimo, taxa, numero_de_parcelas);
    let iof = calcular_iof(montante, meses_para_dias(numero_de_parcelas));
    let valor_da_parcela = valor_do_emprestimo / numero_de_parcelas;
    let valor_total = montante + iof;
    while (true) {
        taxa = calcular_taxa_de_juros(numero_de_parcelas, selic);
        montante = calcular_juros_compostos(valor_do_emprestimo, taxa, numero_de_parcelas);
        valor_da_parcela = montante / numero_de_parcelas;

        // Checar quantidade de parcelas
        if (numero_de_parcelas < 2) {
            await mostrar_mensagem("O número de parcelas deve ser no mínimo 2x.")
            numero_de_parcelas = await perguntar_numero("Parcelas");
            continue
        } else if (numero_de_parcelas > 24) {
            await mostrar_mensagem("O número de parcelas deve ser no máximo 24x.")
            numero_de_parcelas = await perguntar_numero("Parcelas");
            continue
        }

        // Checar valor da parcela em relação a renda
        while (valor_da_parcela >= renda_mensal * 0.40) {
            taxa = calcular_taxa_de_juros(numero_de_parcelas, selic);
            montante = calcular_juros_compostos(valor_do_emprestimo, taxa, numero_de_parcelas);
            valor_da_parcela = montante / numero_de_parcelas;
            await mostrar_mensagem(`O valor da parcela (R$${valor_da_parcela.toFixed(2)}) não pode ser maior que 40% da sua renda mensal (R$${(renda_mensal * 0.40).toFixed(2)}).`);
            numero_de_parcelas = await perguntar_numero("Parcelas");
            continue
        }

        await mostrar_mensagem(`Você deseja ${numero_de_parcelas} parcelas de R$${valor_da_parcela.toFixed(2)}.`)

        // Atualizar valor do IOF:
        iof = calcular_iof(montante, meses_para_dias(numero_de_parcelas));
        break
    }
    
    valor_total = montante + iof;
    let juros = calcular_juros_compostos(valor_do_emprestimo, taxa, numero_de_parcelas, "juros");
    console.log(`## Simulação do Empréstimo ##`)
    console.log(`O valor do empréstimo:\t R$${valor_do_emprestimo.toFixed(2)}.`)
    console.log(`O valor do IOF:\t\t R$${iof.toFixed(2)}.`)
    console.log(`O valor do juros:\t R$${juros.toFixed(2)}.`)
    console.log(`O valor a pagar:\t R$${valor_total.toFixed(2)}.`)
    console.log(`Parcela mensal:\t R$${valor_da_parcela.toFixed(2)}.`)

}

main();

function meses_para_dias(meses) {
    return meses * 30;
}

function calcular_iof(valor_total, prazo_dias) {
    let imposto_fixo = 0.38/100 * valor_total;
    let imposto_por_dia = 0.0082/100 * valor_total;
    let quantidade_de_dias = prazo_dias;
    let iof = imposto_fixo + imposto_por_dia * quantidade_de_dias;
    
    return iof
}

function calcular_taxa_de_juros(prazo, selic) {
    if (prazo <= 6) {
        return selic * 0.50;
    } else if (prazo < 12) {
        return selic * 0.75;
    } else if (prazo <= 18) {
        return selic;
    } else {
        return selic * 1.30;
    }
}

function calcular_juros_compostos(emprestimo, taxa, prazo, retorno = "montante") {
    let contador_meses = 0;
    let capital = emprestimo;
    while (contador_meses < prazo) {
        let juros = capital * taxa;
        capital += juros;
        contador_meses++;
    }

    if (retorno == "montante") {
        return capital;
    } else {
        return capital - emprestimo;
    }
}