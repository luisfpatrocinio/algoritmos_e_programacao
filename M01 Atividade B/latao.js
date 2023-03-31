import {question} from "readline-sync";

/**
 * . Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
    quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
    pelo usuário
 */

// Entrada
const latao = Number(question("Quantidade desejada de latão, em kg:"));

// Processamento
const cobre = 0.70 * latao;
const zinco = 0.30 * latao;

// Saida
console.log("A necessária é de", cobre, "kg de cobre, e", zinco, "kg de zinco.");