import { question } from "readline-sync";

export function obter_numero(_label = "Digite um número: ") {
    let numero = Number(question(_label));
    while (isNaN(numero)) {
        numero = Number(question(_label));
    }
    return numero
}

export function mostrar_texto(_texto) {
    console.log(_texto);
}

export function eh_par(_numero) {
    return _numero % 2 == 0
}

export function eh_multiplo(_candidato, _numero) {
    return (_candidato % _numero == 0)
}

export function eh_impar(_numero) {
    return _numero % 2 != 0
}

export function eh_primo(_numero) {
    if (_numero <= 1) {
        return false;
    }
    
    // Verifica se o número é divisível por qualquer número de 2 até a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(_numero); i++) {
        if (_numero % i === 0) {
            return false;
        }
    }
    
    return true;
}