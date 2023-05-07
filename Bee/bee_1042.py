# Sort Simples

def main():
    # Entrada
    # List Comprehension
    valores = list(map(int, input().split()))
    valores_ordenados = sorted(valores)
    for valor in valores_ordenados:
        print(valor)
    print()
    for valor in valores:
        print(valor)

main()