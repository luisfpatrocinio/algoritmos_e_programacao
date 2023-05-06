# Esfera: https://www.beecrowd.com.br/judge/pt/problems/view/1011

def main():
    # Entrada:
    raio = float(input())
    # Processamento:
    volume = calcular_volume(raio)
    # Saída:
    print("VOLUME = {:.3f}".format(volume))

def calcular_volume(raio):
    return (4.0 / 3.0) * 3.14159 * raio ** 3

main()