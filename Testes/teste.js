//xvar input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const raio = parseInt(lines.shift());
const area = 3.14159*raio^2;

console.log(`A=${area}`);