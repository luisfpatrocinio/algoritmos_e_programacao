import {question} from "readline-sync";

/**
 * Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
fuma, o nº de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).
 */

// Entrada
const anos = Number(question("Anos que fuma:"));
const cigarrosDia = Number(question("Cigarros por dia:"));
const precoCarteira = Number(question("Preço da carteira:"));

// Processamento
const diasTotal = anos * 365;
const cigarrosTotal = cigarrosDia * diasTotal;
const carteiras = Math.ceil(cigarrosTotal / 20);
const valorGasto = precoCarteira * carteiras;

// Saida
console.log("Você já gastou R$", valorGasto.toFixed(2), "com cigarros.");