# 3. Leia 2 vetores A e B com N elementos, escreva um vetor C, sendo este a junção dos vetores A e B.
# Desta forma, o vetor C deverá ter 2*N elementos.

from utils import dividir_string, juntar_vetores

def main():
    vetor1 = input()
    vetor1 = dividir_string(vetor1, " ")
    vetor2 = input()
    vetor2 = dividir_string(vetor2, " ")
    vetor3 = juntar_vetores(vetor1, vetor2)
    print(vetor3)



    

main()