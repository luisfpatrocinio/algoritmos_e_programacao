def main(teste = False):
    # Receber as linhas de entrada como strings
    valores = []
    x, y = input().split()

    while (x != '0' and y != '0'):
        # Precisamos fazer com que cada numero tenha a mesma quantidade de caracteres
        if (len(x) < len(y)):
            x = x.zfill(len(y))
        else:
            y = y.zfill(len(x))

        if teste: print(f"Número convertido: {x} e {y}")

        valores.append((x, y))
        x, y = input().split()

    if (teste): print(f"Valores: {valores}")
        
    # Iniciando contador de carries = 0.
    carries = 0
    # while (contador < len(valores)):
    for cont in range(len(valores)):
        # Agora, podemos comparar os números dígito a dígito
        # Percorrer todos os dígitos:
        carries = 0
        carry_anterior = 0
        x = valores[cont][0]
        y = valores[cont][1]
        if teste: print(f"Número {cont}: {x} e {y}")
        for i in range(len(x), 0, -1):
            # Se a soma de x + y for > 9, então temos um carry
            # Coletar soma do dígito:
            n = i - 1
            soma = int(x[n]) + int(y[n]) + carry_anterior

            if (soma > 9):
                carries += 1        # Incrementar contador de carries
                carry_anterior = 1  
            else:
                carry_anterior = 0

            if teste: print(f"A soma do {i} dígito deu: {soma} + vai um: {carry_anterior}")

        if (carries == 0):
            print("No carry operation.")
        elif (carries == 1):
            print("1 carry operation.")
        else:
            print(f"{carries} carry operations.")

        

main(True)