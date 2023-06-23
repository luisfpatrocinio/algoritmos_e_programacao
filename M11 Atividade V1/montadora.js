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
    obter_altura_da_tela,   
    repetir_string,
    enter_para_limpar_terminal,
    despedida,
    cabecalho
} from "./generalUtils.js";

import {
    drawCar, setCursorPosition
} from "./visualUtils.js";

let carroX = 0;

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function introAnimation() {
    let playedIntro = false;
    while (!playedIntro) {
        limpar_terminal();
        setCursorPosition(0, Math.floor(obter_altura_da_tela()/2));
        console.log();
        var _header = "PatroCars";
        var _headerLen = Math.min(- obter_largura_da_tela()/2 + carroX, _header.length);
        if (_headerLen > 0) {
            cabecalho(_header.slice(_header.length - _headerLen));
        }
        carroX ++;
        if (carroX < obter_largura_da_tela()) {
           drawCar(carroX, obter_altura_da_tela() - 5);
        }
        setCursorPosition(obter_largura_da_tela(), obter_altura_da_tela());
        if (carroX >= obter_largura_da_tela()) {
            playedIntro = true;
        } else {
            // ESPERAR TEMPO
            await sleep(4);
        }
    }
    
    var _enterKey = "[PRESS START]";
    setCursorPosition(
        Math.floor(obter_largura_da_tela()/2 - _enterKey.length/2 + 1), 
        Math.floor(obter_altura_da_tela()/2 + 2)
        );
    process.stdout.write(_enterKey);
    obter_texto('');
}

async function main() {
    await introAnimation();

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