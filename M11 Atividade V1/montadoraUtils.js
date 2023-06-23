import { ulid } from "ulidx";
import { question } from "readline-sync";
import fs from "fs";
import { obterNomeDoItemDoMenuPeloNumero } from "./montadoraMenuFunctions.js";

// Constantes:
const arquivoMenu = "opcoes.txt"
const arquivoMontadoras = "montadoras.txt";
const arquivoModelos = "modelos.txt";
const MONTADORA_ID = 0;
const MONTADORA_NOME = 1;
const MONTADORA_NACIONALIDADE = 2;
const MONTADORA_ANO_FUNDACAO = 3;
const MODELO_ID = 0;
const MODELO_NOME = 1;
const MODELO_MONTADORA_ID = 2;
const MODELO_VALOR_REF = 3;
const MODELO_MOTOR = 4;
const MODELO_TURBO = 5;
const MODELO_AUTOMATICO = 6;

// Sistema

// Ler Arquivos
export function lerMontadoras() {
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
                    anoFundacao: _montadora[MONTADORA_ANO_FUNDACAO],
                    modelos: []
                }
                // Adicionar o objeto no vetor de montadoras
                montadoras[i] = _registroMontadora;
            }
        }

        // Adicionar modelos nas montadoras
        const modelos = lerModelos();
        const modelosToSave = [];

        // Percorrer todos os modelos
        for (let i = 0; i < modelos.length; i++) {
            // Adicionar cada modelo em sua respectiva montadora
            let modeloID = modelos[i].montadoraID;

            for (let j = 0; j < montadoras.length; j++) {
                if (montadoras[j].id == modeloID) {
                    montadoras[j].modelos.push(modelos[i]);
                    modelosToSave.push(modelos[i]);
                }
            }
        }

        // Após atribuir todos os modelos às montadoras, salvar lista de modelos a partir delas
        salvarModelos(modelosToSave);
    }
    catch (err) {
        console.log("###");
        console.log("Erro ao ler montadoras.");
        console.log(montadoras)
        console.log(err)
        console.log("###"); 
    }

    return montadoras
}

export function lerModelos() {
    // Inicializar Vetor
    const modelos = [];

    // Ler arquivo de modelos "modelos.txt"
    let _conteudo = fs.readFileSync(arquivoModelos, "utf-8").split("\n");
    // Percorrer conteudo e adicionar a montadoras
    for (let i = 0; i < _conteudo.length; i++) {
        if (_conteudo[i] != "") {
            modelos.push(_conteudo[i]);
        }
    }

    // Para cada linha do arquivo
    for (let i = 0; i < modelos.length; i++) {
        if (modelos[i] != "") {
            // Separar o id e o nome
            let _modeloAtual = String(modelos[i]).split("#");
            // Criar um registro com id e nome
            let _registroModelo = {
                id: _modeloAtual[MODELO_ID],
                nome: _modeloAtual[MODELO_NOME],
                montadoraID: _modeloAtual[MODELO_MONTADORA_ID],
                valorReferencia: _modeloAtual[MODELO_VALOR_REF],
                motor: Number(_modeloAtual[MODELO_MOTOR]).toFixed(1),
                turbo: _modeloAtual[MODELO_TURBO] == "true" ? true : false,
                automatico: _modeloAtual[MODELO_AUTOMATICO] == "true" ? true : false,
            }
            // Adicionar o objeto no vetor de montadoras
            modelos[i] = _registroModelo;
        }
    }
    return modelos
}

// Gravação de Arquivos
export function salvarMontadoras(montadoras) {
    let _texto = "";
    for (let i = 0; i < montadoras.length; i++) {
        _texto += `${montadoras[i].id}#${montadoras[i].nome}#${montadoras[i].nacionalidade}#${montadoras[i].anoFundacao}\n`;
    }
    fs.writeFileSync("montadoras.txt", _texto);
}

export function salvarModelos(modelos) {
    let _texto = "";
    for (let i = 0; i < modelos.length; i++) {
        var modelo = modelos[i];
        _texto += `${modelo.id}#${modelo.nome}#${modelo.montadoraID}#${modelo.valorReferencia}#${modelo.motor}#${modelo.turbo}#${modelo.automatico}\n`;
    }
        
    fs.writeFileSync("modelos.txt", _texto);
}



// Visual
export function alterarOpcaoAcima(_header, _opcao, nomeDaOpcao) {
    process.stdout.write(`\x1b[1A${_header} ${_opcao} - ${nomeDaOpcao}`);
    console.log();
    console.log();
}

export function apagarUltimaLinha() {
    process.stdout.write(`\r\x1b[1A\r                                                            \r`);
}

export function subirLinha() {
    process.stdout.write(`\x1b[1A`);
}

export function adicionarModelo(modelo) {
    let _texto = fs.readFileSync(arquivoModelos, "utf-8");
        _texto += `${modelo.id}#${modelo.nome}#${modelo.montadoraID}#${modelo.valorReferencia}#${modelo.motor}#${modelo.turbo}#${modelo.automatico}\n`;
    fs.writeFileSync("modelos.txt", _texto);
}

export function removerModeloDoArquivo(id) {
    let modelos = lerModelos();
    for (var i = 0; i < modelos.length; i++) {
        if (modelos[i].id == id) {
            modelos.splice(i, 1);
        }
    }
    salvarModelos(modelos);
}

// Misc