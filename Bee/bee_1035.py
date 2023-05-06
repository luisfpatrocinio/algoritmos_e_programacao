# Teste de Seleção - 1

def main():
    a, b, c, d = map(int, input().split())
    if checar_aceitacao(a, b, c, d):
        print("Valores aceitos")
    else:
        print("Valores nao aceitos")

def checar_aceitacao(num1, num2, num3, num4):
    return num2 > num3 and num4 > num1 and num3 + num4 > num1 + num2 and num3 > 0 and num4 > 0 and num1 % 2 == 0
    
main()