import {question} from "readline-sync";

/**
 * 42. Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
    ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.
    d = raiz de ((x2 - x1) ao quadrado + (y2 - y1) ao quadrado)
 */

// Entrada
console.log("Vamos calcular a distância entre dois pontos.")
const x1 = Number(question("Coordenada X do Ponto 1:"));
const y1 = Number(question("Coordenada Y do Ponto 1:"));
const x2 = Number(question("Coordenada X do Ponto 2:"));
const y2 = Number(question("Coordenada Y do Ponto 2:"));

// Processamento
const cateto1 = Math.abs(x2 - x1);
const cateto2 = Math.abs(y2 - y1);

// Outra forma de elevar o quadrado é (cateto1 ** 2)
const distancia = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));

// Saida
console.log("A distância entre os dois pontos é de:", distancia);