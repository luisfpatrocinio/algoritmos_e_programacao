/**
 * // O nível da água deve ficar com no máximo 85% da capacidade
 * // valor cobrado por 1000L
 * // 
 */

import { ajeitar_janela, exibir_cabecalho, mostrar_mensagem, perguntar_numero } from "./utils.js";

async function main() {
    ajeitar_janela();
    exibir_cabecalho("2. Piscina");
    await mostrar_mensagem("Informe as dimensões da sua piscina:")
    const largura = await perguntar_numero()
}

main();