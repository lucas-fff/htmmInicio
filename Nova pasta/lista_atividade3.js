
let opcao = Number(prompt(
    "Escolha uma opção:\n" +
    "1 - Retângulo\n" +
    "2 - Quadrado\n" +
    "3 - Circunferência\n" +
    "4 - Triângulo"
));

switch (opcao) {
    case 1:
        let base = Number(prompt("Digite a base:"));
        let altura = Number(prompt("Digite a altura:"));

        alert("Área: " + (base * altura) +
              "\nPerímetro: " + (2 * (base + altura)));
        break;

    case 2:
        let lado = Number(prompt("Digite o lado:"));

        alert("Área: " + (lado * lado) +
              "\nPerímetro: " + (4 * lado));
        break;

    case 3:
        let raio = Number(prompt("Digite o raio:"));

        alert("Área: " + (Math.PI * raio * raio) +
              "\nPerímetro: " + (2 * Math.PI * raio));
        break;

    case 4:
        let l1 = Number(prompt("Digite o primeiro lado:"));
        let l2 = Number(prompt("Digite o segundo lado:"));
        let l3 = Number(prompt("Digite o terceiro lado:"));

        alert("Perímetro: " + (l1 + l2 + l3));
        break;

    default:
        alert("Opção inválida!");
}
