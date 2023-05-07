# Dois números são múltimos se o resto da divisão de um pelo outro for zero.

def main():
    # Entrada
    a, b = map(int, input().split())

    # Processamento
    if (a % b == 0 or b % a == 0):
        print("Sao Multiplos")
    else:
        print("Nao sao Multiplos")

main()