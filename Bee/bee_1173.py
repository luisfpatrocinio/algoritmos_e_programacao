def main():
    # Entrada
    valor = int(input())

    # Processamento
    vetor = gerar_vetor(valor)

    # Saída
    for i in range(len(vetor)):
        print(f"N[{i}] = {vetor[i]}")

def gerar_vetor(numero):
    novo_vetor = []
    for i in range(1, 11):
        novo_valor = numero * (2 ** (i-1))
        novo_vetor.append(novo_valor)
    return novo_vetor

main()