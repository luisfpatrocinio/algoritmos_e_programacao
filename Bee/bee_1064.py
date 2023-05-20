def main():
    valores = []
    for i in range(6):
        valores.append(float(input()))

    numeros_positivos = []
    for i in valores:
        if (i > 0):
            numeros_positivos.append(i)
    
    print(f'{len(numeros_positivos)} valores positivos')
    print(f'{sum(numeros_positivos) / len(numeros_positivos):.1f}')


main()