def main():
    tamanhos = list(map(float, input().split()))
    tamanhos.sort()
    
    a = tamanhos[2]
    b = tamanhos[1]
    c = tamanhos[0]

    if (a >= b + c):
        print("NAO FORMA TRIANGULO")
    else:
        if (a ** 2 == b ** 2 + c ** 2):
            print("TRIANGULO RETANGULO")
        if (a ** 2 > b ** 2 + c ** 2):
            print("TRIANGULO OBTUSANGULO")
        if (a ** 2 < b ** 2 + c ** 2):
            print("TRIANGULO ACUTANGULO")
        if (a == b and b == c):
            print("TRIANGULO EQUILATERO")
        if (a == b and b != c or a == c and c != b or b == c and c != a):
            print("TRIANGULO ISOSCELES")
            



main()