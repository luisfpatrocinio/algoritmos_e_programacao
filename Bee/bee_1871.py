def main():
    valores = []
    x, y = input().split()

    while (x != '0' and y != '0'):
        valores.append((x, y))
        x, y = input().split()


    #print(valores)
    contador = 0
    while (contador < len(valores)):
        m, n = valores[contador]
        m = int(m)
        n = int(n)
        contador += 1
        m, n = processar(m, n)

        # Processamento
        resultado = m + n
        resultado = str(resultado)
        resultado = resultado.replace("0", "")

        # Saída
        print(resultado)

def processar(m, n):
    m = str(m)
    n = str(n)
    m = m.replace("0", "")
    n = n.replace("0", "")
    m = int(m)
    n = int(n)
    return m, n

main()