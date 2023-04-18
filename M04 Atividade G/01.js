import { definir_nome_bot, mostrar_mensagem, cabecalho, perguntar_numero, exibir_texto_sem_pular_linha, obter_largura_da_tela, formatar_numero } from "./utils.js";

/**
 * 1. Leia N e escreva todos os números inteiros de 1 a N.
 */

async function main() {
    cabecalho("01. Listar Números");

    definir_nome_bot("Patro")
    await mostrar_mensagem("Insira um número. Este programa listará todos os números de 1 até ele.")

    const numero = perguntar_numero("Numero")
    console.log();

    // Processamento
    let contador = 1;
    while (contador <= numero) {
        // Recuo no início de cada linha
        if (contador % 10 == 1) {
            exibir_texto_sem_pular_linha(" ");
        }

        // Exibir Número
        const numero_exibido = formatar_numero(contador, numero.toString().length);
        exibir_texto_sem_pular_linha(numero_exibido + " ");

        // Saltar linha a cada 10 números
        if (contador % 10 == 0) {
            console.log();
        }

        contador++;
    }

    // Encerramento
    console.log();
    console.log();
    cabecalho("Fim do Programa");
}

main();