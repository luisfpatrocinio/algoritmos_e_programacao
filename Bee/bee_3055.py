def main():
    nota = int(input())
    media = int(input())

    # media = a + b /2
    # media = a / 2 + b / 2
    # b / 2 = a / 2 - media
    # b = 2 * (a / 2 - media)

    nota_necessaria = int(2 * (media - (nota / 2)))

    print(nota_necessaria)

main()