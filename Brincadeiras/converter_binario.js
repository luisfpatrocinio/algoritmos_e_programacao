function main() {
    numeroStr = input("Insira o número binário");

    for (let i = numeroStr.length; i >= 0; i--) {
        console.log(`Verificando dígito ${i}`)
        
        digito = Number(numeroStr[i])
        
    }
}

main();