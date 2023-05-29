# Criptografia

def main():
    # Entrada
    n = int(input())
    for i in range(n):
        texto = input()
        texto = criptografar(texto)
        print(texto)

def criptografar(texto):
    # Na primeira passada, somente caracteres que sejam letras minúsculas e maiúsculas devem 
    # ser deslocadas 3 posições para a direita, segundo a tabela ASCII: letra 'a' deve virar 
    # letra 'd', letra 'y' deve virar caractere '|' e assim sucessivamente.
    texto = deslocar_caracteres(texto, 3)
    #print(texto)
    # Na segunda passada, a linha deverá ser invertida.
    texto = inverter_texto(texto)
    #print(texto)
    # Na terceira e última passada, todo e qualquer caractere a partir da metade em diante 
    # (truncada) devem ser deslocados uma posição para a esquerda na tabela ASCII. 
    # Neste caso, 'b' vira 'a' e 'a' vira '`'.
    texto = deslocar_metade(texto, -1)
    #print(texto)
    return texto   

def inverter_texto(texto):
    texto_invertido = ""
    for i in range(len(texto)):
        texto_invertido += texto[len(texto) - i - 1]
    return texto_invertido

def deslocar_caracteres(texto, deslocamento):
    texto_deslocado = ""
    for letra in texto:
        # O texto precisa ser uma letra
        if (letra.isalpha()):
            codigo = ord(letra) + deslocamento
            letra = chr(codigo)
        texto_deslocado += letra
    return texto_deslocado

def deslocar_metade(texto, deslocamento):
    texto_deslocado = ""
    for i in range(len(texto)):
        letra = texto[i]
        # Verificar se estamos na metade do texto (truncado)
        if (i >= len(texto) // 2):
            codigo = ord(letra) + deslocamento
            letra = chr(codigo)
        texto_deslocado += letra
    return texto_deslocado

main()