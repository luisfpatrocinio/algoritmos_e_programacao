import {
    mostrarMenu,
    obterNomeDoItemDoMenuPeloNumero,
    obterFuncaoPeloNumero,
    executarFuncaoViaString,

    criarMontadora,
    listarMontadoras,
    atualizarMontadora,
    removerMontadora,

    criarModelo,
    listarModelos,
    removerModelo,
} from "./montadoraMenuFunctions.js";

import {
    limpar_terminal,
    mostrar_texto,
    mostrar_texto_centralizado,
    obter_texto,
    obter_numero,
    tam,
    obter_largura_da_tela,
    repetir_string,
    enter_para_limpar_terminal,
    despedida
} from "./generalUtils.js";

import {
    
} from "./montadoraUtils.js";

function main() {
    let opcao = -1;
    while (opcao != 0) {
        let _opcaoSelecionada = 0;
        limpar_terminal();
        mostrarMenu(_opcaoSelecionada);

        var _tam = obter_largura_da_tela() / 10 - tam("Opcao: ");
        let _pontos = repetir_string(".", _tam);
        opcao = obter_numero(`${_pontos} Opcao: `);
        process.stdout.write('\x1b[1A');
        console.log(`${_pontos} Opcao: ${opcao} - ${obterNomeDoItemDoMenuPeloNumero(opcao)}`);
        console.log();

        let funcao = obterFuncaoPeloNumero(opcao);
        if (funcao != undefined) {
            executarFuncaoViaString(funcao);
        } else if (opcao != 0) {
            mostrar_texto("Opcao invalida.");
        } else if (opcao == 0) {
            despedida();
        }

        enter_para_limpar_terminal();
    }

}

main();