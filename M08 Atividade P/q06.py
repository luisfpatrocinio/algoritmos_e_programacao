# Leia um número (vetor com 8 elementos) na base binária, calcule 
# e escreva este número na base hexadecimal e na base decimal.

def main():
    numero = input("Insira um número binário de 8 dígitos: ")
    
    numero_hexadecimal = binario_para_hexadecimal(numero)
    numero_decimal = binario_para_decimal(numero)

    print(f"O valor {numero} em hexadecimal é: {numero_hexadecimal}")
    print(f"O valor {numero} em decimal é: {numero_decimal}")


def binario_para_hexadecimal(numero):
    valor_decimal = binario_para_decimal(numero)
    valor_hexadecimal = decimal_para_hexadecimal(valor_decimal)
    return valor_hexadecimal


def decimal_para_hexadecimal(decimal):
    hexadecimal = ""
    while decimal > 0:
        # Vai adicionando à string 16 números decimais por vez.
        resto = decimal % 16
        if resto < 10:
            # Adiciona o número diretamente à esquerda
            hexadecimal = str(resto) + hexadecimal
        else:
            # Caso seja maior que dez, obtém o valor da tabela ascii relativos as letras A-F
            hexadecimal = chr(ord('A') + resto - 10) + hexadecimal
        
        # Atualiza o valor decimal para a próxima iteração
        decimal = decimal // 16
    return hexadecimal


def binario_para_decimal(numero):
    resultado = 0
    for i in range(len(numero)-1, -1, -1):
        resultado += (2 * int(numero[i])) ** i
    return resultado

main()