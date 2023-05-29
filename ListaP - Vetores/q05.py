# Leia um vetor A com 20 elementos, calcule e escreva o valor de S.
# S = (A[1] - A[20])2 + (A[2] - A[19])2 + ... + (A[9] - A[12])2 + (A[10] - A[11])2

def main():
    print("Insira 20 elementos:")
    vetor = []
    for i in range(1, 21):
        n = vetor.append(int(input(f"Elemento nº {i}: ")))

    print(f"Vetor inserido: {vetor}")

    resultado = calcular_s(vetor)
    print(f"O valor de S é: {resultado}")

def calcular_s(vetor):
    total = 0
    for i in range(len(vetor) // 2):
        total += (vetor[i] - vetor[len(vetor) - 1- i]) ** 2
    
    return total

main()