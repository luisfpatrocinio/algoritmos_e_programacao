# https://www.beecrowd.com.br/judge/pt/problems/view/1004

def main():
    # Entrada:
    tempo = int(input())
    velocidade = int(input())
    # Processamento:
    distancia = calcular_distancia(tempo, velocidade)
    litros = calcular_litros(distancia)
    #Saída:
    print("{:.3f}".format(litros))

def calcular_distancia(tempo, velocidade):
    return tempo * velocidade

def calcular_litros(distancia):
    return distancia / 12

main()
