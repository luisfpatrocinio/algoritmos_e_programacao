def dividir_string(texto, sep):
    palavras = []
    palavra_atual = ""
    for letra in texto:
        if (letra == sep):
            palavras.append(palavra_atual)
            palavra_atual = ""
        else:
            palavra_atual += letra
            
    if len(palavra_atual) > 0:
        palavras.append(palavra_atual)

    return palavras


def inverter_vetor(vetor):
    vetor_invertido = []
    for i in range(len(vetor) - 1, -1, -1):
        vetor_invertido.append(vetor[i])
    
    return vetor_invertido


def juntar_vetores(vetor1, vetor2):
    novo_vetor = []
    for i in range(len(vetor1)):
        novo_vetor.append(vetor1[i])
    
    for i in range(len(vetor2)):
        novo_vetor.append(vetor2[i])
    
    return novo_vetor
