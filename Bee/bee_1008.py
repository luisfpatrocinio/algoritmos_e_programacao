# https://www.beecrowd.com.br/judge/pt/problems/view/1008

def main():
    # Entrada:
    numero = int(input())
    horas = int(input())
    valor = float(input())
    # Processamento:
    salario = calcular_salario(horas, valor)
    # Saída:
    print("NUMBER = {}".format(numero))
    print("SALARY = U$ {:.2f}".format(salario))

def calcular_salario(horas, valor):
    return horas * valor

main()