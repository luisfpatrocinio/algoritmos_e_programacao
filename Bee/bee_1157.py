# Um número é divisor de N se o resto da divisão de N por ele for zero.

def main():
    # Entrada
    n = int(input())
    # Processamento
    for i in range(1, n + 1):
        if (n % i == 0):
            print(i)

main()