/** 4. Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
Geométrica que tem por valor inicial A0 e razão R.
*/

import { exibir_cabecalho, exibir_texto_sem_pular_linha, formatar_numero, mostrar_mensagem, perguntar_numero } from "../utils.js";


async function main() {
    exibir_cabecalho("04. Progressão Geométrica");

    await mostrar_mensagem("Insira um número inicial.")

    const inicial = perguntar_numero("Inicial");
    const limite = perguntar_numero("Limite");
    const razao = perguntar_numero("Razao");
    
    let numero_atual = inicial;
    let contador = 1;
    while (numero_atual <= limite) {
        const numero_exibido = formatar_numero(numero_atual, limite.toString().length);
        exibir_texto_sem_pular_linha(numero_exibido + " ");
        numero_atual = numero_atual * razao;
        contador++;
    }
    
    console.log();

    exibir_cabecalho("Fim do Programa");
}

main();