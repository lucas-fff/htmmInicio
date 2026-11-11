let jogador1 = Math.floor(Math.random() * 6) + 1;
let jogador2 = Math.floor(Math.random() * 6) + 1;

alert("Jogador 1 tirou: " + jogador1);
alert("Jogador 2 tirou: " + jogador2);

if (jogador1 > jogador2) {
    alert("Jogador 1 venceu!");
} else if (jogador2 > jogador1) {
    alert("Jogador 2 venceu!");
} else {
    alert("Empate! Os dois tiraram o mesmo número.");
}