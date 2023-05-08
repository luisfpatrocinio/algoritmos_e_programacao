import { question } from "readline-sync"

function main() {
    // Obter número de jogadas
    const numero_de_testes = Number(question(""))

    // Inicializa a lista de valores
    let valores = []
    let resultados = []

    // Obter valores de cada jogada
    for (let i = 0; i < numero_de_testes; i++) {
        valores.push(question(""))
        valores.push(question(""))
    }
    
    // Definir vencedores de cada jogo
    for (let i = 0; i < valores.length; i += 2) {
        let jogador1 = valores[i]
        let jogador2 = valores[i + 1]
        let resultado = obter_vencedor(jogador1, jogador2)
        resultados.push(resultado)
    }

    // Exibir resultados
    for (let i = 0; i < resultados.length; i++) {
        console.log(resultados[i])
    }
}

function obter_vencedor(jogador1, jogador2) {
    if (jogador1 == "ataque") {
        if ((jogador2 == "pedra") || (jogador2 == "papel")) {
            return "Jogador 1 venceu"
        }
        if (jogador2 == "ataque") {
            return "Aniquilacao mutua"
        }
    }
    if (jogador1 == "pedra") {
        if (jogador2 == "papel") return "Jogador 1 venceu"
        if (jogador2 == "pedra") return "Sem ganhador"
        if (jogador2 == "ataque") return "Jogador 2 venceu"
    }
    if (jogador1 == "papel") {
        if (jogador2 == "ataque") return "Jogador 2 venceu"
        if (jogador2 == "papel") return "Ambos venceram"
        if (jogador2 == "pedra") return "Jogador 2 venceu"
    }
}

main()