def main():
    # Entrada
    hora_inicial, minuto_inicial, hora_final, minuto_final = map(int, input().split())

    # Processamento
    if (hora_inicial < hora_final):
        duracao_hora = hora_final - hora_inicial
    else:
        duracao_hora = (24 - hora_inicial) + hora_final

    if (minuto_inicial < minuto_final):
        duracao_minuto = minuto_final - minuto_inicial
    else:
        duracao_minuto = (60 - minuto_inicial) + minuto_final
        duracao_hora -= 1

    if (duracao_minuto == 60):
        duracao_minuto = 0
        duracao_hora += 1

    if (duracao_hora == 24 and duracao_minuto > 0):
        duracao_hora = 0

    # Saída
    print(f"O JOGO DUROU {duracao_hora} HORA(S) E {duracao_minuto} MINUTO(S)")

main()