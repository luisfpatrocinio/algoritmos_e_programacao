var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
    let numerosPositivos = 0;
    let numerosNegativos = 0;
    let numerosPares = 0;
    let numerosImpares = 0;
    for (let i = 0; i < 5; i++) {
        let number = Number(lines.shift());
        if (number % 2 == 0) {
            numerosPares++;
        } else {
            numerosImpares++;
        }
        if (number > 0) {
            numerosPositivos++;
        } else if (number < 0) {
            numerosNegativos++;
        }
    }

    console.log(numerosPares + " valor(es) par(es)");
    console.log(numerosImpares + " valor(es) impar(es)");
    console.log(numerosPositivos + " valor(es) positivo(s)");
    console.log(numerosNegativos + " valor(es) negativo(s)");
}

main()