import {question} from 'readline-sync'

function main() {
    let idMaior = 0;
    let pesoMaior = 0;
    let idMenor = 0;
    let pesoMenor = 99999;
    let id = -1;
    while (id != 0) {
        id = Number(question("ID: "))
        if (id == 0) break
        let peso = Number(question("Peso:" ));
        if (peso > pesoMaior) {
            idMaior = id;
            pesoMaior = peso;
        }
        if (peso < pesoMenor) {
            idMenor = id;
            pesoMenor = peso;
        }
    }
    console.log(`Mais pesado: ${idMaior} com ${pesoMaior}kgs`)
    console.log(`Mais leve: ${idMenor} com ${pesoMenor}kgs`)
}

main()
