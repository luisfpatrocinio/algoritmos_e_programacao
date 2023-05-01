/**
 * 16. Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.
 */

import { ajeitar_janela, calcular_porcentagem, definir_nome_bot, exibir_cabecalho, mostrar_mensagem, perguntar_numero } from "../utils.js";

const valor_minimo_emprestimo = 1000;
const taxa_juros = 0.85; // 0.85% ao dia.

async function main() {
    ajeitar_janela();
    exibir_cabecalho("16. Empréstimo - Juros por dia útil");
    definir_nome_bot("PatroNET");
    await mostrar_mensagem(`Seja bem-vindo ao sistema de empréstimo da empresa PatroNET.\nInforme o valor do empréstimo que deseja contrair.\nO valor mínimo do empréstimo é de R$${valor_minimo_emprestimo.toFixed(2)}`);
    const valor = await perguntar_numero_minimo("Valor", valor_minimo_emprestimo);

    await mostrar_mensagem(`Certo, o valor do empréstimo será de R$${valor.toFixed(2)}, que será pago em parcelas a cada dia útil.\nQual o valor da parcela desejada?`);
    const parcela_minima = obter_parcela_minima(valor);
    //await mostrar_mensagem(`O valor da parcela mínima é de R$${(await parcela_minima).toFixed(2)}.`)
    let valor_parcela = await perguntar_numero("Parcela");
    while (valor_parcela < parcela_minima) {
        await mostrar_mensagem(`O valor da parcela é menor que o valor do juros diário, o que resultaria numa dívida interminável.\nInsira um valor maior, de no mínimo R$${parcela_minima.toFixed(2)}.`)
        valor_parcela = await perguntar_numero_minimo(`Parcela`, parcela_minima);
    }
    await mostrar_mensagem(`Certo, então você pagará o empréstimo de R$${valor.toFixed(2)}, pagando R$${valor_parcela.toFixed(2)} a cada dia útil.\nPreciso lembrar que o juros será de ${taxa_juros}% por dia.`);
    await mostrar_mensagem(`Vamos calcular quantos dias levará para você pagar o montante total.`)

    const dias_para_pagar = calcular_dias_emprestimo(valor, valor_parcela);

    await mostrar_mensagem(`Você levará ${dias_para_pagar} dias para pagar.`)
}

function calcular_dias_emprestimo(emprestimo, parcela) {
    let saldo = emprestimo;

    let dias = 0;
    while (true) {
        dias++;

        const saldo_anterior = saldo;

        // O usuário só vai pagar em dias úteis.
        if (eh_dia_util(dias)) {
            // Se o valor restante for menor que a parcela, pagar esse valor excedente.
            const parcela_mes = (saldo > parcela) ? parcela : saldo;
            saldo -= parcela_mes;
        }
        
        // Calcular juros:
        const saldo_apos_parcela = saldo;
        const juros = calcular_porcentagem(saldo, taxa_juros);

        saldo += juros;

        const porcentagem_paga = Math.floor((1 - saldo / emprestimo) * 100);
        console.log(`${dias}\tSALDO: R$${saldo_anterior.toFixed(2)} \t\t - R$${parcela.toFixed(2)} \t = R$${saldo_apos_parcela.toFixed(2)} \t+ R$${juros.toFixed(2)} \t= R$${saldo.toFixed(2)} ...\t ${porcentagem_paga}%`)
        
        if (saldo <= 0) {
            break;
        }

    }

    return dias;
}

function eh_dia_util(dia) {
    return (dia != 0 && dia != 6);
}

async function perguntar_numero_minimo(label, minimo) {
    const min = minimo;
    let numero = await perguntar_numero(label);
    while (numero < min) {
        await mostrar_mensagem(`O valor mínimo é de R$${min.toFixed(2)}`)
        numero = await perguntar_numero(label);
    }
    return numero;
}

// Essa função retorna o valor da parcela mínima de acordo com a taxa de juros.
function obter_parcela_minima(valor) {
    return calcular_porcentagem(valor, taxa_juros);
}

main();