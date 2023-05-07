# Criptografia

def main():
    # Entrada
    n = int(input())
    for i in range(n):
        texto = input()
        texto = criptografar(texto)
        print(texto)

def criptografar(texto):
    # Na primeira passada, somente caracteres que sejam letras minúsculas e maiúsculas devem ser deslocadas 3 posições para a direita, segundo a tabela ASCII: letra 'a' deve virar letra 'd', letra 'y' deve virar caractere '|' e assim sucessivamente.
    texto = deslocar_caracteres(texto, 3)
    # Na segunda passada, a linha deverá ser invertida.
    texto = inverter_texto(texto)
    # Na terceira e última passada, todo e qualquer caractere a partir da metade em diante (truncada) devem ser deslocados uma posição para a esquerda na tabela ASCII. Neste caso, 'b' vira 'a' e 'a' vira '`'.
    texto = deslocar_caracteres(texto, -1)
    return texto   

def inverter_texto(texto):
    return texto[::-1]

def deslocar_caracteres(texto, deslocamento):
    texto_deslocado = ""
    for letra in texto:
        if (letra.isalpha()):
            letra = chr(ord(letra) + deslocamento)
        texto_deslocado += letra
    return texto_deslocado

main()