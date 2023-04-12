 import { question } from "readline-sync";

 /**
  * o estudante contrata um empréstimo, a ser pago após a conclusão do curso.
  * os jursos são calculados na forma de juros simples.
  * a taxa de juros fies seguirá a seguinte regra:
  * de 0 a 1.5 salarios: +10% da SELIC
  * de 1.5 a 2 salários: +15% da SELIC
  * de 2 a 2.5 salários: +20%
  * acima de 2.5 salários: +25%
  * 
  * os cursos tem duração em meses multiplos de 6
  * a renda precisa ser até 3 salarios minimos por pessoa
  * durante o curso o aluno deverá pagar uma parcela fixa de 150 reais a cada 3 meses (que é descontado do juros da divida)
  * após o curso, continuará pagando 150 reais a cada 3 meses, por 18 meses (carencia)
  * após a carencia, o saldo devedor (original + juros - pagamentos de 150) será parcelado em até 4x a duração do curso
  * o valor da parcela do fies deve ser no máximo 10% da renda do aluno, quando já estiver trabalhando
  * 
  * solicitar:
  * duração do curso em anos (ex: 4 ou 2.5)
  * valor da mensalidade
  * taxa selic e salario minimo vigentes
  * renda familiar (em R$) e quantas pessoas na familia
  * ano e semestre de inicio
  * 
  * mostrar:
  * - se está habilitado a contratar (aprovado) ---- OK
  * - valor a ser financiado                    
  * - valor total dos juros
  * - valor total a pagar
  * - quanto será pago durante o curso e na carência
  * - valor da parcela do financiamento (após carencia)
  * - quanto o aluno deverá ter de renda no mínimo ao iniciar o pagamento do financiamento
  * - em que ano/semetre o aluno iniciará e concluirá o pagamento do fies
  */

 function main() {
    // Entrada:
    //#region Pedir Dados
    const duracao_do_curso  = perguntar_numero("Duração do curso, em anos");
    if (duracao_do_curso < 0 || duracao_do_curso % 0.50 != 0) {
        alerta_fail_fast("Duração do curso inválida!");
        return;
    }

    const valor_mensalidade = perguntar_numero("Valor da mensalidade");
    if (valor_mensalidade < 0) {
        alerta_fail_fast("Valor da mensalidade do curso inválida!");
        return;
    }

    let taxa_selic        = perguntar_numero("Taxa SELIC");
    if (taxa_selic < 0) {
        alerta_fail_fast("Valor da TAXA SELIC inválido");
        return;
    } else if (taxa_selic >= 1) {
        taxa_selic / 100;
    }
    console.log(`Taxa SELIC de ${taxa_selic}%.`)

    const salario_minimo    = perguntar_numero("Salário Mínimo atual");
    if (salario_minimo < 0) {
        alerta_fail_fast("Salário mínimo inválido");
        return;
    }

    const renda_familiar    = perguntar_numero("Renda familiar (em R$)");
    if (renda_familiar < 0) {
        alerta_fail_fast("Renda familiar inválida");
        return
    }
    
    const tamanho_familia   = perguntar_numero("Quantidade de pessoas na família");
    if (tamanho_familia < 0) {
        alerta_fail_fast("Quantidade de pessoas na família inválida");
        return
    }

    const ano_inicio        = perguntar_numero("Ano de início do curso")
    if (ano_inicio < 0) {
        alerta_fail_fast("Ano de início de curso inválido");
        return
    }
    const semestre_inicio   = perguntar_numero("Semestre de início do curso (1 ou 2)")
    if (semestre_inicio <= 0 || semestre_inicio > 2) {
        alerta_fail_fast("Semestre de início de curso inválido");
        return
    }
    //#endregion

    // Processamento:
    console.log("");
    console.log("PROCESSSANDO INFORMAÇÕES...");
    console.log("");

    if (!checar_habilitado(renda_familiar, tamanho_familia, salario_minimo)) {
        console.log("Você não está aprovado a participar do programa FIES, por conta da sua renda familiar.")
        return
    }
    
    // Retornar valor do financiamento.
    const valor_financiamento = obter_valor_financiamento(valor_mensalidade, duracao_do_curso);
    console.log(`O valor a ser financiado é de R$${valor_financiamento.toFixed(2)}.`);

    // Valor total dos Juros
    //const renda_em_salarios = obter_numero_de_salarios_minimos(renda_familiar, salario_minimo);
    const juros_total = calcular_juros_total(valor_financiamento, taxa_selic, renda_familiar, tamanho_familia, salario_minimo, duracao_do_curso);
    console.log(`O valor total dos juros é de R$${juros_total.toFixed(2)}.\n --- O valor do financiamento foi de ${valor_financiamento}`);

    // Valor total a pagar
    const valor_total = valor_financiamento + juros_total;
    console.log(`O valor total a pagar será: R$${valor_total.toFixed(2)}.`);

    // Valor a ser pago durante o curso
    const valor_pago_durante = obter_valor_pago_durante(duracao_do_curso);
    console.log(`O valor pago durante o curso será R$${valor_pago_durante.toFixed(2)}.`);

    // Valor pago na carência
    const valor_pago_carencia = obter_valor_pago_durante(1.5);
    console.log(`O valor pago durante a carência será R$${valor_pago_carencia.toFixed(2)}.`);

    // Valor da parcela do financiamento
    const valor_parcela = obter_valor_parcela(duracao_do_curso, valor_financiamento, valor_pago_durante, valor_pago_carencia);
    console.log(`O valor da parcela do financiamento, após a carencia, será de R$${valor_parcela.toFixed(2)}.`);

    // Renda minima necessária
    const renda_minima = obter_renda_minima(valor_parcela);
    console.log(`O valor da renda mínima necessária para iniciar o pagamento é de R$${renda_minima.toFixed(2)}.`);

    // Ano de início e ano de conclusão:
    let ano_final = ano_inicio + Math.floor(duracao_do_curso);
    let semestre_final;
    if (duracao_do_curso % 1 > 0) {
        if (semestre_inicio == 1) {
            semestre_final = 2;
        } else {
            semestre_final = 1;
            ano_final = ano_final + 1;
        }
    } else {
        semestre_final = semestre_inicio;
    }
    console.log(`O aluno iniciará o curso no ${semestre_inicio} semestre de ${ano_inicio}, e terminará no ${semestre_final} de ${ano_final}.`)
 }

function checar_habilitado(_renda, _tamanho, _salario) {
    // a renda precisa ser até 3 salarios minimos por pessoa
    const renda_por_pessoa = _renda / _tamanho;
    return (renda_por_pessoa <= _salario * 3)
}

// Calcular valor do curso
function obter_valor_financiamento(_mensalidade, _duracao) {
    // transformar a duração em anos para meses
    const meses = converter_anos_para_meses(_duracao);

    // Retornar valor da mensalidade x número de meses
    return _mensalidade * meses;
}

function converter_anos_para_meses(_anos) {
    return _anos * 12;
}

function obter_numero_de_salarios_minimos(_renda, _salario) {
    return _renda / _salario;
}

function calcular_juros_total(_valor, _taxaSelic, _renda, _tamanho, _salario_minimo, _anos) {
    const renda_por_pessoa = _renda / _tamanho;
    const taxa = calcular_taxa(renda_por_pessoa, _taxaSelic, _salario_minimo);
    const juros = _valor * taxa * _anos;

    return juros;

    //return  _valor * _multiplicador * _anos;
}

function calcular_taxa(_renda_por_pessoa, _taxaSelic, _salario_minimo) {
    let _multiplicador;
    if (_renda_por_pessoa < 1.5 * _salario_minimo) {
        _multiplicador = 0.10 * _taxaSelic;
    } else if (_renda_por_pessoa < 2 * _salario_minimo) {
        _multiplicador = 0.15 * _taxaSelic;
    } else if (_renda_por_pessoa < 2.5 * _salario_minimo) {
        _multiplicador = 0.20 * _taxaSelic;
    } else {
        _multiplicador = 0.25 * _taxaSelic;
    }

    return _multiplicador
}

function obter_valor_pago_durante(_duracao) {
    const meses = converter_anos_para_meses(_duracao);
    return Math.floor(meses / 3) * 150;
}

function alerta_fail_fast(_alerta) {
    console.log(`!!!> ${_alerta} <!!!`);
}

function perguntar_numero(_pergunta) {
    return Number(question(`${_pergunta}: `));
}

function obter_valor_parcela(_duracao, _valorTotal, _valorPagoDurante, _valorPagoCarencia) {
    const valor = _valorTotal - _valorPagoDurante - _valorPagoCarencia;
    const tempo = converter_anos_para_meses(_duracao) * 4;
    return valor / tempo;
}

function obter_renda_minima(_valorParcela) {
    return _valorParcela * 10;
}

 main();