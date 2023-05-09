def main():
    x = int(input())
    y = int(input())
    menor = x if x < y else y
    maior = x if x > y else y

    for i in range(menor + 1, maior):
        if (i % 5 == 2 or i % 5 == 3):
            print(i)

main()