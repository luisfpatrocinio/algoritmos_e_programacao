import { obter_largura_da_tela } from "./generalUtils.js";

export async function drawCar(_x, _y) {    
    const carroStr = [
    "     ______",
    " ___//  __  \___",
    "|      /  \      |",
    "'-(@)------(@)-'"
    ]

    for (var i = 0; i < carroStr.length; i++) {
        var x = _x;
        var y = _y + i;
        setCursorPosition(x, y);
        var _tamanho = obter_largura_da_tela() - _x;
        process.stdout.write(carroStr[i].slice(0, _tamanho));
    }
}

export function setCursorPosition(_x, _y) {
    process.stdout.write(`\x1b[${_y};${_x}H`);    
}
