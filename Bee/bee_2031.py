def main():
    # Obter números de jogadas
    numero_de_testes = int(input())

    # Inicializa a lista de valores
    valores = []
    resultados = []

    # Obter valores de cada jogada
    for i in range(numero_de_testes):
        valores.append(input())
        valores.append(input())
    
    # Definir vencedores de cada jogo
    for i in range(0, len(valores), 2):
        jogador1 = valores[i]
        jogador2 = valores[i + 1]
        resultado = obter_vencedor(jogador1, jogador2)
        resultados.append(resultado)        

    # Exibir resultados
    for resultado in resultados:
        print(resultado)

def obter_vencedor(jogador1, jogador2):
    if (jogador1 == "ataque"):
        if ((jogador2 == "pedra") or (jogador2 == "papel")):
            return "Jogador 1 venceu"
        if (jogador2 == "ataque"):
            return "Aniquilacao mutua"
    if (jogador1 == "pedra"):
        if (jogador2 == "papel"):
            return "Jogador 1 venceu"
        if (jogador2 == "pedra"):
            return "Sem ganhador"
        if (jogador2 == "ataque"):
            return "Jogador 2 venceu"
    if (jogador1 == "papel"):
        if (jogador2 == "ataque"):
            return "Jogador 2 venceu"
        if (jogador2 == "papel"):
            return "Ambos venceram"
        if (jogador2 == "pedra"):
            return "Jogador 2 venceu"



main()