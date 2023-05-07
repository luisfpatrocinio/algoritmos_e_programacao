# LED

def main():
    # Entrada
    n = int(input())
    for i in range(n):
        numero = input()
        leds = calcular_leds(numero)
        print(leds, "leds")

def calcular_leds(numero):
    leds = 0
    for digito in numero:
        leds += calcular_leds_digito(digito)
    return leds

def calcular_leds_digito(digito):
    if (digito == "1"):
        return 2
    elif (digito == "2" or digito == "3" or digito == "5"):
        return 5
    elif (digito == "4"):
        return 4
    elif (digito == "6" or digito == "9" or digito == "0"):
        return 6
    elif (digito == "7"):
        return 3
    elif (digito == "8"):
        return 7
    else:
        return 0
    
main()