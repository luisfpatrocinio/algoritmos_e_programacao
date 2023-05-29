# 4. Leia 2 vetores A e B com N elementos, escreva e escreva um vetor C, que represente o conjunto união
# entre os vetores A e B; e um vetor D, que represente o conjunto interseção entre os vetores A e B.

from utils import dividir_string, juntar_vetores

def main():
    vetor1 = input("Primeiro vetor: ")
    vetor1 = dividir_string(vetor1, " ")
    vetor2 = input("Segundo vetor: ")
    vetor2 = dividir_string(vetor2, " ")

    vetor_uniao = juntar_vetores(vetor1, vetor2)
    vetor_intersec = intersecao_entre_vetores(vetor1, vetor2)

    print(f"Vetor união: {vetor_uniao}")
    print(f"Vetor interseção: {vetor_intersec}")

def intersecao_entre_vetores(vetor1, vetor2):
    novo_vetor = []
    for i in range(len(vetor1)):
        for j in range(i + 1, len(vetor2)):
            if vetor1[i] == vetor2[j]:
                novo_vetor.append(vetor2[j])

    return novo_vetor

main()