# Substituição em Vetor I

def main():
    # Entrada
    vetor = []
    for i in range(10):
        # adicionar a lista 10 vezes um input
        vetor.append(int(input()))
    # Processamento
    vetor = substituir_negativos(vetor)
    # Saída
    for i in range(10):
        print(f"X[{i}] = {vetor[i]}")

def substituir_negativos(vetor):
    for i in range(10):
        if (vetor[i] <= 0):
            vetor[i] = 1
    return vetor

main()