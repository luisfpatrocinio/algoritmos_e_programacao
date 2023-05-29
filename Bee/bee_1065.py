def main():
    valores = []
    for i in range(5):
        valores.append(int(input()))

    pares = 0
    for i in valores:
        if (i % 2 == 0):
            pares += 1

    print(f'{pares} valores pares')

main()