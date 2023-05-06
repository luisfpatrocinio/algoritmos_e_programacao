def main():
    raio = float(input())
    area = calcular_area_circulo(raio)
    print(f"A={area:.4f}")
    
def calcular_area_circulo(raio):
    return 3.14159 * raio ** 2

main()