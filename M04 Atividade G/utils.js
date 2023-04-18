import {question} from 'readline-sync'

let nome_do_bot = "PatroGPT";

export function mostrar_mensagem(_mensagem) {
    let msg = `\n${nome_do_bot}: ${_mensagem}`;
    let intervalo = 16;
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

export function definir_nome_bot(_name) {
    nome_do_bot = _name;
}

export function cabecalho(header) {
    const largura = obter_largura_da_tela();
    const linha = '='.repeat(largura);
    const espacos = (largura - header.length) / 2;
    console.log(linha);
    console.log(' '.repeat(espacos) + header);
    console.log(linha);
}

export function perguntar_numero(_pergunta) {
    return Number(question(`>>> ${_pergunta}: `));
}

export function exibir_texto_sem_pular_linha(texto) {
    process.stdout.write(texto);
}

export function obter_largura_da_tela() {
    return process.stdout.columns;
}

export function formatar_numero(numero, casas) {
    const numeroString = numero.toString();
    const numeroDeZeros = casas - 
    numeroString.length;

    let zerosEsquerda = "";
    let contador = 0;
    while (contador < numeroDeZeros) {
        zerosEsquerda += "0";
        contador++;
    }

    return zerosEsquerda + numeroString;
}