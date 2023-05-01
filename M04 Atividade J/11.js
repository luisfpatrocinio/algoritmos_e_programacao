/**
 * 11. Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:

Média Final = ((2 * nota1) + (3 * nota2) + (5 * nota3)) / 10

Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o
aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total
de alunos da turma.
 */

import { ajeitar_janela, definir_nome_bot, exibir_cabecalho, mostrar_mensagem, perguntar_numero } from "../utils.js";
import { question } from 'readline-sync';

async function main() {
    definir_nome_bot("PatroNET");
    ajeitar_janela();
    exibir_cabecalho("11. Aprovado ou Reprovado");

    await mostrar_mensagem("Bem vindo ao sistema de notas. Vamos precisar de seus dados e suas notas, para avaliarmos e registrarmos sua aprovação.");

    let total_de_alunos = 0;
    let total_aprovados = 0;
    let total_reprovados = 0;
    
    await mostrar_mensagem("Por favor, insira sua matrícula. (0 = cancelar)");
    let matricula = await perguntar_numero("Matricula");
    while (matricula != 0) {
        const nota1 = await perguntar_nota("Nota 1");
        const nota2 = await perguntar_nota("Nota 2");
        const nota3 = await perguntar_nota("Nota 3");
        const media = obter_media_final(nota1, nota2, nota3);

        total_de_alunos++;
        await mostrar_mensagem(`A média final do aluno é de: ${media}.`);
        await mostrar_mensagem(obter_mensagem_a_partir_da_nota(media));

        const nome = obter_nome_aleatorio_a_partir_da_matricula(matricula);

        if (checar_aprovacao(media)) {
            // Aluno aprovado
            total_aprovados++;
            await mostrar_mensagem(`Aluno(a) ${nome}, com matrícula ${matricula}, foi aprovado!`)
        } else {
            // Aluno reprovado
            total_reprovados++;
            await mostrar_mensagem(`Aluno(a) ${nome}, com matrícula ${matricula}, foi reprovado!`)
        }

        await mostrar_mensagem("Insira uma nova matrícula, ou digite 0 para cancelar.")
        matricula = await perguntar_numero("Matricula");
    }

    await mostrar_mensagem(`Fim da apuração de alunos. \nTotal de alunos: ${total_de_alunos}. \nAprovados: ${total_aprovados}. \nReprovados: ${total_reprovados}.`)

}

async function perguntar_nota(label) {
    let nota = 0;
    nota = await perguntar_numero(label);
    while (nota < 0 || nota > 10) {
        await mostrar_mensagem(`A nota inserida não é uma nota válida.`)
        nota = await perguntar_numero(label);
    }
    return nota
}

function obter_media_final(n1, n2, n3) {
    //Média Final = ((2 * nota1) + (3 * nota2) + (5 * nota3)) / 10
    return ((2 * n1) + (3 * n2) + (5 * n3)) / 10;
}

function obter_mensagem_a_partir_da_nota(media) {
    let mensagem = "";

    if (media >= 10) {
        mensagem = "Parabéns, você tirou a nota máxima! Você é um gênio!";
    } else if (media >= 9) {
        mensagem = "Quase lá! Só faltou um pouquinho para a nota máxima.";
    } else if (media >= 8) {
        mensagem = "Muito bem! Você mandou bem nessa prova.";
    } else if (media > 7) {
        mensagem = "Nota 7? Isso é o que eu chamo de passar com louvor!";
    } else if (media == 7) {
        mensagem = "Você sabia que 7 é a nota do estudante preguiçoso?";
    } else if (media >= 6) {
        mensagem = "Não foi dessa vez que você virou a mesa, mas continue tentando.";
    } else if (media >= 5) {
        mensagem = "Por pouco! Você não passou.";
    } else if (media >= 4) {
        mensagem = "Hmm, melhor do que nada, né?";
    } else if (media >= 3) {
        mensagem = "Tá na hora de estudar mais um pouquinho, hein?";
    } else if (media >= 2) {
        mensagem = "Que nota baixa! Vamos estudar mais e melhorar isso!";
    } else if (media >= 1) {
        mensagem = "Eu esperava mais de você, mas ainda há tempo para melhorar.";
    } else if (media > 0) {
        mensagem = "Essa nota não foi nem de longe a esperada. Hora de focar nos estudos!";
    } else if (media == 0) {
        mensagem = "Oh não, você tirou nota 0! É hora de estudar mais e dar a volta por cima!";
    } else {
        mensagem = "Algo deu errado! Verifique se suas notas estão corretas.";
    }

    return mensagem;
}

function obter_nome_aleatorio_a_partir_da_matricula(matricula) {
    let fator = matricula % 20;
    let nome = "";
    if (fator == 0) nome = "Didi Mocó";
    else if (fator == 1) nome = "Maria do Bairro";
    else if (fator == 2) nome = "Fernando Beira-Mar";
    else if (fator == 3) nome = "Margarida";
    else if (fator == 4) nome = "Zé do Pulo";
    else if (fator == 5) nome = "Mafalda";
    else if (fator == 6) nome = "Juquinha";
    else if (fator == 7) nome = "Zezinho da Física";
    else if (fator == 8) nome = "Fernanda";
    else if (fator == 9) nome = "Chico Bento";
    else if (fator == 10) nome = "Jurema";
    else if (fator == 11) nome = "Renato Russo";
    else if (fator == 12) nome = "Nina Simone";
    else if (fator == 13) nome = "Mônica";
    else if (fator == 14) nome = "Cebolinha";
    else if (fator == 15) nome = "Dona Florinda";
    else if (fator == 16) nome = "Fausto Silva";
    else if (fator == 17) nome = "Sílvio Santos";
    else if (fator == 18) nome = "Pedrinho M.";
    else if (fator == 19) nome = "Lázaro";
    else nome = "Aluno sem nome";
    return nome;
}

function checar_aprovacao(media) {
    return media > 7
}

// Executar programa
main();