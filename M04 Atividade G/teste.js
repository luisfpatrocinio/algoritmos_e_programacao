import { exibir_texto_sem_pular_linha } from "../utils.js";

function main() {
    let numero = 0;
    while (true) {
        numero += 0.15;
        let _x = "a".repeat(Math.abs(Math.sin(numero)) * 50 + 1);
        console.log(_x);
        setTimeout(main, 60);
    }

}

main();