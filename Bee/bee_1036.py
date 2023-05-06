import math

def main():
    num1, num2, num3 = list(map(float, input().split()))


    if (not verificar_impossibilidade(num1, num2, num3)):
        delta = calcular_delta(num1, num2, num3)
        r1 = (-num2 + math.sqrt(delta)) / (2 * num1)
        r2 = (-num2 - math.sqrt(delta)) / (2 * num1)
        print(f'R1 = {r1:.5f}')
        print(f'R2 = {r2:.5f}')
    else:
        print("Impossivel calcular")

def verificar_impossibilidade(num1, num2, num3):
    delta = calcular_delta(num1, num2, num3)
    return (num1 == 0 or num2 == 0 or num3 == 0 or delta < 0)

def calcular_delta(a, b, c):
    return b ** 2 - 4 *a * c

main()