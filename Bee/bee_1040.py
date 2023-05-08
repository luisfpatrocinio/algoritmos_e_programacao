def main():
    numeros = list(map(float, input().split()))
    
    medias = []
    for i in range(len(numeros)):
        medias.append(calcular_media_ponderada(numeros[i], i))

    media_total = sum(medias) / 10
    print(f"Media: {media_total:.1f}")
    if (media_total >= 7.0):
        print("Aluno aprovado.")
    elif (media_total < 5.0):
        print("Aluno reprovado.")
    else:
        print("Aluno em exame.")
        nota_exame = float(input())
        print(f"Nota do exame: {nota_exame:.1f}")
        media_total = (media_total + nota_exame) / 2
        if (media_total >= 5.0):
            print("Aluno aprovado.")
        else:
            print("Aluno reprovado.")
        print(f"Media final: {media_total:.1f}")


def calcular_media_ponderada(nota, ind):
    pesos = [2, 3, 4, 1]
    return nota * pesos[ind]

    
main()