def main():
    salario = float(input())
    if (salario <= 400):
        reajuste = salario * 0.15
    elif (salario <= 800):
        reajuste = salario * 0.12
    elif (salario <= 1200):
        reajuste = salario * 0.10
    elif (salario <= 2000):
        reajuste = salario * 0.07
    else:
        reajuste = salario * 0.04
    
    novo_salario = salario + reajuste

    print(f"Novo salario: {novo_salario:.2f}")
    print(f"Reajuste ganho: {reajuste:.2f}")
    print(f"Em percentual: {int(reajuste / salario * 100)} %")

main()