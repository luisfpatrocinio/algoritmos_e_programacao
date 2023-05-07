def main():
    # Entrada: obter horaInicial, minutoInicial, horaFinal, minutoFinal numa lista de inteiros
    horaInicial, minutoInicial, horaFinal, minutoFinal = map(int, input().split())

    # Acabando no mesmo dia
    if (horaInicial < horaFinal):
        horas = horaFinal - horaInicial
    # Acabando no dia seguinte
    elif (horaInicial > horaFinal):
        horas = 24 - horaInicial + horaFinal
    else:
        horas = 24
    
    if (minutoInicial > minutoFinal):  
        horas -= 1
        minutos = 60 - minutoInicial + minutoFinal
    else:
        minutos = minutoFinal - minutoInicial

    print(f"O JOGO DUROU {horas} HORA(S) E {minutos} MINUTO(S)")

main()