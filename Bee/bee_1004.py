# https://www.beecrowd.com.br/judge/pt/problems/view/1004

def main():
    # Entrada:
    a = int(input())
    b = int(input())
    # Processamento:
    prod = calcular_produto(a, b)
    # Saída:
    print("PROD = {}".format(prod))

def calcular_produto(a, b):
    return a * b

main()