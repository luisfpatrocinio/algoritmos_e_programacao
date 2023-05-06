def main():
    # Entrada:
    valor = float(input())

    # Processamento:
    # Notas:
    notas_100 = int(valor // 100)
    valor -= notas_100 * 100

    notas_50 = int(valor // 50)
    valor -= notas_50 * 50

    notas_20 = int(valor // 20)
    valor -= notas_20 * 20

    notas_10 = int(valor // 10)
    valor -= notas_10 * 10

    notas_5 = int(valor // 5)
    valor -= notas_5 * 5

    notas_2 = int(valor // 2)
    valor -= notas_2 * 2

    # Moedas:
    moedas_1 = int(valor // 1)
    valor -= moedas_1 * 1

    moedas_50 = int(valor // 0.50)
    valor -= moedas_50 * 0.50

    moedas_25 = int(valor // 0.25)
    valor -= moedas_25 * 0.25

    moedas_10 = int(valor // 0.10)
    valor -= moedas_10 * 0.10

    moedas_5 = int(valor // 0.05)
    valor -= moedas_5 * 0.05

    moedas_1c = int(round(valor / 0.01))

    # SAÍDA
    print("NOTAS:")
    print(f"{notas_100} nota(s) de R$ 100.00")
    print(f"{notas_50} nota(s) de R$ 50.00")
    print(f"{notas_20} nota(s) de R$ 20.00")
    print(f"{notas_10} nota(s) de R$ 10.00")
    print(f"{notas_5} nota(s) de R$ 5.00")
    print(f"{notas_2} nota(s) de R$ 2.00")
    print("MOEDAS:")
    print(f"{moedas_1} moeda(s) de R$ 1.00")
    print(f"{moedas_50} moeda(s) de R$ 0.50")
    print(f"{moedas_25} moeda(s) de R$ 0.25")
    print(f"{moedas_10} moeda(s) de R$ 0.10")
    print(f"{moedas_5} moeda(s) de R$ 0.05")
    print(f"{moedas_1c} moeda(s) de R$ 0.01")

main()