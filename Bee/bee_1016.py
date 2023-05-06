# https://www.beecrowd.com.br/judge/pt/problems/view/1016

def main():
    # Entrada:
    distancia = int(input())
    # Processamento:
    tempo = calcular_tempo(distancia)
    # Saída:
    print("{} minutos".format(tempo))

def calcular_tempo(distancia):
    return distancia * 2

main()