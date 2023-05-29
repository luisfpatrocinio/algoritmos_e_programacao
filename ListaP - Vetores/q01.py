# 1. Leia um vetor A com N elementos e escreva um vetor B, com os mesmos elementos de A, sendo que
# estes deverão estar invertidos, ou seja, o 1o elemento de A deve ser o último elemento de B; o 2o
# elemento de A deve ser o penúltimo elemento de B e assim por diante.

from utils import dividir_string, inverter_vetor

def main():
    # Entrada
    vetor1 = input()
    vetor1 = dividir_string(vetor1, " ")
    
    # Processamento
    vetor2 = inverter_vetor(vetor1)
    
    # Saída
    print(vetor2)

main()
