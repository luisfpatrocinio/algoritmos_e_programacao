# Coordenadas de um Ponto

def main():
    # Entrada
    x, y = map(float, input().split())
    # Processamento
    quadrante = determinar_quadrante(x, y)
    # Saída
    print(quadrante)

def determinar_quadrante(x, y):
    if (x == 0 and y == 0):
        return "Origem"
    elif (x == 0):
        return "Eixo Y"
    elif (y == 0):
        return "Eixo X"
    elif (x > 0 and y > 0):
        return "Q1"
    elif (x < 0 and y > 0):
        return "Q2"
    elif (x < 0 and y < 0):
        return "Q3"
    elif (x > 0 and y < 0):
        return "Q4"
main()