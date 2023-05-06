# O Maior: https://www.beecrowd.com.br/judge/pt/problems/view/1013

def main():
    # Entrada:
    a, b, c = map(float, input().split())
    # Processamento:
    maior = calcular_maior(a, b, c)
    # Saída:
    print("{} eh o maior".format(maior))

def calcular_maior(a, b, c):
    maiorAB = (a + b + abs(a - b)) / 2
    maior = (maiorAB + c + abs(maiorAB - c)) / 2
    return int(maior)

main()