# https://www.beecrowd.com.br/judge/pt/problems/view/1007

def main():
    # Entrada:
    a = int(input())
    b = int(input())
    c = int(input())
    d = int(input())
    # Processamento:
    diferenca = calcular_diferenca(a, b, c, d)
    # Saída:
    print("DIFERENCA = {}".format(diferenca))

def calcular_diferenca(a, b, c, d):
    return (a * b - c * d)

main()