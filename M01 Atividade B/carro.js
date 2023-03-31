import {question} from "readline-sync";

/**
 * 41. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
    distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
    seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
    escreva o custo ao consumidor
 */

// Entrada
console.log("Insira o valor do custo de fábrica do carro, para calcular o valor do custo ao consumidor.");
const custoDeFabrica = Number(question("Custo:"));

// Processamento
const percentDistribuidor = 0.28;
const distribuidor = percentDistribuidor * custoDeFabrica;
const percentImpostos = 0.45;
const impostos = percentImpostos * custoDeFabrica;

const custoAoConsumidor = custoDeFabrica + distribuidor + impostos;

// Saida
console.log("Custo de fábrica:", "R$" + custoDeFabrica.toFixed(2));
console.log("+ Percentagem do distribuidor " + "(" +String(percentDistribuidor)+ "):", "+R$" + String(distribuidor.toFixed(2)));
console.log("+ Impostos " + "(" +String(percentImpostos)+ "):", "+R$" + String(impostos.toFixed(2)));
console.log("O valor total do custo ao consumidor é de", Number(custoAoConsumidor).toFixed(2));
