def main():
    testes = int(input())
    for i in range(testes):
        x, y = map(int, input().split())

        resultado = str(x ** y)

        print(len(resultado))


main()