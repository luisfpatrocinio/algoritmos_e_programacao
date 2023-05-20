# Tempo de um Evento

# O evento é no mês de abril e termina em abril
# calcular o tempo que o evento vai durar

def main():
    input_dia = input() # "Dia N"
    numero_dia = int(input_dia.split()[1]) # N

    input_hora_inicio = input() # "00 : 00 : 00"
    hora_inicio = map(int, input_hora_inicio.split(" : ")) # [00, 00, 100]

    input_dia_fim = input() # "Dia N"
    numero_dia_fim = int(input_dia_fim.split()[1]) # N

    input_hora_fim = input() # "00 : 00 : 00"
    hora_fim = map(int, input_hora_fim.split(" : ")) # [00, 00, 100]

    duracao_dias = 0
    duracao_horas = 0
    duracao_minutos = 0
    duracao_segundos = 0
    
    # Calcular duração em dias 
    duracao_dias = numero_dia_fim - numero_dia
    if (duracao_dias < 0):
        duracao_dias = 0

    
    print(f"{duracao_dias} dia(s)")
    print(f"{duracao_horas} hora(s)")
    print(f"{duracao_minutos} minutos(s)")
    print(f"{duracao_segundos} segundo(s)")

main()