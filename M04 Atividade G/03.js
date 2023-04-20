/**
 * 3. Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
Aritmética que tem por valor inicial A0 e razão R.
 */

import { exibir_cabecalho, exibir_texto_sem_pular_linha, formatar_numero, mostrar_mensagem, perguntar_numero } from "../utils.js";

async function main() {
    exibir_cabecalho("3. Progressão Aritmética")
    await mostrar_mensagem("Insira um número inicial.");
    const A0 = perguntar_numero("Número inicial");
    await mostrar_mensagem(`Iremos começar de ${A0} até que número?`);
    const limite = perguntar_numero("Limite");
    await mostrar_mensagem(`Vamos de ${A0} até ${limite} com qual razão?`);
    const razao = perguntar_numero('Razao');

    console.log();

    // Processamento
    let numero_somado = A0;
    let contador = 0;
    while (numero_somado <= limite) {
        const numero_exibido = formatar_numero(numero_somado, limite.toString().length);
        exibir_texto_sem_pular_linha(numero_exibido + " ");
        numero_somado += razao;
        contador++;

        if (contador % 10 == 0) {
            console.log();
        }
    }

    console.log();

    exibir_cabecalho("Fim do Programa")
}

main();