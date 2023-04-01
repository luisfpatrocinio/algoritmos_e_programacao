import {question} from 'readline-sync'

/**
 * Alimentar = abastecer o corpo com calorias (combustível)
 * Esforço físico consome calorias.
 * 
 * Ingestão Calórica:
    - Proteínas 4 calorias por 1g
    - Carboidratos 4 calorias por 1g
    - Gorduras 9 calorias por 1g

 * Necessidade Calórica Diária (Adultos em kcal) para Manter o Peso:
    - Homem → 662 – (9,53 x idade) + AF x (15,91 x peso ) + (539,6 x altura)
    - Mulher → 354 – (6,91 x idade) + AF x (9,36 x peso) + (726 x altura)


 */

const nome_do_bot = "KcalGPT"

async function main() {
    cabecalho("BALANÇA CALÓRICA");

    await mostrar_mensagem(`Olá! Me chamo ${nome_do_bot} e hoje vou te ajudar a montar uma dieta. Como você se chama?`);
    const nome = question(">>> Nome: ");

    await mostrar_mensagem(`Ah sim, e qual é seu gênero, ${nome}? Digite M para masculino ou F para feminino.`)
    const genero = question(">>> Genero (M/F): ").toUpperCase();    // Garantir que o valor digitado seja maiúsculo.

    // Fail fast: Gênero inválido
    if (genero !== "M" && genero !== "F") {
        await mostrar_mensagem(`"${genero}" não é um gênero válido.`);
        encerramento();
        return
    }

    await mostrar_mensagem(`Okey, e qual sua idade?`);
    let idade = Math.floor(perguntar_numero("Idade"));
    // Fail fast: Idade inválida
    if (idade === undefined || idade === NaN) {
        await mostrar_mensagem(`Você inseriu uma idade inválida.`);
        encerramento();
        return
    }

    // Tratamento de erro: Idade negativa
    if (idade < 0) {
        idade = Math.abs(idade);
        await mostrar_mensagem(`Acredito que você quis dizer que tem ${idade} anos, correto?`);
    }

    // Obter tipo do usuário conforme sua idade e gênero
    const artigo_do_usuario = obter_artigo(genero);
    const tipo_do_usuario = obter_tipo_do_usuario(genero, idade);
    await mostrar_mensagem(`Legal, então você é ${artigo_do_usuario} ${tipo_do_usuario}! Qual seu peso e altura?`)

    let peso = perguntar_numero("Peso (kg)");
    // Fail fast: Peso inválido
    if (peso == 0) {
        await mostrar_mensagem("Não entendi. Você não tem peso? Volte sempre!");
        encerramento();
        return
    }

    if (peso === NaN) {
        await mostrar_mensagem("Peso inválido!");
        encerramento();
        return
    }

    if (peso < 0) {
        peso = Math.abs(peso);
        await mostrar_mensagem(`Certo, você quis dizer que tem ${peso} kgs.`);
    }

    let altura = perguntar_numero("Altura (m)");
    // Fail Fast: Altura inválida
    if (altura <= 0) {
        await mostrar_mensagem("Você inseriu uma altura inválida!");
        encerramento();
        return
    }

    // Tratamento: valor > 100 indica que o usuário pode ter colocado altura em centímetros
    if (altura > 100) {
        altura = altura / 100;
        await mostrar_mensagem(`Eu pedi em metros, mas acho que você colocou sua altura em centímetros.\nAcredito que você tenha ${altura}m, não é isso?`);
    }

    const qualidade_da_altura = obter_qualidade_da_altura(altura, genero);

    // Perfil de Atividade Física:
    await mostrar_mensagem(`Como você é ${qualidade_da_altura}! Agora preciso que você informe seu Perfil de Atividade Física.\nDigite: 1 - Sedentário, 2 - Pouco Ativo, 3 - Ativo, 4 - Muito Ativo`);
    const perfil = Math.floor(perguntar_numero("Perfil"));

    // Fail Fast: perfil inválido
    if (perfil < 1 && perfil > 4) {
        await mostrar_mensagem("O PAF precisava ser um número de 1 a 4. Volte novamente mais tarde!");
        encerramento();
        return
    }

    // Processamento: Obter AF
    const af = obter_af_a_partir_do_perfil(perfil, genero);
    const perfil_string = obter_perfil_do_usuario_string(perfil, genero);

    // Processamento: Obter Necessidade Calórica Diária para Manter o Peso
    const necessidade_calorica_diaria = obter_necessidade_calorica_diaria(genero, idade, af, peso, altura);

    // Entrada: Ganhar ou Perder Peso?
    await mostrar_mensagem(`Então você é ${artigo_do_usuario} ${tipo_do_usuario} ${qualidade_da_altura} e ${perfil_string}!\nSabia que pessoas com seu perfil consomem, em média, ${necessidade_calorica_diaria} kcal apenas para manter o corpo funcionando?\nFalando em consumo de calorias, você quer ganhar ou perder peso?\nDigite: 1 - Ganhar peso, 2 - Perder peso`)
    const desejo = perguntar_numero("Ganhar ou perder?");

    let ganhar_ou_perder_string;
    if (desejo === 1) {
        ganhar_ou_perder_string = "ganhar";
    } else if (desejo === 2) {
        ganhar_ou_perder_string = "perder";
    } else {
        // Fail Fast:
        await mostrar_mensagem("Resposta inválida. Era só digitar 1 ou 2.");
        encerramento();
        return;
    }

    // Quantos quilos ganhar/perder?
    await mostrar_mensagem(`Entendi, ${nome}, quantos kgs você deseja ${ganhar_ou_perder_string}?`);
    let ganho_ou_perda_desejado = perguntar_numero(`Quantidade de kg a ${ganhar_ou_perder_string}`);
    
    // Tratamento: ganho/perda negativo
    if (ganho_ou_perda_desejado < 0) {
        ganho_ou_perda_desejado = Math.abs(ganho_ou_perda_desejado);
        await mostrar_mensagem(`Acho que você errou ao digitar. Você quis dizer que quer ${ganhar_ou_perder_string} ${ganho_ou_perda_desejado}, certo?`)
    }

    // Quantas semanas para esse objetivo?
    await mostrar_mensagem(`Em quantas semanas você deseja ${ganhar_ou_perder_string} esses ${ganho_ou_perda_desejado} kgs?`);
    const semanas = perguntar_numero("Semanas");

    let calorias_necessarias = converter_kg_para_cal(ganho_ou_perda_desejado);
    calorias_necessarias = calorias_necessarias - necessidade_calorica_diaria * 7;

    const kgs_por_semana = ganho_ou_perda_desejado / semanas;
    const calorias_por_semana = converter_kg_para_cal(kgs_por_semana);

    // Informar quantos quilos deve perder por semana ---- correspondendo a N kcal semanais.
    await mostrar_mensagem(`Certo. Se você quer ${ganhar_ou_perder_string} ${ganho_ou_perda_desejado} kgs em ${semanas} semanas, você deve ${ganhar_ou_perder_string} ${kgs_por_semana.toFixed(3)} kgs por semana, algo em torno de ${calorias_por_semana} kcal por semana.`);

    // Informar quantas calorias ele deve consumir a mais ou a menos DIARIAMENTE
    const kcal_diarias = obter_kcal_diarias(calorias_necessarias, semanas);
    await mostrar_mensagem(`Seguindo seu plano, você precisará ${ganhar_ou_perder_string} ${kcal_diarias} kcal por dia.`);

    const kcal_proteinas = kcal_diarias * 0.40;
    const kcal_carboidratos = kcal_diarias * 0.40;
    const kcal_gorduras = kcal_diarias * 0.20;

    const gramas_proteinas = Math.round(kcal_proteinas / 4);
    const gramas_carboidratos = Math.round(kcal_carboidratos / 4);
    const gramas_gorduras = Math.round(kcal_gorduras / 9);

    // Apresentar a nova dieta DIÁRIA: 40% proteinas + 40% carboidratos + 20% gorduras
    // os valores devem ser mostrados em gramas
    await mostrar_mensagem(`Elaborei uma dieta diária para você. Consiste em:\n${gramas_proteinas}g de proteína,\n${gramas_carboidratos}g de carboidratos, e\n${gramas_gorduras}g de gorduras.`);

    // Exibir alerta caso a variação semanal seja > 1kg - caso contrário: mensagem positiva.
    if (kgs_por_semana > 1) {
        await mostrar_mensagem(`Entretanto, ${nome}, preciso te alertar. Não faz bem ${artigo_do_usuario} ${tipo_do_usuario} como você tentar ${ganhar_ou_perder_string} ${kgs_por_semana} kgs por semana, pois isso pode comprometer sua saúde.`);
    } else {
        await mostrar_mensagem(`Quem acredita sempre alcança. Foco, força, e fé.`)
    }

    await mostrar_mensagem("Espero ter sido útil! Boa sorte na dieta!")
    encerramento();

}

function cabecalho(_cab) {
    console.log(`### ${_cab} ###`);
}

function mostrar_mensagem(_mensagem) {
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
//console.log(`\n${nome_do_bot}: ${_mensagem}`);

function perguntar_numero(_pergunta) {
    return Number(question(`>>> ${_pergunta}: `));
}

function encerramento() {
    console.log("\n### ENCERRANDO PROGRAMA ###\n");
}

function obter_artigo(_genero) {
    if (_genero === "M") {
        return "um"
    } else return "uma";
}

function obter_tipo_do_usuario(_genero, _idade) {
    let idade_bb = 29;
    if (_genero === "M") {
        if (_idade < idade_bb) {
            return "bebêzinho"
        } else {
            return "rapazinho"
        }
    } else {
        if (_idade < idade_bb) {
            return "bebêzinha"
        } else {
            return "mocinha"
        }
    }
}

function obter_qualidade_da_altura(_altura, _genero) {
    let _qualidade;
    if (_altura < 1.50) _qualidade = "anã";
    else if (_altura < 1.60) _qualidade = "baixinh";
    else if (_altura < 1.65) _qualidade = "baix";
    else if (_altura < 1.71) _qualidade = "médi";
    else if (_altura < 1.86) _qualidade = "alt";
    else if (_altura < 1.91) _qualidade = "muito alt";
    else _qualidade = "gigante";

    if (_genero === "M") {
        if (_qualidade != "gigante") {
            _qualidade += "o";
        }
    }
    return _qualidade
}

function obter_perfil_do_usuario_string(_perfil, _genero) {
    let _artigo = "o";
    if (_genero === "F") _artigo = "a";

    if (_perfil === 1) return "sedentári" + _artigo;
    if (_perfil === 2) return "pouco ativ" + _artigo;
    if (_perfil === 3) return "ativ" + _artigo;
    if (_perfil === 4) return "muito ativ" + _artigo;
}

function converter_kg_para_cal(_kg) {
    return _kg * 7700;
}

function converter_semanas_para_dias(_semanas) {
    return _semanas * 7;
}

function obter_kcal_diarias(_kcal, _semanas) {
    const dias = converter_semanas_para_dias(_semanas);
    return _kcal / dias;
}

function obter_af_a_partir_do_perfil(_perfil, _genero) {
    if (_genero === "M") {
        if (_perfil === 1) return 1.00
        if (_perfil === 2) return 1.11
        if (_perfil === 3) return 1.25
        if (_perfil === 4) return 1.48
    } else {
        if (_perfil === 1) return 1.00
        if (_perfil === 2) return 1.12
        if (_perfil === 3) return 1.27
        if (_perfil === 4) return 1.45
    }
}

function obter_necessidade_calorica_diaria(_genero, _idade, _af, _peso, _altura) {
    if (_genero == "M") {
        // Homem:
        return Math.round(662 - (9.53 * _idade) + _af * (15.91 * _peso) + (539,6 * _altura));
    } else {
        // Mulher:
        return Math.round(354 - (6.91 * _idade) + _af * (9.36 * _peso) + (726 * _altura));
    }
}

function converter_kcal_para_gramas() {

}

main();