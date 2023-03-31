/**
 * Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
escreva “Reprovado”.
 */

import {question} from 'readline-sync'

function main() {
    // Entrada
    const nota1 = perguntar_numero("Primeira nota");
    const nota2 = perguntar_numero("Segunda nota");

    const media = calcular_media(nota1, nota2);
    console.log(`Sua média foi ${media},`);
    if (media >= 7) {
        console.log("APROVADO");
    } else {
        // Prova final:
        const nota_pf = perguntar_numero("Nota da Prova Final");
        if (calcular_media(media, nota_pf) >= 5) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    }
}

// Função para calcular média
function calcular_media(num1, num2) {
    return (num1 + num2)/2
}

// Função de método de entrada do usuário
function perguntar_numero(txt) {
    return Number(question(`${txt}: `));
}

// Executar código principal
main()