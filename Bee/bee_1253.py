def main():
    # Obter número de testes
    n = int(input())

    # Para cada teste,
    for i in range(n):
        sentenca = input()
        deslocamento = int(input())
        nova_sentenca = deslocar_caracteres(sentenca, deslocamento)
        print(nova_sentenca)
    pass

def deslocar_caracteres(texto, deslocamento):
    texto_deslocado = ""
    for letra in texto:
        codigo = ord(letra) - deslocamento
        if (codigo < 65):                   # Se a letra for menor que 'A'
            codigo = 91 - (65 - codigo)     # Subtrair a diferença entre 'A' e o código da letra para fazer a volta
        letra = chr(codigo)
        texto_deslocado += letra
    return texto_deslocado

main()