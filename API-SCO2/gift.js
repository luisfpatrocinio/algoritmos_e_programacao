/**
 * Listar compras
 */

import { aguardar_input, aguardar_tempo, ajeitar_janela, exibir_cabecalho, mostrar_mensagem, mostrar_texto_centralizado, obter_texto, perguntar_numero_positivo, valor_moeda } from "./utils.js";
import chalk from "chalk";


// Vendas
let valor_total = 0;    // Valor total de todas as compras de todos os usuários.
const maximo_de_compras = 10;
let valor_total_do_cliente_atual = 0;
let quantidade_de_vendas = 0;

// Clientes
let contador_de_clientes = 0;
let compras_do_cliente_atual = 0;
let nome_do_cliente = "";

// Cashback
let cashback_min = Infinity;
let cashback_max = 0;
let cashback_total = 0;

// Loja
const fator_da_loja = obter_tipo_de_loja();
const nome_da_loja = obter_nome_da_loja(fator_da_loja);

async function main() {
    ajeitar_janela();
    exibir_cabecalho(`${nome_da_loja}`);
    await mostrar_mensagem(`Seja bem vindo a Loja Patro, sua loja de ${obter_desc_da_loja(fator_da_loja)}. Qual é seu nome?`);
    nome_do_cliente = obter_texto("Nome");
    
    // Para cada cliente...
    while (nome_do_cliente.toUpperCase() != "FIM" && nome_do_cliente.trim() != "") {
        // Solicitar valor dos produtos
        let valor_da_compra = 0;
        while (compras_do_cliente_atual < maximo_de_compras) {
            limpar_interface_loja();
            mostrar_texto_centralizado(`Cliente: ${nome_do_cliente}`);
            mostrar_texto_centralizado(`Produtos adicionados: (${compras_do_cliente_atual} / ${maximo_de_compras})`);
            mostrar_texto_centralizado(`Total: ${valor_moeda(valor_total_do_cliente_atual)}`);

            await mostrar_mensagem(`Informe o valor do produto ${compras_do_cliente_atual + 1}.`)
            valor_da_compra = await perguntar_numero_positivo("Valor");

            if (valor_da_compra == 0) {
                console.log();
                mostrar_texto_centralizado("ENCERRANDO COMPRAS...");
                await aguardar_tempo(2000);
                break;
            }

            valor_total += valor_da_compra;
            valor_total_do_cliente_atual += valor_da_compra;

            let nome_do_produto = gerar_nome_do_produto(valor_da_compra);

            mostrar_texto_centralizado(`Produto ${nome_do_produto} adicionado ao carrinho.`);

            let cashback = obter_cashback(valor_da_compra);
            cashback_total += cashback;
            if (cashback < cashback_min) cashback_min = cashback;
            if (cashback > cashback_max) cashback_max = cashback;

            compras_do_cliente_atual++;
            quantidade_de_vendas++;
            mostrar_texto_centralizado(`Cashback adicionado: ${valor_moeda(cashback)}.`);
            await aguardar_tempo(2000);
        }

        contador_de_clientes++;
        ajeitar_janela();
        exibir_cabecalho(`${nome_da_loja}`);
        mostrar_texto_centralizado(`Compras do cliente ${nome_do_cliente} finalizadas.`);

        if (compras_do_cliente_atual > 0) {
            mostrar_texto_centralizado(`Produtos comprados: ${compras_do_cliente_atual} / ${maximo_de_compras}`);
        } else {
            mostrar_texto_centralizado(`Não foram comprados ${obter_desc_da_loja(fator_da_loja)}`);
            contador_de_clientes--;
        }

        await aguardar_tempo(3000);
        ajeitar_janela();
        exibir_cabecalho(`${nome_da_loja}`);
        await mostrar_mensagem("Próximo cliente, insira seu nome.")
        nome_do_cliente = obter_texto("Nome");
        compras_do_cliente_atual = 0;
        valor_total_do_cliente_atual = 0;
    }

    // Tela de Resultados de vendas do mês
    let agora = new Date();
    let mes = agora.getMonth() + 1;

    mostrar_texto_centralizado(`FINALIZANDO COMPRAS DO MÊS ${mes}.`);
    await aguardar_tempo(2000);

    let cashback_media = cashback_total / quantidade_de_vendas;
    limpar_interface_loja();
    
    mostrar_texto_centralizado(`Compras do mês ${mes} finalizadas!`.toUpperCase());
    console.log();
    mostrar_texto_centralizado(`Clientes atendidos: ${contador_de_clientes}.`)
    mostrar_texto_centralizado(`Produtos vendidos: ${quantidade_de_vendas}.`)
    mostrar_texto_centralizado(`Valor total de vendas: ${valor_moeda(valor_total)}.`)
    console.log();
    mostrar_texto_centralizado(`Total cashback: ${valor_moeda(cashback_total)}.`)
    if (cashback_total > 0) {
        mostrar_texto_centralizado(`Cashback mínimo: ${valor_moeda(cashback_min)}.`)
        mostrar_texto_centralizado(`Cashback máximo: ${valor_moeda(cashback_max)}.`)
        mostrar_texto_centralizado(`Média de cashback: ${valor_moeda(cashback_media)}.`)

        let porcentagem = cashback_total / valor_total * 100;
        mostrar_texto_centralizado(`Porcentagem de Cashback: ${porcentagem.toFixed(2)}%`)
    }
    console.log();
    mostrar_texto_centralizado("===#  FIM DO PROGRAMA  #===");
}

function obter_tipo_de_loja() {
    const agora = new Date();
    const segundo_atual = agora.getSeconds();
    const fator = segundo_atual % 3;
    return fator
}

// Obtém o nome da loja (string) a partir do fator
function obter_nome_da_loja(fator) {
    if (fator == 0) {
        return "PatroTech - Artigos de Informática"
    } else if (fator == 1) {
        return "Ai que Phone - Loja de Smartphones"
    } else if (fator == 2) {
        return "Microsoft Patro Store - Soluções em Tecnologia"
    } else {
        return "Loja Bugada";
    }
}

function obter_desc_da_loja(fator) {
    if (fator == 0) {
        return "artigos de informática"
    } else if (fator == 1) {
        return "smartphones"
    } else if (fator == 2) {
        return "soluções em tecnologia"
    } else {
        return "bugs e bugs e bugs?";
    }
}

function obter_cashback(valor) {
    let cashback = 0;
    
    if (valor <= 250) {
        cashback = valor * 0.05;
    } else if (valor <= 500) {
        cashback = 250 * 0.05 + (valor - 250) * 0.07;
    } else if (valor <= 750) {
        cashback = 250 * 0.05 + 250 * 0.07 + (valor - 500) * 0.08;
    } else {
        cashback = 250 * 0.05 + 250 * 0.07 + 250 * 0.08 + (valor - 750) * 0.25;
    }
    
    return cashback;
}

function limpar_interface_loja() {
    ajeitar_janela();
    exibir_cabecalho(`${nome_da_loja}`);
}

function gerar_nome_do_produto(valor) {
    let quociente = Math.floor(valor / 7);
    let fator = quociente % 10;

    if (fator_da_loja == 0) {
        if (fator == 0) {
            return "Computador de Mesa (Desktop)"
        } else if (fator == 1) {
            return "Notebook PatroCCE"
        } else if (fator == 2) {
            return `Impressora XXT${Math.floor(valor / 50)}`
        } else if (fator == 3) {
            return `Roteador Mec-3${Math.floor(valor / 30)}`
        } else if (fator == 4) {
            return "Webcam"
        } else if (fator == 5) {
            let name = "1".repeat(Math.floor(valor / 1800));
            return `Scanner LX${name}`
        } else if (fator == 6) {
            return `Bluetooth SoundBar - Modelo ${Math.floor(valor / 30)}` 
        } else if (fator == 7) {
            return `Teclado AlphaBeta - Modelo ${Math.floor(valor / 5)}`
        } else if (fator == 8) {
            return `Monitor UltraSlim ${Math.floor(valor / 100)}`
        } else if (fator == 9) {
            return `Mouse Nitro ${Math.floor(valor / 2)}`
        } else {
            return "XXXXXXXXX"
        }
    } else if (fator_da_loja == 1) {
        let edition = Math.floor(valor / 44);
        if (fator == 0) {
            return "Galaxy Zoom" + " " + String(edition);
        } else if (fator == 1) {
            return "iPhone Lightning" + " " + String(edition);
        } else if (fator == 2) {
            return "Nokia Phoenix" + " " + String(edition);
        } else if (fator == 3) {
            return "Moto X-Treme" + " " + String(edition);
        } else if (fator == 4) {
            return "Pixel Plus" + " " + String(edition);
        } else if (fator == 5) {
            return "Sony Xperia Reborn" + " " + String(edition);
        } else if (fator == 6) {
            return "OnePlus Nova" + " " + String(edition);
        } else if (fator == 7) {
            return "LG Eclipse" + " " + String(edition);
        } else if (fator == 8) {
            return "HTC Thunderbolt" + " " + String(edition);
        } else if (fator == 9) {
            return "Blackberry Blaze" + " " + String(edition);
        } else {
            return "XXXXXXXXX"
        }
    } else if (fator_da_loja == 2) {
        return `Alexa Edição ${Math.floor(valor / 82)}`
    } else {
        return "produto bugado"
    }
}

main();