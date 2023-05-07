# Triangulo

def main():
    # Entrada
    a, b, c = map(float, input().split())

    # Processamento
    if (forma_triangulo(a, b, c)):
        perimetro = a + b + c
        print(f"Perimetro = {perimetro:.1f}")
    else:
        area = area_trapezio(a, b, c)
        print(f"Area = {area:.1f}")

def forma_triangulo(a, b, c):
    if (a + b > c and a + c > b and b + c > a):
        return True
    else:
        return False
    
def area_trapezio(a, b, c):
    return ((a + b) * c) / 2

main()