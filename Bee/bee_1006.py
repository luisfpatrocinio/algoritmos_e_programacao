# https://www.beecrowd.com.br/judge/pt/problems/view/1006

def main():
    # Entrada:
    a = float(input())
    b = float(input())
    c = float(input())
    # Processamento:
    media = calcular_media(a, b, c)
    # Saída:
    print("MEDIA = {:.1f}".format(media))

def calcular_media(a, b, c):
    return (a * 2 + b * 3 + c * 5) / 10

main()