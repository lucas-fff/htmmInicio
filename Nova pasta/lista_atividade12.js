let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

let operacao = prompt("Escolha a operação: +, -, * ou /");

let resultado;

if (operacao == "+") {
    resultado = numero1 + numero2;
    alert("Resultado da soma: " + resultado);

} else if (operacao == "-") {
    resultado = numero1 - numero2;
    alert("Resultado da subtração: " + resultado);

} else if (operacao == "*") {
    resultado = numero1 * numero2;
    alert("Resultado da multiplicação: " + resultado);

} else if (operacao == "/") {
    if (numero2 != 0) {
        resultado = numero1 / numero2;
        alert("Resultado da divisão: " + resultado);
    } else {
        alert("Não é possível dividir por zero!");
    }

} else {
    alert("Operação inválida!");
}