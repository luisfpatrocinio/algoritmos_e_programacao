import {question} from "readline-sync";

/**
 * 12. Leia o salário de um trabalhador e 
 * escreva seu novo salário com um aumento de 25%
 */

// Entrada
const salario = Number(question("Informe o salário: ")).toFixed(2);

// Processamento
let resultado = salario * 1.25;
resultado = resultado.toFixed(2);

// Saída
console.log("O salário R$", salario, "após aumento de 25% é de: R$", resultado);