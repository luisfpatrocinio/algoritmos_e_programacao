def main():
    # Entrada
    n = int(input())
    numeros = []
    for i in range(n):
        numeros.append(int(input()))

    # Processamento
    numeros.sort()
    numeros = contar_numeros(numeros)

    # Saída
    for i in range(len(numeros)):
        print(f"{numeros[i][0]} aparece {numeros[i][1]} vez(es)")

def contar_numeros(numeros):
    numeros_contados = []
    for i in range(len(numeros)):
        if (i == 0):
            numeros_contados.append([numeros[i], 1])
        else:
            if (numeros[i] == numeros[i - 1]):
                numeros_contados[-1][1] += 1
            else:
                numeros_contados.append([numeros[i], 1])
    return numeros_contados

main()  