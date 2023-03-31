import * as readsync from 'readline-sync'

/**
 * 6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
 */

// Entrada
console.log("Vamos converter a velocidade em m/s para km/h.");
const velocidade_ms = readsync.question('Digite a velocidade desejada em m/s: ');

// Processamento
const velocidade_kmh = velocidade_ms * 3.6;

// Saída
console.log(velocidade_ms, 'm/s equivale a ', velocidade_kmh, 'km/h.');
