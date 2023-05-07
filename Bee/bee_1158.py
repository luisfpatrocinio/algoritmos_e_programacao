def main():
    numero = int(input())
    for i in range(numero):
        x, y = list(map(int, input().split()))
        print(soma_impares_consecutivos(x, y))

def soma_impares_consecutivos(x, y):
    soma = 0
    for i in range(y):
        if (x % 2 != 0):
            soma += x
        else:
            soma += x + 1
        x += 2
    return soma

main()