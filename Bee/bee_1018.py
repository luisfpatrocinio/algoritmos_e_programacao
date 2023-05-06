# https://www.beecrowd.com.br/judge/pt/problems/view/1018

def main():
    # Entrada:
    valor = int(input())
    # Processamento:
    notas = calcular_notas(valor)
    # Saída:
    print(valor)
    print("{} nota(s) de R$ 100,00".format(notas[0]))
    print("{} nota(s) de R$ 50,00".format(notas[1]))
    print("{} nota(s) de R$ 20,00".format(notas[2]))
    print("{} nota(s) de R$ 10,00".format(notas[3]))
    print("{} nota(s) de R$ 5,00".format(notas[4]))
    print("{} nota(s) de R$ 2,00".format(notas[5]))
    print("{} nota(s) de R$ 1,00".format(notas[6]))

def calcular_notas(valor):
    notas = [0, 0, 0, 0, 0, 0, 0]
    while valor >= 100:
        valor -= 100
        notas[0] += 1
    while valor >= 50:
        valor -= 50
        notas[1] += 1
    while valor >= 20:
        valor -= 20
        notas[2] += 1
    while valor >= 10:
        valor -= 10
        notas[3] += 1
    while valor >= 5:
        valor -= 5
        notas[4] += 1
    while valor >= 2:
        valor -= 2
        notas[5] += 1
    while valor >= 1:
        valor -= 1
        notas[6] += 1
    return notas

main()