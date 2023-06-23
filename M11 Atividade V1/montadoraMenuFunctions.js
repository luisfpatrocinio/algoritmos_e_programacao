import fs from "fs";
import { limpar_terminal, 
    mostrar_texto_centralizado, 
    tam, 
    obter_largura_da_tela, 
    repetir_string, 
    mostrar_texto, 
    obter_texto, 
    obter_numero, 
    enter_para_limpar_terminal,
    cabecalho
 } from "./generalUtils.js";
import { ulid } from "ulidx";
import { salvarMontadoras, lerMontadoras, salvarModelos, lerModelos,
    alterarOpcaoAcima, adicionarModelo, removerModeloDoArquivo, subirLinha, apagarUltimaLinha } from "./montadoraUtils.js";

import chalk from "chalk";

const arquivoMenu = "opcoes.txt";

// Principal:
export function mostrarMenu(_selecionada) {
    const opcoes = lerOpcoesDoMenu();
    cabecalho("Menu PatroCars")

    let numeroDeMontadoras = tam(lerMontadoras());

    if (numeroDeMontadoras > 0) {
        mostrar_texto_centralizado(`${numeroDeMontadoras} montadoras cadastradas.`)
    }
    
    let montadoras = lerMontadoras();

    let _qntPontos = obter_largura_da_tela() / 10;
    let _pontos = repetir_string(".", _qntPontos)
    for (let i = 0; i < opcoes.length; i++) {
        let _textoDaOpcao = opcoes[i].split("#")[0];
        let _textoTotal = `${_pontos} ${i + 1} - ${_textoDaOpcao}`;

        let _atribuirCor = function(_cor, _texto) {
            if (_cor == "branco") {
                return chalk.white(_texto);
            } else if (_cor == "cinza") {
                return chalk.gray(_texto);
            }
        }

        var _existeMontadoras = (montadoras.length > 0) ? 1 : 0;
        var _modelos = lerModelos();
        var _existeModelos = (_modelos.length > 0) ? 1 : 0;            

        var _cor = "branco";
        var _hierarquiaAtual = _existeMontadoras + _existeModelos;
        var _hierarquiaDaOpcao = opcoes[i].split("#")[2];
        if (_hierarquiaAtual >= _hierarquiaDaOpcao) {
            _cor = "branco";
        } else {
            _cor = "cinza";
        }

        mostrar_texto(_atribuirCor(_cor, _textoTotal));
    }
    mostrar_texto(`${_pontos} 0 - Sair`);
}

export function lerOpcoesDoMenu() {
    const opcoes = fs.readFileSync(arquivoMenu, "utf-8").split("\n");
    if (opcoes.length == 0) {
        return undefined;
    } else {
        return opcoes;
    }
}
/**
 * @description Retorna o nome do item do Menu a partir do seu número
 * @param {Number} _numero Número do item
 * @returns 
 */
export function obterNomeDoItemDoMenuPeloNumero(_numero) {
    if (_numero == 0) {
        return "Sair";
    }

    const opcoes = fs.readFileSync(arquivoMenu, "utf-8").split("\n");
    if (_numero < 1 || _numero > opcoes.length) {
        return undefined;
    } else {
        let _nome = opcoes[_numero - 1].split("#")[0];
        return _nome;
    }
}

export function obterFuncaoPeloNumero(_numero) {
    const opcoes = fs.readFileSync(arquivoMenu, "utf-8").split("\n");
    if (_numero < 1 || _numero > opcoes.length) {
        return undefined;
    } else {
        let _funcao = opcoes[_numero - 1].split("#")[1];
        return _funcao;
    }
}

export function executarFuncaoViaString(_funcao) {
    if (_funcao == undefined) {
        return;
    }
    eval(_funcao + "()");
}

// Montadoras:
export function criarMontadora() {

    //TODO: Conferir se os textos sao vazios
    let _nome = obter_texto("Digite o nome da montadora: ").trim();
    let _nacionalidade = obter_texto("Qual a nacionalidade da montadora? ").trim();
    let _anoFundacao = obter_numero("Qual o ano de fundacao da montadora? ");
    let _id = ulid();
    let _registroMontadora = {
        id: _id,
        nome: _nome,
        nacionalidade: _nacionalidade,
        anoFundacao: _anoFundacao
    }

    let montadoras = lerMontadoras();

    montadoras.push(_registroMontadora);
    salvarMontadoras(montadoras);

    mostrar_texto(`${_nome} adicionada com sucesso!`);
}

export function listarMontadoras() {
    let _montadoras = lerMontadoras();

    if (_montadoras.length == 0) {
        mostrar_texto_centralizado("Nao ha montadoras cadastradas.");
        return;
    }

    for (let i = 0; i < _montadoras.length; i++) {
        var header = "Montadora " + (i + 1);
        cabecalho("" + header + "");
        mostrar_texto_centralizado(`${_montadoras[i].nome}`);
        mostrar_texto_centralizado(`ID: ${_montadoras[i].id}`);
        mostrar_texto_centralizado(`Nacionalidade: ${_montadoras[i].nacionalidade}`);
        mostrar_texto_centralizado(`Ano de Fundacao: ${_montadoras[i].anoFundacao}`);

        if (_montadoras[i].modelos.length > 0) {
            var _modText = "";
            _montadoras[i].modelos.forEach(_modelo => {
                _modText += _modelo.nome + " ";
            }); {

            }
            mostrar_texto_centralizado(`Modelos: ${_modText}`)
        }

        mostrar_texto_centralizado(`- - - -`);
        console.log();
    }
}

export function atualizarMontadora() {
    const montadoras = lerMontadoras();
    if (montadoras.length == 0) {
        mostrar_texto_centralizado("Nao ha montadoras cadastradas.");
        return;
    }

    mostrar_texto("Qual montadora deseja atualizar? ");

    for (let i = 0; i < montadoras.length; i++) {
        mostrar_texto(`${i + 1} - ${montadoras[i].nome}`);
    }
    let opcao = -1;
    while (true) {
        var _header = `Montadora: `;
        while (true) {
            opcao = obter_numero(_header);
            if (opcao < 0 || opcao > montadoras.length) {
                apagarUltimaLinha();
            } else if (opcao == 0) {
                return;
            } else {
                break;  // Sair do loop
            }
        }
        let montadoraSelecionada = montadoras[opcao - 1];

        process.stdout.write(`\x1b[1A${_header} ${opcao} - ${montadoraSelecionada.nome}`);
        console.log();

        //mostrar_texto(`Montadora selecionada: ${montadoraSelecionada.nome}`)
        console.log();
        mostrar_texto("O que deseja atualizar?");

        var _opcoes = ["Sair", "Nome", "Nacionalidade", "Ano de Fundacao"];

        mostrar_texto(`1 - ${_opcoes[1]} (${montadoraSelecionada.nome})`);
        mostrar_texto(`2 - ${_opcoes[2]} (${montadoraSelecionada.nacionalidade})`);
        mostrar_texto(`3 - ${_opcoes[3]} (${montadoraSelecionada.anoFundacao})`);
        mostrar_texto(`0 - ${_opcoes[0]}`);
        let _opcao = -1;
        let _podeSair = false;
        while (!_podeSair) {
            var _header = `Opcao: `;
            _opcao = obter_numero(_header);
            

            var _txt = _opcoes[_opcao] == undefined ? "Opcao invalida." : _opcoes[_opcao];
            alterarOpcaoAcima(_header, _opcao, _txt);

            switch (_opcao) {
                case 1:
                    mostrar_texto(`Nome atual: ${montadoraSelecionada.nome}`);
                    let _nome = obter_texto("Digite o novo nome: ");
                    montadoras[opcao - 1].nome = _nome;
                    mostrar_texto_centralizado(`Nome atualizado com sucesso!`);
                    _podeSair = true;
                    break;
                case 2:
                    mostrar_texto(`Nacionalidade atual: ${montadoraSelecionada.nacionalidade}`);
                    let _nacionalidade = obter_texto("Digite a nova nacionalidade: ");
                    montadoras[opcao - 1].nacionalidade = _nacionalidade;
                    _podeSair = true;
                    mostrar_texto_centralizado(`Nacionalidade atualizada com sucesso!`);
                    break;
                case 3:
                    mostrar_texto(`Ano atual: ${montadoraSelecionada.anoFundacao}`);
                    let _anoFundacao = obter_numero("Digite o novo ano de fundacao: ");
                    montadoras[opcao - 1].anoFundacao = _anoFundacao;
                    _podeSair = true;
                    mostrar_texto_centralizado(`Ano de fundacao atualizado com sucesso!`);
                    break;
                case 0:
                    _podeSair = true;
                    break;
                default:
                    apagarUltimaLinha();
                    apagarUltimaLinha();
                    break;  
            }
        }

        salvarMontadoras(montadoras);
        if (_podeSair) {
            break;
        }
    }
}

export function removerMontadora() {
    const montadoras = lerMontadoras();

    if (montadoras.length == 0) {
        mostrar_texto_centralizado("Nao ha montadoras cadastradas.");
        return;
    }

    mostrar_texto("Qual montadora deseja remover? ");
    for (let i = 0; i < montadoras.length; i++) {
        mostrar_texto(`${i + 1} - ${montadoras[i].nome}`);
    }
    let opcao = -1;
    while (true) {
        var _header = `Opcao: `;
        opcao = obter_numero(_header);

        while (opcao < 0 || opcao > montadoras.length) {
            apagarUltimaLinha();
            opcao = obter_numero(_header);
        }

        if (opcao == 0) {
            alterarOpcaoAcima(_header, opcao, "Saindo...");
            return;
        }

        alterarOpcaoAcima(_header, opcao, montadoras[opcao - 1].nome);

        mostrar_texto(`Tem certeza que deseja remover a montadora ${montadoras[opcao -1].nome}?`);
        var _opcoes = ["Sim", "Nao"];
        mostrar_texto(`1 - ${_opcoes[0]}`);
        mostrar_texto(`2 - ${_opcoes[1]}`);
        let _opcao = obter_numero(_header);

        alterarOpcaoAcima(_header, _opcao, _opcoes[_opcao - 1]);

        switch (_opcao) {
            case 1:
                // Remover do array montadoras
                var name = montadoras[opcao - 1].nome;
                montadoras.splice(opcao - 1, 1);
                mostrar_texto(`Montadora ${name} removida com sucesso!`);
                break;
            case 2:
                break;
            default:
                mostrar_texto("Opcao inválida.");
                break;  
        }
        salvarMontadoras(montadoras);
        break;
    }
}

// Modelos:
export function criarModelo() {
    // Perguntar qual montadora
    const _montadoras = lerMontadoras();

    // Se houver montadoras:
    if (_montadoras.length > 0) {

        // Selecionar montadora
        mostrar_texto("Qual montadora?");
        for (var i = 0; i < _montadoras.length; i++) {
            mostrar_texto(`${i + 1} - ${_montadoras[i].nome}`)
        }
        mostrar_texto(`0 - Sair`)

        var _opcao = -1;
        var montadoraSelecionada = -1;
        var _header = "Opcao: "

        while (_opcao < 0 || _opcao > _montadoras.length) {
            _opcao = obter_numero(_header);
        }

        // Referencia do Registro da Montadora
        montadoraSelecionada = _montadoras[_opcao - 1];
        
        if (_opcao == 0) {
            alterarOpcaoAcima(_header, _opcao, "Cancelando...")
            return
        } else {
            alterarOpcaoAcima(_header, _opcao, montadoraSelecionada.nome)
        }

        // Criar o Modelo finalmente
        cabecalho("Criar Novo Modelo");
        const nome = obter_texto("Nome: ");
        const id = ulid();
        const valorReferencia = obter_numero("Valor Ref.: ");
        alterarOpcaoAcima("Valor Ref.:", "", `R$${valorReferencia.toFixed(2)}`);
        subirLinha();
        const motor = obter_numero("Motorizacao: (Exemplo: 1.0, 1.4): ");
        let turbo = obter_numero("Turbo? 1 - SIM, 2 - NAO: ");
        turbo = (turbo == 1) ? true : false;
        let automatico = obter_numero("Automatico? 1 - SIM, 2 - NAO: ");
        automatico = (automatico == 1) ? true : false;

        const novoModelo = {
            nome, id, valorReferencia, motor, turbo, automatico,
            montadoraID: montadoraSelecionada.id
        }

        montadoraSelecionada.modelos.push(novoModelo);
        
        adicionarModelo(novoModelo);
        salvarMontadoras(_montadoras);
        console.log(`Modelo ${novoModelo.nome} adicionado na montadora ${montadoraSelecionada.nome}.`);
    } else {
        mostrar_texto_centralizado("Não ha montadoras cadastradas.");
    }
}

export function listarModelos() {
    let _montadoras = lerMontadoras();
    if (_montadoras.length == 0) {
        mostrar_texto_centralizado("Não há montadoras cadastradas");
        return
    }

    var modelos = lerModelos();
    if (modelos.length == 0) {
        mostrar_texto_centralizado("Nao ha modelos cadastrados em nenhuma montadora.");
        return
    }

    mostrar_texto("Qual montadora?");
    for (var i = 0; i < _montadoras.length; i++) {
        var _textoAdicional = "";
        var _qntModelos = _montadoras[i].modelos.length;
        if (_qntModelos > 0) {
            _textoAdicional = `(${_qntModelos} modelo${_qntModelos > 1 ? "s" : ""})`;
        }
        mostrar_texto(`${i + 1} - ${_montadoras[i].nome} ${_textoAdicional}`);
    }

    var _header = "Montadora: "
    let opcao = -1;
    while (opcao < 0 || opcao > _montadoras.length) {
        opcao = obter_numero(_header);
    }
    if (opcao == 0) {
        alterarOpcaoAcima(_header, opcao, "Cancelando...");
    }

    // Referencia do Registro da Montadora
    const montadoraSelecionada = _montadoras[opcao - 1];
    alterarOpcaoAcima(_header, opcao, `${montadoraSelecionada.nome}`);

    // Mostrar os modelos dela finalmente
    if (montadoraSelecionada.modelos.length > 0) {
        for (var i = 0; i < montadoraSelecionada.modelos.length; i++) {
            var _modeloAtual = montadoraSelecionada.modelos[i];
            var header = "Modelo " + (i + 1);
            cabecalho("" + header + "");
            mostrar_texto_centralizado(`${_modeloAtual.nome}`);
            mostrar_texto_centralizado(`ID: ${_modeloAtual.id}`);
            mostrar_texto_centralizado(`Valor de Ref.: ${_modeloAtual.valorReferencia}`);
            mostrar_texto_centralizado(`Motorizacao: ${_modeloAtual.motor}`);
            let turboStr = _modeloAtual.turbo == true ? "SIM" : "NÃO";
            mostrar_texto_centralizado(`Turbo: ${turboStr}`);
            let autoStr = _modeloAtual.automatico == true ? "SIM" : "NÃO";
            mostrar_texto_centralizado(`Automatico: ${autoStr}`);
            mostrar_texto_centralizado(`- - - -`);
            console.log();
        }
    } else {
        mostrar_texto_centralizado("Não há modelos cadastrados nessa montadora.")
    }
}

export function removerModelo() {
    var modelos = lerModelos();
    if (modelos.length == 0) {
        mostrar_texto_centralizado("Nao ha modelos cadastrados em nenhuma montadora.");
        return
    }
    var montadoras = lerMontadoras();
    mostrar_texto("Qual montadora?");
    
    for (var i = 0; i < montadoras.length; i++) {
        var _textoAdicional = "";
        var _qntModelos = montadoras[i].modelos.length;
        if (_qntModelos > 0) {
            _textoAdicional = `(${_qntModelos} modelo${(_qntModelos > 1) ? "s" : ""})`;
        }
        mostrar_texto(`${i + 1} - ${montadoras[i].nome} ${_textoAdicional}`);
    }

    var opcao = -1;
    var montadoraSelecionada = -1;
    var _header = "Opcao: "
    while (opcao < 0 || opcao > montadoras.length) {
        opcao = obter_numero(_header);  
    }

    if (opcao == 0) {
        alterarOpcaoAcima(_header, opcao, "Cancelando...");
        return 
    }
    montadoraSelecionada = montadoras[opcao - 1];
    alterarOpcaoAcima(_header, opcao, montadoraSelecionada.nome);

    // Checar se há modelos
    if (montadoraSelecionada.modelos.length == 0) {
        mostrar_texto_centralizado(`A montadora ${montadoraSelecionada.nome} não possui modelos criados.`);
        return
    }

    mostrar_texto("Qual modelo deseja remover?");

    for (var i = 0; i < montadoraSelecionada.modelos.length; i++) {
        mostrar_texto(`${i+1} - ${montadoraSelecionada.modelos[i].nome}`);
    }
    mostrar_texto(`0 - Sair`)

    var opcao = -1;
    while (opcao < 0 || opcao > montadoraSelecionada.modelos.length) {
        opcao = obter_numero("Opcao: ");
    }

    if (opcao == 0) {
        alterarOpcaoAcima(_header, opcao, "Cancelando...");
        return 
    }

    var modeloSelecionado = montadoraSelecionada.modelos[opcao - 1];
    alterarOpcaoAcima(_header, opcao, `${modeloSelecionado.nome}`);

    var nomeModeloRemovido = modeloSelecionado.nome;
    var idModeloRemovido = modeloSelecionado.id;

    montadoraSelecionada.modelos.splice(opcao - 1, 1);
    mostrar_texto_centralizado(`${nomeModeloRemovido} removido da montadora ${montadoraSelecionada.nome}.`);

    removerModeloDoArquivo(idModeloRemovido);

    salvarMontadoras(montadoras);
}  

