def main():
    # Obter número de testes
    n = int(input())

    # Para cada teste:
    for i in range(n):
        a, b = input().split()
        # Obter a String A sem B
        string_a_sem_b = subtrair_string(a, b)
        # Concatenar resultado com B e verificar se é igual a string original
        if (string_a_sem_b + b == a):
            print("encaixa")
        else:
            print("nao encaixa")

def subtrair_string(a, b):
    string_nova = ""
    for i in range(len(a) - len(b)):
        string_nova += a[i]
    return string_nova

main()