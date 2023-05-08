def main():
    valores = []
    m, n = map(int, input().split())

    while m > 0 and n > 0:
        valores.append((m, n))
        m, n = map(int, input().split())

    menor = 0
    maior = 0
    for i in range(len(valores)):
        # Se o primeiro valor for maior que o segundo
        if (valores[i][0] > valores[i][1]):
            maior = valores[i][0]
            menor = valores[i][1]
        else:
            maior = valores[i][1]
            menor = valores[i][0]
    
        soma = 0
        for i in range(menor, maior + 1):
            print(i, end = " ")
            soma += i
        print(f"Sum={soma}")

main()