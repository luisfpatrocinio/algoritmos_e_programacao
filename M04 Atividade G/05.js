import { exibir_cabecalho, exibir_texto_sem_pular_linha, mostrar_mensagem, perguntar_numero } from "../utils.js";


async function main() {
    exibir_cabecalho("05. Fatorial")
    await mostrar_mensagem("Insira um número, e exibirei o seu fatorial.")
    const numero = perguntar_numero("Numero");
    console.log();

    // Processamento
    let contador = numero;
    let resultado = numero;
    exibir_texto_sem_pular_linha(contador.toString());
    while (contador > 1) {
        resultado *= contador - 1;
        exibir_texto_sem_pular_linha(` x ${contador - 1}`);
        contador--;
    }

    exibir_texto_sem_pular_linha(` = ${resultado}`);

    console.log();

    exibir_cabecalho("Fim do Programa");
}

main();