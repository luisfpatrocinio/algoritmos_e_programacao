import { 
    mostrar_texto, obter_numero, repetir_string, 
    despedida, enter_para_limpar_terminal, mapear, 
    tam, mostrar_texto_centralizado, obter_largura_da_tela, 
    limpar_terminal, obter_numero_aleatorio, filtrar, 
    obter_texto, tornar_maiusculo, reduce } from "./menu_utils.js";

function main() {
    limpar_terminal();
    let vetorPrincipal = Array(0);
    let estadoMenu = 0;
    
    // Propriedades do Menu
    var _tam = obter_largura_da_tela() / 10 - tam("Opcao: ");
    let _pontos = repetir_string(".", _tam);
    menu(vetorPrincipal);
    let _opcao = obter_numero(`${_pontos} Opcao: `);
        
    while (_opcao != 0) {
        let _menuNovo = tam(vetorPrincipal) > 0;
        let _novaOpcao = (_menuNovo) ? _opcao + 3 : _opcao;
        switch (_novaOpcao) {
            case 1: // Gerar Vetor N Posições
                vetorPrincipal = gerarNovoVetor();
            break;
            case 2: // Preencher vetor manualmente
                vetorPrincipal = gerarNovoVetor(undefined, -1);
                for (let i = 0; i < tam(vetorPrincipal); i++) {
                    vetorPrincipal[i] = obter_numero(`Índice ${i}: `);
                }
            break;
            case 3: // Preencher vetor automaticamente
                vetorPrincipal = gerarNovoVetor(undefined, -1);
                var _min = obter_numero("Número mínimo: ");
                var _max = obter_numero("Número máximo: ");
                for (let i = 0; i < tam(vetorPrincipal); i++) {
                    vetorPrincipal[i] = obter_numero_aleatorio(_min, _max);
                }
            break;
            case 4: // Limpar Vetor
                vetorPrincipal = tentarLimparVetor();
            break;
            case 5: // Transformar: Elevar a potencia de N
                var _n = obter_numero("Elevar todos os elementos a qual potência?");
                vetorPrincipal = mapear(vetorPrincipal, a => Math.pow(a, _n));
            break;
            case 6: // Contar (Positivos, Negativos e Zeros)
                var _vetorPositivos = filtrar(vetorPrincipal, a => a > 0);
                var _vetorZeros = filtrar(vetorPrincipal, a => a == 0);
                var _vetorNegativos = filtrar(vetorPrincipal, a => a < 0);
                mostrar_texto(`A quantidade de números positivos é: ${tam(_vetorPositivos)} elementos.`);
                mostrar_texto(`A quantidade de números negativos é: ${tam(_vetorNegativos)} elementos.`);
                mostrar_texto(`A quantidade de zeros é: ${tam(_vetorZeros)} elementos.`);
            break;
            case 7: // Somatório
                var _somatorioPositivos = reduce(vetorPrincipal, (acc, atual) => acc += (atual > 0) ? atual : 0);
                var _somatorioNegativos = reduce(vetorPrincipal, (acc, atual) => acc += (atual < 0) ? atual : 0);
                var _somatorioTodos     = reduce(vetorPrincipal, (acc, atual) => acc += atual);
                mostrar_texto(`Somatório de Todos: ${_somatorioTodos}`);
                mostrar_texto(`Somatório dos Positivos: ${_somatorioPositivos}`);
                mostrar_texto(`Somatório dos Negativos: ${_somatorioNegativos}`);
            break;
            case 8: // Exibir Média e Mediana
                var _mediaDeTodos = mediaDoVetor(vetorPrincipal);
                var _mediaDosPositivos = mediaDoVetor(filtrar(vetorPrincipal, a => a > 0));
                var _mediaDosNegativos = mediaDoVetor(filtrar(vetorPrincipal, a => a < 0));
                if (!isNaN(_mediaDeTodos)) mostrar_texto(`Média de todos: ${_mediaDeTodos}`);
                if (!isNaN(_mediaDosPositivos)) mostrar_texto(`Média dos positivos: ${_mediaDosPositivos}`);
                if (!isNaN(_mediaDosNegativos)) mostrar_texto(`Média dos negativos: ${_mediaDosNegativos}`);
            break;
        }
        
        enter_para_limpar_terminal();
        menu(vetorPrincipal);
        _opcao = obter_numero(`${_pontos} Opcao: `);
    }

    despedida();
}

function menu(_vetor) {
    mostrar_texto_centralizado("# MENU PRINCIPAL #");
    if (tam(_vetor) > 0) {
        mostrar_texto_centralizado("Vetor:");
        var _vetorStr = repetir_string(" ", obter_largura_da_tela() / 2 - tam(_vetor)) + String(_vetor);
        mostrar_texto(_vetorStr);
    }
    const options = [
        "Gerar vetor N posições", 
        "Preencher vetor manualmente item a item",
        "Preencher vetor automaticamente",
        "Limpar Vetor",
        "Transformar vetor: elevar a potência N",
        "Contar: Positivos, Negativos e Zeros",
        "Somatório: De todos, dos negativos, e dos positivos",
        "Exibir Média e Mediana: De todos, dos positivos e dos negativos",
        "Exibir Maior e Menor número",
        "Sortear dois números: um positivo e um negativo",
        "Gerar N grupos de T tamanhos. Não repetir valores",
        "Pedir um novo vetor e verificar se está 100% presente nos números do sistema (e na mesma ordem)",
        "Top N maiores números",
        "Top N menores números",
        "Listar valor médio, e listar números maiores que a Média e Menores que a Média",
        "Somatório da Média dos Números Positivos múltiplos de dois COM o Produto acumulado dos números negativos pares reduzidos à metade",
        "Ordenar os números em ordem crescente",
        "Ordenar em ordem decrescente",
        "Eliminar números múltiplos de N e M (simultâneamente)",
        "Sair"
    ]
    
    let _qntPontos = obter_largura_da_tela() / 10;
    let _pontos = repetir_string(".", _qntPontos)

    let _expandido = (tam(_vetor) > 0);
    if (!_expandido) {
        for (let i = 0; i < 3; i++) {
            mostrar_texto(`${_pontos} ${i+1}. ${options[i]}`);
        }    
    } else if (_expandido) {
        for (let i = 3; i < tam(options) - 1; i++) {
            mostrar_texto(`${_pontos} ${i-2}. ${options[i]}`);
        }    
    }

    // Opção de Sair (0)
    mostrar_texto(`${_pontos} 0. ${options[tam(options) - 1]}`);
}


export function checar_se_opcao_existe_no_menu(_opcao, _estadoDoMenu) {
    // O menu tem dois estados: com array gerado, e sem
    if (_estadoDoMenu == 0) {
        return (_opcao >= 1 && _opcao <= 3)
    } else {
        return (_opcao >= 4 && _opcao <= 20)
    }
}

function gerarNovoVetor(_tamanho = undefined, _valorPadrao = undefined) {
    var tamanho = _tamanho;
    var valorPadrao = _valorPadrao;

    // Estabelecer tamanho
    if (tamanho == undefined)      tamanho = obter_numero("Tamanho do vetor: ");
    var vetor = Array(tamanho);

    // Pedir valor apenas se o argumento for diferente de -1.
    if (valorPadrao != -1) {
        if (valorPadrao == undefined)  valorPadrao = obter_numero("Valor padrao: ");
        vetor = mapear(vetor, () => valorPadrao);
    }

    return vetor;
}

function tentarLimparVetor(vetor) {
    var _novoVetor = vetor;
    mostrar_texto("Tem certeza que deseja limpar o Vetor?");
    var _decisao = "";
    var _tentativas = 0;
    while (_decisao != "N" && _decisao != "S") {
        _tentativas++;
        if (_tentativas < 5) {
            _decisao = tornar_maiusculo(obter_texto("LIMPAR? (S/N) "));
        } else {
            _decisao = "N";
            mostrar_texto("Por favor, voltar quando se decidir.")
        }
    }

    // Limpar caso o usuário confirme
    if (_decisao == "S") {
        _novoVetor = Array(0);
        mostrar_texto("Vetor limpo.")
    }

    return _novoVetor
}

function mediaDoVetor(vetor) {
    var _somaDoVetor = reduce(vetor, (acc, ind) => acc += ind, 0);
    var _tamanhoDoVetor = tam(vetor);
    return _somaDoVetor / _tamanhoDoVetor;
}

function medianaDoVetor(vetor) {
    var _novoVetor = vetor;

    // Ordenar o vetor em ordem crescente
    _novoVetor = ordenarVetor(vetor);

}

function ordenarVetor(vetor, _ordemCrescente = true) {
    _novoVetor = [];
    
    
}

main();