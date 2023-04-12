import { question } from "readline-sync";

/**
 * Moto custa R$13.674,00 - vários modelos e valores disponíveis
 * O cliente paga parcelas mensalmente, ou
 * O cliente pode dar uma lance (entrada) para resgatar o bem logo
 *      O valor do lance pode ser usado para:
 *          reduzir o prazo e manter parcela
 *          reduzir parcela e manter o prazo
 * 
 */

const nome_do_bot = "CredGPT"

async function main() {
    cabecalho("CREDIÁRIO");

    await mostrar_mensagem("Teste teste teste teste");

    const valor_do_bem              = perguntar_numero("Valor");
    const prazo                     = perguntar_numero("Prazo");
    const taxa_de_adm               = perguntar_numero("Taxa ADM");
    const valor_lance_proposto      = perguntar_numero("Valor do lance");
    const prazo_ou_parcela          = perguntar_numero("Prazo");
    const renda_mensal              = perguntar_numero("Renda");
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

// Executar função principal do programa.
main();