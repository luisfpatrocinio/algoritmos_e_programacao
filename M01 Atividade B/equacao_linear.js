import {question} from "readline-sync";

/**
 * Um sistema de equações lineares do tipo: 
 *      ax + by = c
 *      dx + ey = f
 * pode ser resolvido segundo mostrado abaixo 
 *      x = (ce - bf) / (ae - bd)
 *      y = (af - cd) / (ae - bd)
 * escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.
 */

// Entrada
const a = Number(question("Valor de a:"));
const b = Number(question("Valor de b:"));
const c = Number(question("Valor de c:"));
const d = Number(question("Valor de d:"));
const e = Number(question("Valor de e:"));
const f = Number(question("Valor de f:"));

// Processamento
const x = (c * e - b * f) / (a * e - b * d);
const y = (a * f - c * d) / (a * e - b * d);

// Saida
console.log("Os valores de x e y, de acordo com os coeficientes fornecidos, são", x, "e", y);