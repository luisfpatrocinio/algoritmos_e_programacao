# Conversão de Tempo

def main():
    # Entrada
    tempo = int(input())
    # Processamento
    horas = tempo // 3600
    minutos = (tempo % 3600) // 60
    segundos = (tempo % 3600) % 60
    # Saída
    print(f"{horas}:{minutos}:{segundos}")

def calcular_horas(tempo):
    return tempo // 3600

def calcular_minutos(tempo):
    return (tempo % 3600) // 60

def calcular_segundos(tempo):
    return (tempo % 3600) % 60

main()