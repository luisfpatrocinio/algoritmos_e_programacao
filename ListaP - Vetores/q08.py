# 8. Leia um vetor com N elementos, encontre e escreva o maior e o menor elemento e suas respectivas
# posições no vetor.

from utils import dividir_string

def main():
    vetor = input()
    vetor = dividir_string(vetor, " ")

    valor_maior = reduzir_colecao(vetor, maior, int(vetor[0]))
    valor_menor = reduzir_colecao(vetor, menor, int(vetor[0]))

    print(f"Valor maior: {valor_maior}")
    print(f"Valor menor: {valor_menor}")


def reduzir_colecao(vetor, funcao_redutora, valor_inicial = 0):
    acumulado = valor_inicial
    for item in vetor:
            acumulado = funcao_redutora(acumulado, item)
    return acumulado


def maior(num1, num2):
    if (int(num1) > int(num2)):
        return num1
    else:
        return num2
    
def menor(num1, num2):
    if (int(num1) < int(num2)):
        return num1
    else:
        return num2

main()