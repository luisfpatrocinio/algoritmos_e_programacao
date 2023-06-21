import { obter_texto, enter_para_limpar_terminal, limpar_terminal, mostrar_texto, obter_numero, mostrar_texto_centralizado, obter_largura_da_tela, repetir_string, tam, despedida, cabecalho } from "../M09 Atividade R/menu_utils.js";
import { ulid } from "ulidx";
import fs from "fs";
import { keyIn } from "readline-sync";

const DEBUG = false;
const arquivoMontadoras = "montadoras.txt";
const arquivoMenu = "opcoes.txt";
const MONTADORA_ID = 0;
const MONTADORA_NOME = 1;
const MONTADORA_NACIONALIDADE = 2;
const MONTADORA_ANO_FUNDACAO = 3;

function main(DEBUG) {
    let opcao = -1;
    while (opcao != 0) {
        let _opcaoSelecionada = 0;
        limpar_terminal();
        mostrar_menu(_opcaoSelecionada);

        var _tam = obter_largura_da_tela() / 10 - tam("Opcao: ");
        let _pontos = repetir_string(".", _tam);
        opcao = obter_numero(`${_pontos} Opcao: `);
        process.stdout.write('\x1b[1A');
        console.log(`${_pontos} Opcao: ${opcao} - ${obter_nome_do_item_do_menu_pelo_numero(opcao)}`);
        console.log();

        let funcao = obter_funcao_pelo_numero(opcao);
        if (funcao != undefined) {
            executar_funcao_via_string(funcao);
        } else if (opcao != 0) {
            mostrar_texto("Opcao invalida.");
        } else if (opcao == 0) {
            despedida();
        }

        enter_para_limpar_terminal();
    }

    textoDebug("Fim do programa.");
}

function mostrar_menu(_selecionada) {
    const opcoes = fs.readFileSync(arquivoMenu, "utf-8").split("\n");
    mostrar_texto_centralizado("Menu");

    let numeroDeMontadoras = tam(lerMontadoras());
    mostrar_texto_centralizado(`${numeroDeMontadoras} montadoras cadastradas.`)
    let montadoras = lerMontadoras();

    let _qntPontos = obter_largura_da_tela() / 10;
    let _pontos = repetir_string(".", _qntPontos)
    for (let i = 0; i < opcoes.length; i++) {
        let _textoDaOpcao = opcoes[i].split("#")[0];
        mostrar_texto(`${_pontos} ${i + 1} - ${_textoDaOpcao}`);
    }
    mostrar_texto(`${_pontos} 0 - Sair`);
}

function obter_nome_do_item_do_menu_pelo_numero(_numero) {
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

function obter_funcao_pelo_numero(_numero) {
    const opcoes = fs.readFileSync(arquivoMenu, "utf-8").split("\n");
    if (_numero < 1 || _numero > opcoes.length) {
        return undefined;
    } else {
        let _funcao = opcoes[_numero - 1].split("#")[1];
        return _funcao;
    }
}

function executar_funcao_via_string(_funcao) {
    if (_funcao == undefined) {
        return;
    }
    eval(_funcao + "()");
}

function lerMontadoras() {
    let montadoras = [];
    try {
        // Ler arquivo de montadoras "montadoras.txt"
        let _conteudo = fs.readFileSync(arquivoMontadoras, "utf-8").split("\n");
        // Percorrer conteudo e adicionar a montadoras
        for (let i = 0; i < _conteudo.length; i++) {
            if (_conteudo[i] != "") {
                montadoras.push(_conteudo[i]);
            }
        }

        // Para cada linha do arquivo
        for (let i = 0; i < montadoras.length; i++) {
            if (montadoras[i] != "") {
                // Separar o id e o nome
                let _montadora = String(montadoras[i]).split("#");
                // Criar um registro com id e nome
                let _registroMontadora = {
                    id: _montadora[MONTADORA_ID],
                    nome: _montadora[MONTADORA_NOME],
                    nacionalidade: _montadora[MONTADORA_NACIONALIDADE],
                    anoFundacao: _montadora[MONTADORA_ANO_FUNDACAO]
                }
                // Adicionar o objeto no vetor de montadoras
                montadoras[i] = _registroMontadora;
            } else {
                textoDebug("Infortunio: Linha Vazia.");
            }
        }
    }
    catch (err) {
        textoDebug("Erro ao ler montadoras.");
        textoDebug(err);
        console.log("###");
        console.log(montadoras)
        console.log("###");
    }

    return montadoras
}

function criarMontadora() {
    textoDebug("Criando montadora.")
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

function listarMontadoras() {
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
        mostrar_texto_centralizado(`- - - -`);
        console.log();
    }
}

function atualizarMontadoras() {
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

function removerMontadoras() {
    mostrar_texto("Qual montadora deseja remover? ");
    const montadoras = lerMontadoras();
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
            subirLinha();
            process.stdout.write(`${_header} ${opcao} - ${"Saindo..."}`);
            console.log();
            return;
        }

        alterarOpcaoAcima(_header, opcao, montadoras[opcao - 1].nome);

        mostrar_texto(`Tem certeza que deseja remover a montadora ${montadoras[opcao -1].nome}?}`);
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

function alterarOpcaoAcima(_header, _opcao, nomeDaOpcao) {
    process.stdout.write(`\x1b[1A${_header} ${_opcao} - ${nomeDaOpcao}`);
    console.log();
    console.log();
}


function salvarMontadoras(montadoras) {
    //let montadoras = lerMontadoras();
    let _texto = "";
    for (let i = 0; i < montadoras.length; i++) {
        _texto += `${montadoras[i].id}#${montadoras[i].nome}#${montadoras[i].nacionalidade}#${montadoras[i].anoFundacao}\n`;
    }
    fs.writeFileSync("montadoras.txt", _texto);
}

function textoDebug(_texto) {
    if (DEBUG) {
        console.log(`>>> ${_texto} `);
    }
}

function apagarUltimaLinha() {
    process.stdout.write(`\r\x1b[1A\r                                                            \r`);
}

function subirLinha() {
    process.stdout.write(`\x1b[1A`);
}

main(DEBUG);