# O Maior: https://www.beecrowd.com.br/judge/pt/problems/view/1013

def main():
    # Entrada:
    a = int(input())
    b = int(input())
    c = int(input())
    # Processamento:
    maior = calcular_maior(a, b, c)
    # Saída:
    print("{} eh o maior".format(maior))

def calcular_maior(a, b, c):
    maiorAB = (a + b + abs(a - b)) / 2
    maior = (maiorAB + c + abs(maiorAB - c)) / 2
    return maior

main()