def main():
    numeros_pares = 0
    numeros_impares = 0
    numeros_positivos = 0
    numeros_negativos = 0

    for i in range(5):
        numero = int(input())
        if (numero % 2 == 0):
            numeros_pares += 1
        else:
            numeros_impares += 1
        if (numero > 0):
            numeros_positivos += 1
        elif numero < 0:
            numeros_negativos += 1
        
    print(f"{numeros_pares} valor(es) par(es)")
    print(f"{numeros_impares} valor(es) impar(es)")
    print(f"{numeros_positivos} valor(es) positivo(s)")
    print(f"{numeros_negativos} valor(es) negativo(s)")
    
main()