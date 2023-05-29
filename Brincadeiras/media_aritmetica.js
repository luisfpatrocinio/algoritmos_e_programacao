function main() {
    // Usuário deve inserir dois números.
    var num1 = Number(prompt("Digite o primeiro número: "));
    var num2 = Number(prompt("Digite o segundo número: "));

    // Calcula a média aritmética.
    var media = (num1 + num2) / 2;

    // Exibe o resultado.
    alert("A média aritmética é: " + media);
}

main();