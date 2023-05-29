# 7. Leia um vetor A de N elementos e escreva um vetor B de N elementos, conforme a seguinte condição:
# se índice de A[índice] é par então B[índice] = 0, caso contrário B[índice] = 1.

from utils import dividir_string

def main():
    vetorA = input()
    vetorA = dividir_string(vetorA, " ")
    vetorB = criar_vetor_b(vetorA)
    print("O vetor B criado é: ", vetorB)

def criar_vetor_b(vetor):
    nova_colecao = []
    for i in range(len(vetor)):
        if vetor[i] % 2 == 0: # é par
            nova_colecao.append(0)
        else:
            nova_colecao.append(1)

    return nova_colecao


main()