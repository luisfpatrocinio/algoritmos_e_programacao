import { cabecalho, definir_nome_bot, exibir_texto_sem_pular_linha, formatar_numero, mostrar_mensagem, perguntar_numero } from "./utils.js";

async function main() {
    cabecalho("2. Listar Números Pares");
    definir_nome_bot("AntonioBOT");
    await mostrar_mensagem("Insira um número. Este programa listará todos os números PARES de 1 até ele.");

    const numero = perguntar_numero("Numero");

    let contador = 1;
    while (contador <= numero) {
        if (contador % 2 == 0) {
            const numero_exibido = formatar_numero(contador, numero.toString().length)
            exibir_texto_sem_pular_linha(numero_exibido + " ");
        }

        if (contador % 10 == 0) {
            console.log();
        }
        contador++;
    }
    
    console.log();
    cabecalho("Fim do Programa");
}

main();