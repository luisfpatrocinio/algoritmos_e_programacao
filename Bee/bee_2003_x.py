

def main():
    while (True):
        horario = list(map(int, input().split(":")))
        
        # horario[0] >>> hora
        # horario[1] >>> minuto

        if (horario[0] < 7):
            print("Atraso maximo: 0")  
        elif (horario[0] == 7 and horario[1] == 0):
            print("Atraso maximo: 0")
        else:
            print("Atraso maximo:", (horario[0] - 7) * 60 + horario[1])
    

main()