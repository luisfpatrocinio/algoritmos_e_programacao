/**
 * 31. Escreva um algoritmo que leia um número decimal (até 3 dígitos) e escreva o seu equivalente em
numeração romana. Utilize funções para obter cada dígito do número decimal e para a transformação
de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M).
 */

import { ajeitar_janela, exibir_cabecalho, mostrar_mensagem, obter_altura_da_janela, perguntar_numero, setCursorPos } from "../utils.js";

async function main() {
    ajeitar_janela();
    exibir_cabecalho("J - 31. Número Romano");

    await mostrar_mensagem("Digite um número decimal de até 3 dígitos, para ser convertido em número romano.");

    let numero = perguntar_numero("Numero");

    // Fail Fast: Número inválido.
    let tentativas = 0;
    while (numero <  1 || numero > 999) {
        if (tentativas < 3) {
            if (numero < 1) {
                await mostrar_mensagem("Insira um número positivo.");
            } else if (Numero > 999) {
                await mostrar_mensagem("O número precisa ter até 3 dígitos.");
            }
        } else {
            await mostrar_mensagem("Qual a dificuldade em inserir um número positivo de até 3 dígitos?")
        }
        numero = perguntar_numero("Numero");
        tentativas++;
    }

    
    
    
}

// Executar função principal
main();