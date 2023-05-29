# 2. Leia um vetor A com N elementos, verifique e escreva se existem ou não elementos iguais no vetor.

from utils import dividir_string

def main():
    # Entrada
    vetor = input()
    vetor = dividir_string(vetor, " ")
    
    # Processamento
    resultado = possui_iguais(vetor)
    
    # Saída
    if (resultado):
        print("Há elementos iguais.")
    else:
        print("Não há elementos iguais.")
    
    
def possui_iguais(vetor):
    for i in range(len(vetor)):
        # Ler os itens seguintes
        for j in range(i + 1, len(vetor)):
            if (vetor[i] == vetor[j]):
                return True
    return False



main()