let peso = Number(prompt("Digite seu peso em kg:"));
let altura = Number(prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);

alert("Seu IMC é: " + imc.toFixed(2));