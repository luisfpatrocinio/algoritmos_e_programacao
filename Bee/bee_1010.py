# https://www.beecrowd.com.br/judge/pt/problems/view/1010

def main():
    # Entrada:
    codigo1, numero1, valor1 = input().split(" ")
    codigo2, numero2, valor2 = input().split(" ")
    # Processamento:
    total = calcular_resultado(numero1, valor1, numero2, valor2)
    # Saída:
    print("VALOR A PAGAR: R$ {:.2f}".format(total))

def calcular_resultado(numero1, valor1, numero2, valor2):
    return int(numero1) * float(valor1) + int(numero2) * float(valor2)

main()