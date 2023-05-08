import { question } from "readline-sync";   

function main() {
    const raio = Number(question(""));;
    const area = calcular_area(raio);
    console.log(`A=${area.toFixed(4)}`);
}

function calcular_area(raio) {
    return raio ** 2 * 3.14159
}

main()