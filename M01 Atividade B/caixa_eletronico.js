import {question} from "readline-sync";

/**
 * 45. Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
    decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
    saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
    disponíveis fossem distribuídas em número mínimo possível. 
    
    Por exemplo, se a maquina só dispõe de notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia 
    solicitada de R$ 87, o algoritmo deveria indicar uma nota de R$ 50, três notas de R$ 10, uma nota de 
    R$ 5 e duas notas de R$ 1. Escreva um algoritmo que receba o valor da quantia solicitada e retorne a 
    distribuição das notas de acordo com o critério da distribuição ótima.
 */

// Entrada
console.log("Informe o valor a ser sacado.");
const valor = Number(question("Valor: "));

// Processamento
const qnt50 = Math.floor(valor / 50);
const qnt10 = Math.floor((valor - qnt50 * 50) / 10);
const qnt5  = Math.floor((valor - qnt50 * 50 - qnt10 * 10)/ 5);
const qnt1  = valor - qnt50 * 50 - qnt10 * 10 - qnt5 * 5;

// Saida
console.log("RECEBA SEU DINHEIRO:");
console.log(qnt50, "notas de R$50,00.");
console.log(qnt10, "notas de R$10,00.");
console.log(qnt5, "notas de R$5,00.");
console.log(qnt1, "notas de R$1,00.");