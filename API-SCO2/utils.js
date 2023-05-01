import { question } from "readline-sync";

const nome_do_bot = "PatroNET";

export function mostrar_mensagem(_mensagem) {
    let msg = `\n${nome_do_bot}: ${_mensagem}`;
    let intervalo = 2;
    return new Promise((resolve) => {
        let i = 0;
        function exibirProximoCaractere() {
          if (i < msg.length) {
            process.stdout.write(msg.charAt(i));
            i++;
            setTimeout(exibirProximoCaractere, intervalo);
          } else {
            console.log();
            resolve();
          }
        }
        exibirProximoCaractere();
    });
}

export function exibir_cabecalho(header) {
    const largura = obter_largura_da_tela();
    const linha = '='.repeat(largura);
    const espacos = (largura - header.length) / 2;
    console.log(linha);
    mostrar_texto_centralizado(header);
    console.log(linha);
}

export function mostrar_texto_centralizado(_texto) {
    const largura = obter_largura_da_tela();
    const espacos = (largura - _texto.length) / 2;
    console.log(' '.repeat(espacos) + _texto);
}

export async function perguntar_numero(_pergunta) {
    let numero = Number(question(`>>> ${_pergunta}: `));
    while (isNaN(numero)) {
        await mostrar_mensagem(`O valor inserido não é um número.`);
        let numero = Number(question(`>>> ${_pergunta}: `));
    }
    return numero;
}

export async function perguntar_numero_positivo(_pergunta) {
    let numero = await perguntar_numero(_pergunta);
    while (numero < 0) {
        await mostrar_mensagem(`Insira um número positivo.`);
        let numero = await perguntar_numero(_pergunta);
    }
    return numero;
}

export function obter_largura_da_tela() {
    return process.stdout.columns;
}


export function ajeitar_janela() {
    console.clear();
}

export function valor_moeda(valor) {
    let str = `R$${valor.toFixed(2)}`;
    return str.replace('.', ',');
}

export function obter_texto(label = "") {
    return question(`> ${label}: `);
}

export function aguardar_input(center = false) {
    if (center) {
        question(mostrar_texto_centralizado("[ENTER]"));
    } else {
        question("[ENTER]");
    }
}

export async function aguardar_tempo(tempo = 3000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("AIAIAI")
        }, tempo);
    })
    
}