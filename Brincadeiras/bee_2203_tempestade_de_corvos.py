# Tempestade de Corvos: https://www.beecrowd.com.br/judge/pt/problems/view/2203

def main():
    while True:
        try:
            # Entrada
            # A entrada é composta de várias linhas, cada linha contém os seguintes valores inteiros: 
            # Xf, Yf, Xi, Yi, Vi, R1 e R2(0 ≤ Xf, Yf, Xi, Yi, Vi, R1 e R2 ≤ 100), representando respectivamente 
            # as coordenadas de Fiddlesticks, as coordenadas iniciais do invasor, a velocidade do invasor, 
            # o raio de conjuração da ultimate e o raio de voo dos corvos. Considere a unidade de medida como sendo o metro.
            x_fiddlesticks, y_fiddlesticks, x_inimigo, y_inimigo, velocidade_inimigo, raio_conjuracao, raio_voo = map(float, input().split())

            # Calcular Distancia
            deltaX = x_fiddlesticks - x_inimigo
            deltaY = y_fiddlesticks - y_inimigo
            distanciaInicial = ((deltaX ** 2) + (deltaY ** 2)) ** 0.5
            
            # Fiddle demora 1.5 segundos pra conjurar a ultimate.
            tempo_conjuracao = 1.5

            # O inimigo se move em linha reta, para longe de Fiddle.
            distanciaFinal = distanciaInicial + (velocidade_inimigo * tempo_conjuracao)

            # Alcance máximo da conjuração:
            alcance_maximo = raio_conjuracao + raio_voo

            # Saída
            # Na saída você deve imprimir para cada linha o caractere 'Y' caso seja possível atingir o invasor ou 'N' caso contrário, ambos seguidos de uma quebra de linha.
            if (distanciaFinal <= alcance_maximo):
                print("Y") 
            else:
                print("N")
                
        except EOFError:
            break

main()