def main():
    while True:
        # Enquanto não tiver acabado o arquivo:
        try:
            n = int(input())
            # Se não houver reclamações
            if (n == 0):
                print("vai ter copa!")
            # Se reclamar, vai ter duas
            else:
                print("vai ter duas!")
        except EOFError:
            # Encerrar while loop
            break

main()