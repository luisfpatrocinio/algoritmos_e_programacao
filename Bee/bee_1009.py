# https://www.beecrowd.com.br/judge/pt/problems/view/1009

def main():
    # Entrada:
    nome = input()
    salario = float(input())
    vendas = float(input())
    # Processamento:
    total = calcular_total(salario, vendas)
    # Saída:
    print("TOTAL = R$ {:.2f}".format(total))

def calcular_total(salario, vendas):
    return salario + vendas * 0.15

main()