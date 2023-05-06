# Idade em Dias

def main():
    # Entrada
    idade = int(input())
    # Processamento
    anos = calcular_anos(idade)
    meses = calcular_meses(idade)
    dias = calcular_dias(idade)
    # Saída
    print(f"{anos} ano(s)")
    print(f"{meses} mes(es)")
    print(f"{dias} dia(s)")

def calcular_anos(idade):
    return idade // 365

def calcular_meses(idade): 
    return (idade % 365) // 30

def calcular_dias(idade):
    return (idade % 365) % 30  

main()