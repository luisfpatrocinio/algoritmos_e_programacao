import {question} from 'readline-sync'

/**
 * 2. Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.
 */

// Entrada
const num1 = Number(question("Primeiro número: "))
const num2 = Number(question("Segundo número: "))

// Processamento


// Saída
if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}.`)
} else if (num2 > num1) {
    console.log(`${num2} é maior que ${num1}.`)
} else {
    console.log("Os dois números são iguais.")
}