def main():
    # Obter número de testes
    n = int(input())

    # Para cada teste:
    for i in range(n):
        a, b = input().split()
        # b corresponde aos últimos dígitos de a?
        tamanho = len(b)
        string_a_sem_b = subtrair_string(a, b)
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