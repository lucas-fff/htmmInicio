
// comentário de uma linha

/**************************
    comentário de linhas
    outra linha de comentário
    mais uma
*/

// entrada -> pela web através de formulários ou eventos do DOM
// saída -> console do navegador ou pra página através de tag

// entrada de dados -> acontece pelo terminal
// saída dos dados -> acontece pelo terminal

/************************************* 
* VARIAVEIS
*  É uma caixa que armazena um tipo de valor na memoria do computador
*  no javascript podemos criar uma variavel de 3 formas

let idade = 10;     // sintaxe mais moderna do javascript
var Idade = 41;    // sintaxe mais antiga do javascript
const _idade = 32; // um valor que não pode ser alterado
*/
/***************************************
 * Tipos de dados
 * cada caixa tem um tipo de dado

// STRING - sequencia de caracteres
let nome = "João";

// NUMBER - numeros decimais ou inteiros
let IDADE = 40; // numero inteiro
let Altura = 1.75; // numero fracionado(com virgula)

// BOOLEAN - verdadeiro ou falso
let Aprovado = true;
var Dinheiro = false;

// UNDEFINED - a variavel não foi atribuida
let cidade;

// NULL - ausência intencional de valor
let telefone = null

// Retorno dos dados
console.log(nome)
console.log(IDADE)
console.log(Altura)
console.log(Aprovado)
console.log(Dinheiro)
console.log(cidade);
console.log(telefone);

// Retorno dos tipos
console.log(typeof nome)
console.log(typeof IDADE)
console.log(typeof Altura)
console.log(typeof Aprovado)
console.log(typeof Dinheiro)
console.log(typeof cidade);
console.log(typeof telefone);
*/

/*******************************
 * operadores aritméticos
 * são usados para realizar cálculos matemáticos

let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2); // soma
console.log(numero1 - numero2); // subtração
console.log(numero1 * numero2); // multiplicação
console.log(numero1 / numero2); // divisão
console.log(numero1 % numero2); // resto da divisao
console.log(numero1 ** 2); // exponenciacao

/*********************************
 * operadores condicionais
 * são usados quando queremos 
 * que o código tome uma decisao

let idade = 35;

console.log(idade < 18);
console.log(idade > 18);
console.log(idade <= 18);
console.log(idade >= 18);

console.log(idade == 18); 
console.log(idade < 18);
console.log(idade < 18);

let number1 = "15";
let number2 = 15;

console.log(number1 == number2);
console.log(number1 === number2);
console.log(idade != 18);
 */

/***************************************
 * operadores lógicos
 * são usados quando queremos juntas operadores
 * condicionais

let idade = 20;
let possuiCarteira = true;
 */
//     &&   - multiplicação 
//     ||   - soma binario
//     !    - negação
/* and - &&
 * 0 | 0 | 0
 * 0 | 1 | 0
 * 1 | 0 | 0
 * 1 | 1 | 1
 * 
 * our - ||
 * 0 | 0 | 0
 * 0 | 1 | 1
 * 1 | 0 | 1
 * 1 | 1 | 1

console.log(idade > 18 && possuiCarteira); // verdadeiro

idade = 16;
possuiCarteira = false;

console.log(idade > 18 || possuiCarteira); // verdadeiro

let Gasolina = false;
console.log(!Gasolina);
*/
/****************************************
 * conversão de tipos - cast
 * converte texto para numero

let numero1 = "10"; // string
let numero2 = "20"; // string

console.log(typeof numero1);
console.log(typeof numero2);

numero1 = Number(numero1); // tipo numero
console.log(typeof numero1);
 */
/****************************************
 * Conversão de tipo
 * numero para texto

let idade = 25;

console.log(typeof idade);
idade = String(idade);
console.log(typeof idade);
 */
/******************************************
 * Conversão de tipos
 * numero inteiros para decimais

let valor1 = "15.90";
let valor2 = "25.75";

// numeros inteiros
console.log(parseInt(valor1));

// numero flutuante
console.log(parseFloat(valor2));
 */

/*********************************************
 * entrada de dados pelo terminal

const prompt = require("prompt-sync")();

let numero1 = prompt("Digite um numero:");
let numero2 = prompt("Digite outro numero:");

numero1 = Number(numero1); // cast pra numero
numero2 = Number(numero2);

console.log("Numero digitado foi:", numero1);
console.log("Numero digitado foi:", numero2);

let resultado = numero1 + numero2;
console.log(resultado);
 */
/*********************************************
 * ordem de precedência
 * ordem 1 - divisao 2 - multiplicacao - 3 soma e subtracao
 * pode ser ajustado com parenteses
 */

//let operacao = (numero1 + numero2) / numero3;

/***********************************************
 * condicionais
 * estruturas de bloco

let notap1 = 7.8;
let notap2 = 8;
let notap3 = 3;

let resultado = (notap1 + notap2 + notap3) / 3;

console.log(resultado);

if(resultado > 7){
    // bloco se verdadeiro
    console.log("Parabéns");
}else{
    console.log("Tente novamente");
}
*/

/************************************************
 * blocos de condicao
 * encadeamento

let idade = 75;

if(idade > 18){
    console.log("Maior de idade");
    if(idade > 60){
        console.log("idoso");
    }
}else{
    console.log("Menor de idade");
    if(idade < 15){
        console.log("Criança");
    }
}
*/

/**********************************
 * mais opções de verificacao

let nota = 7

if(nota > 7){
    console.log("Aprovado");
}
else if(nota == 7){
    console.log("Precisa melhorar");
}
else{
    console.log("Recuperação");
}
 */
/*************************************
 * juntando condicoes

let nota = 7;

if(nota > 8 && nota < 10){
    console.log("Execelente");
}else{
    console.log("Precisa melhorar");
}
*/
/***********************************
 * switch
 * estrutura de condicao composta

let dia = 8;

switch(dia){
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    default:
        console.log("Número inválido");
}
 */
/************************************************
 * Operador ternário

let idade = 20;

let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resultado);
*/

/*************************************************
 * estrututas de repeticao
 * for
 */
// for(condicao de inicio ; condicao de parada ; condicao de avanço)
/*
for(let i = 1; i < 100; i = i + 10){
    console.log(i);
}
*/
/******************************************************
 * while - repete enquanto
 * precisa condicao de parada


let contador = 1;

while(contador < 5){
    console.log(contador);
    contador++;
}
 */
let indice = 6;

do{
    console.log(indice);
    indice++;
}while(indice < 5)
