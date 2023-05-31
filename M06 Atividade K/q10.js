/**
 10. Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.
 */

 import { obter_numero, mostrar_texto, eh_impar } from "./utils.js";

 function main() {
     const limiteSuperior = obter_numero("Limite Superior: ");
     const limiteInferior = obter_numero("Limite Inferior: ");
 
     for (let i = limiteInferior; i <= limiteSuperior; i++) {
         if (eh_impar(i)) {
             mostrar_texto(i);
         }
     }
 }
 
 main();