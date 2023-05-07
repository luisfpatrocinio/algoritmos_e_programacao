# Números Positivos

def main():
    # Entrada
    positivos = 0
    for i in range(6):
        numero = float(input())
        if (numero > 0):
            positivos += 1
    # Saída
    print(f"{positivos} valores positivos")
    
main()