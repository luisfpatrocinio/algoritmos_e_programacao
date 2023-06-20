/**
 * 22. Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
numero de identificação e o peso do boi mais magro e do boi mais gordo.
 */

import { mostrar_texto, obter_numero } from "../M06 Atividade K/utils.js";

function main() {
    let idMagro = -1;
    let pesoMagro = Infinity;
    let idGordo = -1;
    let pesoGordo = 0;

    // Entrada:
    const quantidade = obter_numero("Quantidade de bois: ")

    for (let i = 0; i < quantidade; i++) { 
        let id = obter_numero(`Identificador do boi N${i+1}: `);
        let peso = obter_numero(`Peso do boi (kg): `);
        while (peso < 0) {
            mostrar_texto("Insira um valor positivo!")
            peso = obter_numero(`Peso do boi (kg): `);
        }

        if (peso < pesoMagro) {
            pesoMagro = peso;
            idMagro = id;
        }

        if (peso > pesoGordo) {
            pesoGordo = peso;
            idGordo = id;
        }
    }

    // Saída:
    mostrar_texto(`O ID do boi mais magro é ${idMagro}, com peso ${pesoMagro} kgs.`)
    mostrar_texto(`O ID do boi mais gordo é ${idGordo}, com peso ${pesoGordo} kgs.`)
}

main();
