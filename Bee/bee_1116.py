def main():
    n = int(input())
    for i in range(n):
        x, y = map(int, input().split())
        dividir(x, y)

def dividir(x, y):
    if (y == 0):
        print("divisao impossivel")
    else:
        resultado = x / y
        print(f'{resultado:.1f}')

main()
