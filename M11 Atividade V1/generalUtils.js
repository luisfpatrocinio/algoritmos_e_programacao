import { question } from 'readline-sync';

export function obter_texto(label = "Digite um texto: ") {
    const texto = question(label)
    return texto
}

export function enter_para_limpar_terminal() {
    question("[ENTER]", { hideEchoBack: true, mask: ''});
    limpar_terminal();
}

export function limpar_terminal() {
    console.clear();
}

export function mostrar_texto(_texto) {
    console.log(_texto);
}

export function mostrar_texto_centralizado(_texto) {
    const largura = obter_largura_da_tela();
    const espacos = (largura - _texto.length) / 2;
    mostrar_texto(' '.repeat(espacos) + _texto);
}

export function cabecalho(_texto) {
    const largura = obter_largura_da_tela();
    const espacos = (largura - _texto.length) / 2;
    mostrar_texto(' '.repeat(espacos - 2) + '■ ' + _texto + ' ■' + ' '.repeat(espacos - 2));
}

export function obter_numero(_label = "Digite um numero: ") {
    let numero = Number(question(_label));
    while (isNaN(numero)) {
        numero = Number(question(_label));
    }
    return numero
}

export function obter_largura_da_tela() {
    return process.stdout.columns;
}

export function repetir_string(_string, _vezes) {
    let novaStr = "";
    let i = 0;
    while (i < _vezes) {
        novaStr += _string;
        i++;
    }
    return novaStr
}

export function tam(_vetor) {
    let i = 0;
    for (var _ of _vetor) {
        i++;
    }
    return i
}

export function despedida() {
    let _randomNumber = (Math.floor(Math.random() * 10)) % 5;
    let _despedida = "";
    switch (_randomNumber) {
        case 0: _despedida = "Um forte abraço!";  break;
        case 1: _despedida = "Obrigado e volte sempre!";  break;
        case 2: _despedida = "Tchau querido(a)!";  break;
        case 3: _despedida = "Até a próxima!";  break;
        case 4: _despedida = "Tchau!";  break;
        default: _despedida = "<MENSAGEM DE DESPEDIDA>!";
    }
    mostrar_texto_centralizado(_despedida);
}