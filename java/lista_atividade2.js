
let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
let n3 = Number(prompt("Digite o terceiro número:"));

if (n1 >= n2 && n1 >= n3) {
    alert("O maior número é: " + n1);
} else if (n2 >= n1 && n2 >= n3) {
    alert("O maior número é: " + n2);
} else {
    alert("O maior número é: " + n3);
}
