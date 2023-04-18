"""
1. Leia uma lista de números e que para cada número lido,
escreva o próprio número e a relação de seus divisores.
(Flag Número = 0)
"""

def main():
    print('##### Divisores de N Números #####')

    # Entrada
    numero = int(input('Favor digite um número: '))

    while numero != 0:
        mostrar_divisores(numero)
        numero = int(input('Favor digite um número: '))

    print('Fim do Programa')


def mostrar_divisores(numero):
    candidato = numero
    while candidato > 0:
        if (eh_divisor(candidato, numero)):
            print(candidato)
        # convergencia
        candidato = candidato - 1


def eh_divisor(candidato, numero):
    return numero % candidato == 0

main()