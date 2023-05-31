import { mostrar_texto } from "./utils.js";

function main() {
    mostrar_texto("Tabuada");
    for (let i = 1; i <= 10; i++) {
        mostrar_texto(`Tabuada de ${i}`);
        for (let j = 0; j <= 10; j++) {
            mostrar_texto(`${i} x ${j} = ${i * j}`);
        }
        mostrar_texto(" --- ");
    }
}

main();