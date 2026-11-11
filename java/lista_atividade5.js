
let numero = Number(prompt("Digite um número:"));
let primo = numero > 1;

for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        primo = false;
        break;
    }
}

if (primo) {
    alert("O número é primo!");
} else {
    alert("O número não é primo!");
}
