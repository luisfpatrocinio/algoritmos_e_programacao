# Mjolnir

def main():
    # Entrada
    c = int(input())
    for i in range(c):
        nome, forca = input().split()
        forca = int(forca)
        # Processamento
        if (nome == "Thor"):
            print("Y")
        else:
            print("N")

main()