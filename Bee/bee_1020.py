def main():
    dias = int(input())
    
    anos = dias // 365
    dias %= 365

    meses = dias // 30
    dias %= 30

    print(f'{anos} ano(s)\n{meses} mes(es)\n{dias} dia(s)')


main()