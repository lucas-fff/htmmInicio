
/*************************************************************
 * Diego Paiani
 * Versão: 02
 * Data 06/11/2026
 * Projeto Batalha Naval em Node.js
 *************************************************************/

const teclado = require("prompt-sync")();
var Fim_jogo = true;

// configura a saída do jogo
while(Fim_jogo){

    // variáveis de ambiente
    let Tamanho_Mapa = 5;
    let Quant_Barcos = 5;
    let Pontos = 0;
    let Quant_jogadas = 5;
    let Quant_Tiros = 5;

    // cria uma matriz
    let Tabuleiro = [];

    // preenche o mapa com água
    for(let linha = 0; linha <= Tamanho_Mapa; linha++){
        Tabuleiro[linha] = [];

        for(let coluna = 0; coluna <= Tamanho_Mapa; coluna++){
            Tabuleiro[linha][coluna] = false;
        }
    }

    /***************
     * false = água
     * true = barco
     * null = barco já atingido
     */

    /******************************************
     * Sorteia a posição dos barcos
     * Evita barcos na mesma posição
     ******************************************/

    let Barcos_Posicionados = 0;

    while(Barcos_Posicionados < Quant_Barcos){

        let PosicaoX = Math.floor(Math.random() * 6);
        let PosicaoY = Math.floor(Math.random() * 6);

        // verifica se já existe um barco na posição
        if(Tabuleiro[PosicaoX][PosicaoY] === false){

            Tabuleiro[PosicaoX][PosicaoY] = true;
            Barcos_Posicionados++;

        }
    }

    console.log(Tabuleiro);

    /****************************
     * Jogada do player
     ****************************/

    for(let j = 1; j <= Quant_jogadas; j++){

        let TiroPosicaoX;
        let TiroPosicaoY;

        // solicita e valida as coordenadas
        do{

            TiroPosicaoX = parseInt(teclado("Digite a coordenada em X:"));
            TiroPosicaoY = parseInt(teclado("Digite a coordenada em Y:"));

            // verifica se são números
            if(isNaN(TiroPosicaoX) || isNaN(TiroPosicaoY)){

                console.log("Digite coordenadas numéricas válidas!");

            }
            // verifica se estão dentro do tabuleiro
            else if(
                TiroPosicaoX < 0 || TiroPosicaoX > Tamanho_Mapa ||
                TiroPosicaoY < 0 || TiroPosicaoY > Tamanho_Mapa
            ){

                console.log("Coordenadas fora do tabuleiro! Digite valores entre 0 e 5.");

            }

        }while(
            isNaN(TiroPosicaoX) || isNaN(TiroPosicaoY) ||
            TiroPosicaoX < 0 || TiroPosicaoX > Tamanho_Mapa ||
            TiroPosicaoY < 0 || TiroPosicaoY > Tamanho_Mapa
        );

        // verifica se acertou um barco
        if(Tabuleiro[TiroPosicaoX][TiroPosicaoY] === true){

            console.log("*****************************");
            console.log("**** BARCO NAUFRAGADO ****");
            console.log("*****************************");

            Pontos += 10;

            // altera a posição para impedir pontuação repetida
            Tabuleiro[TiroPosicaoX][TiroPosicaoY] = null;

        }

        // verifica se acertou na água
        else if(Tabuleiro[TiroPosicaoX][TiroPosicaoY] === false){

            console.log("*****************************");
            console.log("**** TIRO NA ÁGUA ****");
            console.log("*****************************");

        }

        // verifica se já atirou nessa posição
        else if(Tabuleiro[TiroPosicaoX][TiroPosicaoY] === null){

            console.log("*****************************");
            console.log("**** VOCÊ JÁ ACERTOU ESSE BARCO! ****");
            console.log("*****************************");

        }

        // reduz a quantidade de tiros
        Quant_Tiros--;

        // quantidade de tiros
        console.log("********************************");
        console.log("**** Tiros restantes:", Quant_Tiros);

        // quantidade de pontos
        console.log("********************************");
        console.log("**** Pontuação:", Pontos);

        // sistema de pontuação
        if(Quant_Tiros == 0){

            if(Pontos >= 50){

                console.log("********************************");
                console.log("**** PARABÉNS VOCÊ VENCEU! ****");
                console.log("********************************");

            }else{

                console.log("********************************");
                console.log("**** TENTE NOVAMENTE! ****");
                console.log("********************************");

            }
        }
    }

    // encerra o jogo ou continua nova partida
    let Continuar = teclado("** Digite n para jogar novamente... **");

    if(Continuar == "n"){

        Fim_jogo = true;

    }else{

        Fim_jogo = false;

    }
}
