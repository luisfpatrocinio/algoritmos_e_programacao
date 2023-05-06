# https://www.beecrowd.com.br/judge/pt/problems/view/1015

def main():
    # Entrada:
    x1, y1 = input().split(" ")
    x2, y2 = input().split(" ")
    # Processamento:
    distancia = calcular_distancia(x1, y1, x2, y2)
    # Saída:
    print("{:.4f}".format(distancia))

def calcular_distancia(x1, y1, x2, y2):
    return ((float(x2) - float(x1)) ** 2 + (float(y2) - float(y1)) ** 2) ** (1/2)

main()