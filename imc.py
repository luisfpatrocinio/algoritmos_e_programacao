# Entrada
nome = input('Nome: ')
peso = float(input('Peso: '))
altura = float(input('Altura: '))

# Processamento
imc = peso / (altura * altura)

# Saída
print('Seu IMC é de ', imc)