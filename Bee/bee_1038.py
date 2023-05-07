def main():
    # Entrada
    codigo, quantidade = map(int, input().split())

    # Processamento
    if (codigo == 1):
        valor = 4.00
    elif (codigo == 2):
        valor = 4.50
    elif (codigo == 3):
        valor = 5.00
    elif (codigo == 4):
        valor = 2.00
    elif (codigo == 5):
        valor = 1.50

    total = valor * quantidade

    # Saída
    print(f"Total: R$ {total:.2f}")

main()