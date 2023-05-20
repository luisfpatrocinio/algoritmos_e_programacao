# Com o uso crescente de pesticidas, as águas dos córregos e rios tornaram-se tão contaminadas que se tornou quase impossível para os animais aquáticos sobreviverem.

# Sapo Fred é na margem esquerda de um rio. N rochas são dispostas em uma linha reta da margem esquerda para a margem direita. A distância entre a margem esquerda e a margem direita é D metros. Há rochas de dois tamanhos. As maiores podem suportar qualquer peso, mas as pedras menores começam a afundar assim que qualquer massa é colocada sobre elas. Fred tem que ir para a margem direita, onde ele tem que coletar algo e voltar para a margem esquerda, onde sua casa está situada.

# Ele pode pousar em cada pedra pequena no máximo uma vez, mas pode usar as maiores tantas vezes quanto ele quiser. Ele nunca pode tocar a água poluída, pois é extremamente contaminada. Você pode planejar o itinerário de modo que a distância máxima de um único salto seja minimizada?

# Entrada
# A primeira linha de entrada é um número inteiro T ( T < 100 ) que indica o número de casos de teste. Cada caso inicia com uma linha contendo dois inteiros N (0 ≤ N ≤ 100 ) e D ( 1 ≤ D ≤ 1000000000 ) que são o número de pedras e a distância entre as margens. As próximas linhas dão a descrição das N pedras. Cada pedra é definida por seu tamanho Big(B) ou Small(S), que significa grande e pequena respectivamente, um traço “-“ e M ( 0 < M < D ) que determina a distância daquela pedra da margem esquerda. As pedras estarão em ordem crescente de M.

# Saída
# Para cada caso de teste, imprima o número do caso de teste seguido pela distância máxima do salto que Fred deve dar.

def main():
    testes = int(input())
    for i in range(testes):
        n, d = map(int, input().split())
        pedras = []
        for j in range(n):
            pedras.append(input().split())

        resultado = 0
        for j in range(n):
            if (pedras[j][0] == 'S'):
                if (j == 0):
                    resultado = int(pedras[j][1])
                else:
                    if (int(pedras[j][1]) - int(pedras[j - 1][1]) > resultado):
                        resultado = int(pedras[j][1]) - int(pedras[j - 1][1])

        if (d - int(pedras[n - 1][1]) > resultado):
            resultado = d - int(pedras[n - 1][1])

        print(f'Case {i + 1}: {resultado}')

    main()