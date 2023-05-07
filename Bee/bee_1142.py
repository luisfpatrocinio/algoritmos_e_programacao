def main():
    numero = int(input())
    contador = 1
    for i in range(numero):
        print(contador, contador + 1, contador + 2, "PUM")
        contador += 4

main()
