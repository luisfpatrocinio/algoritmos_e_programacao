import { question } from "readline-sync";

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

export function repetir_string(_string, _vezes) {
    let novaStr = "";
    let i = 0;
    while (i < _vezes) {
        novaStr += _string;
        i++;
    }
    return novaStr
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

export function limpar_terminal() {
    console.clear();
}

export function obter_texto(label = "Digite um texto: ") {
    const texto = question(label)
    return texto
}

export function enter_para_limpar_terminal() {
    obter_texto("[Enter]")
    limpar_terminal();
}

export function tam(_vetor) {
    let i = 0;
    for (var _ of _vetor) {
        i++;
    }
    return i
}

export function mapear(_vetor, _funcao){
    const _vetor_mapeado = Array(tam(_vetor));

    for (let i = 0; i < tam(_vetor_mapeado); i++) {
        _vetor_mapeado[i] = _funcao(_vetor[i])
    }
    
    return _vetor_mapeado
}

export function obter_largura_da_tela() {
    return process.stdout.columns;
}

export function obter_numero_aleatorio(_max = 1, _min = 0) {
    return Math.floor(Math.random() * (_max - _min + 1)) + _min;
}

export function filtrar(_vetor, _funcao_criterio) {
    const vetor_filtrado = [];

    for (let i = 0; i < tam(_vetor); i++) {
        if (_funcao_criterio(_vetor[i])) {
            vetor_filtrado[tam(vetor_filtrado)] = _vetor[i];
        }
    }

    return vetor_filtrado
}

export function tornar_maiusculo(_string) {
    let resultado = '';
    
    for (let i = 0; i < tam(_string); i++) {
      const char = _string[i];
      const ascii = char.charCodeAt(0);
      
      if (ascii >= 97 && ascii <= 122) {
        const maiusculoAscii = ascii - 32;
        const maiusculoChar = String.fromCharCode(maiusculoAscii);
        resultado += maiusculoChar;
      } else {
        resultado += char;
      }
    }
    
    return resultado;
  }

  export function reduce(_vetor, _funcao, _inicial = 0) {
    let acumulado = _inicial;
    for (let i = 0; i < tam(_vetor); i++) {
        acumulado = _funcao(acumulado, _vetor[i])
    }
    return acumulado
  }

export function quickSort(vetor, {chave = x => x, reverse = false} = {}){

    if (vetor.length <= 1)
        return vetor

    const random_index = Math.floor(Math.random() * vetor.length)
    const pivot = vetor[random_index]
    // sorry: using method (implemente remover_item_colecao(colecao, item))
    vetor.splice(random_index, 1)

    let left, right

    if (reverse){
        left = filtro_colecao(vetor,  x => chave(x) > chave(pivot))
        right = filtro_colecao(vetor, x => chave(x) <= chave(pivot))
    }else{
        left = filtro_colecao(vetor,  x => chave(x) <= chave(pivot))
        right = filtro_colecao(vetor, x => chave(x) > chave(pivot))
    }

    return quicksort(left, {chave, reverse}).concat([pivot]).concat(quicksort(right, {chave, reverse}))
}