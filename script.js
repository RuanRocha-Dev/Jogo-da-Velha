var jogo = [];
var tabuleiro = [];
var quemJoga = 0;
var verifica;
var jogando = true;
var nivel;
var jogadaCpu = 1;
var quemComeca = 1;
var jogada = 0;

alert("BEM VINDO AO JOGO DA SENHORINHA" + "\n" + "\n" +
"selecione o nivel de dificuldade... " + "\n" + 
" se não você irá jogar sozinho(a) " + "\n" +
" não me decepcione. :D"); 

let old = document.querySelector("body");
    old.setAttribute("id", "old");

function facil(){
    alert("você escolheu a dificuldade: MEL NA CHUPETA");
    nivel = "facil";
    old.removeAttribute("id");
}

function dificil(){
    alert("você escolheu a dificuldade: ONDE OS FRACOS NÃO TEM VEZ");
    nivel = "dificil";
    old.removeAttribute("id");
}

function cpuJoga(){
    if(jogando){
        var l, c;
        if(nivel == "facil"){
            do{
                l = Math.round(Math.random()*2);
                c = Math.round(Math.random()*2);
            }
            while(jogo[l][c] != "");
            jogo[l][c] = "O";
        }
        else if(nivel == "dificil"){
                //verificação linha 1 
            if ((jogo[0][0] == "O") && (jogo[0][1] == "O") && (jogo[0][2] == "")){
                jogo[0][2] = "O";
            }
            else if((jogo[0][0] == "O") && (jogo[0][2] == "O") && (jogo[0][1] == "")){
                jogo[0][1] = "O";
            }
            else if((jogo[0][1] == "O") && (jogo[0][2] == "O") && (jogo[0][0] == "")){
                jogo[0][0] = "O";
            }else
                //verificação linha 2
            if ((jogo[1][0] == "O") && (jogo[1][1] == "O") && (jogo[1][2] == "")){
                jogo[1][2] = "O";
            }
            else if((jogo[1][0] == "O") && (jogo[1][2] == "O") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[1][1] == "O") && (jogo[1][2] == "O") && (jogo[1][0] == "")){
                jogo[1][0] = "O";
            }else
                //verificação linha 3 
            if ((jogo[2][0] == "O") && (jogo[2][1] == "O") && (jogo[2][2] == "")){
                jogo[2][2] = "O";
            }
            else if((jogo[2][0] == "O") && (jogo[2][2] == "O") && (jogo[2][1] == "")){
                jogo[2][1] = "O";
            }
            else if((jogo[2][1] == "O") && (jogo[2][2] == "O") && (jogo[2][0] == "")){
                jogo[2][0] = "O";
            }else
                //verificação coluna 1 
            if ((jogo[0][0] == "O") && (jogo[1][0] == "O") && (jogo[2][0] == "")){
                jogo[2][0] = "O";
            }
            else if((jogo[0][0] == "O") && (jogo[2][0] == "O") && (jogo[1][0] == "")){
                jogo[1][0] = "O";
            }
            else if((jogo[1][0] == "O") && (jogo[2][0] == "O") && (jogo[0][0] == "")){
                jogo[0][0] = "O";
            }else
                //verificação coluna 2 
            if ((jogo[0][1] == "O") && (jogo[1][1] == "O") && (jogo[2][1] == "")){
                jogo[2][1] = "O";
            }
            else if((jogo[0][1] == "O") && (jogo[2][1] == "O") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[1][1] == "O") && (jogo[2][1] == "O") && (jogo[0][1] == "")){
                jogo[0][1] = "O";
            }else
                //verificação coluna 3 
            if ((jogo[0][2] == "O") && (jogo[1][2] == "O") && (jogo[2][2] == "")){
                jogo[2][2] = "O";
            }
            else if((jogo[0][2] == "O") && (jogo[2][2] == "O") && (jogo[1][2] == "")){
                jogo[1][2] = "O";
            }
            else if((jogo[1][2] == "O") && (jogo[2][2] == "O") && (jogo[0][2] == "")){
                jogo[0][2] = "O";
            }else
                  //verificação diagonal 1 
            if ((jogo[0][0] == "O") && (jogo[1][1] == "O") && (jogo[2][2] == "")){
                jogo[2][2] = "O";
            }
            else if((jogo[0][0] == "O") && (jogo[2][2] == "O") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[1][1] == "O") && (jogo[2][2] == "O") && (jogo[0][0] == "")){
                jogo[0][0] = "O";
            }else
                  //verificação diagonal 2 
            if ((jogo[0][2] == "O") && (jogo[1][1] == "O") && (jogo[2][0] == "")){
                jogo[2][0] = "O";
            }
            else if((jogo[0][2] == "O") && (jogo[2][0] == "O") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[2][0] == "O") && (jogo[1][1] == "O") && (jogo[0][2] == "")){
                jogo[0][2] = "O";
            }else
                //DEFESA
                //verificação linha 1
            if ((jogo[0][0] == "X") && (jogo[0][1] == "") && (jogo[0][2] == "")){
                jogo[0][2] = "O";
            }
            else if((jogo[0][0] == "X") && (jogo[0][2] == "X") && (jogo[0][1] == "")){
                jogo[0][1] = "O";
            }
            else if((jogo[0][1] == "X") && (jogo[0][2] == "X") && (jogo[0][0] == "")){
                jogo[0][0] = "O";
            }else
                //verificação linha 2
            if ((jogo[1][0] == "X") && (jogo[1][1] == "") && (jogo[1][2] == "")){
                jogo[1][2] = "O";
            }
            else if((jogo[1][0] == "X") && (jogo[1][2] == "X") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[1][1] == "X") && (jogo[1][2] == "X") && (jogo[1][0] == "")){
                jogo[1][0] = "O";
            }else
                //verificação linha 3
            if ((jogo[2][0] == "X") && (jogo[2][1] == "") && (jogo[2][2] == "")){
                jogo[2][2] = "O";
            }
            else if((jogo[2][0] == "X") && (jogo[2][2] == "X") && (jogo[2][1] == "")){
                jogo[2][1] = "O";
            }
            else if((jogo[2][1] == "X") && (jogo[2][2] == "X") && (jogo[2][0] == "")){
                jogo[2][0] = "O";
            }else
                //verificação coluna 1
            if ((jogo[0][0] == "X") && (jogo[0][1] == "") && (jogo[0][2] == "")){
                jogo[0][2] = "O";
            }
            else if((jogo[0][0] == "X") && (jogo[0][2] == "X") && (jogo[0][1] == "")){
                jogo[0][1] = "O";
            }
            else if((jogo[0][1] == "X") && (jogo[0][2] == "X") && (jogo[0][0] == "")){
                jogo[0][0] = "O";
            }else
                //verificação coluna 2 
            if ((jogo[0][1] == "X") && (jogo[1][1] == "X") && (jogo[2][1] == "")){
                jogo[2][1] = "O";
            }
            else if((jogo[0][1] == "X") && (jogo[2][1] == "X") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[1][1] == "X") && (jogo[2][1] == "X") && (jogo[0][1] == "")){
                jogo[0][1] = "O";
            }else 
                //verificação coluna 3 
            if ((jogo[0][2] == "X") && (jogo[1][2] == "X") && (jogo[2][2] == "")){
                jogo[2][2] = "O";
            }
            else if((jogo[0][2] == "X") && (jogo[2][2] == "X") && (jogo[1][2] == "")){
                jogo[1][2] = "O";
            }
            else if((jogo[1][2] == "X") && (jogo[2][2] == "X") && (jogo[0][2] == "")){
                jogo[0][2] = "O";
            }else  
                  //verificação diagonal 1 
            if ((jogo[0][0] == "X") && (jogo[1][1] == "X") && (jogo[2][2] == "")){
                jogo[2][2] = "O";
            }
            else if((jogo[0][0] == "X") && (jogo[2][2] == "X") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[1][1] == "X") && (jogo[2][2] == "X") && (jogo[0][0] == "")){
                jogo[0][0] = "O";
            }else
                  //verificação diagonal 2 
            if ((jogo[0][2] == "X") && (jogo[1][1] == "X") && (jogo[2][0] == "")){
                jogo[2][0] = "O";
            }
            else if((jogo[0][2] == "X") && (jogo[2][0] == "X") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[2][0] == "X") && (jogo[1][1] == "X") && (jogo[0][2] == "")){
                jogo[0][2] = "O";
            }
            else{
                if(jogada < 8){
                    do{
                        l = Math.round(Math.random()*2);
                        c = Math.round(Math.random()*2); 
                    }
                    while(jogo[l][c] != "");
                    jogo[l][c] = "O";
                }
                else{
                    for(l = 0; l < 3; l++){
                        for(c = 0; c < 3; c++){
                            if(jogo[l][c] == ""){
                                jogo[l][c] = "O";
                            }
                        }
                    }
                }
            }
        }
        verifica = verificaVitoria();
        if(verifica != ""){
            alert(verifica + " venceu!");
            jogando = false;
        }
        attTabuleiro();
        jogada++;
        quemJoga = 0;
        
    }
}

function verificaVitoria(){
    var l,c;
    for(l = 0; l < 3; l++){
        if((jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2])){
            return jogo[l][0]
        }
    }
    for(c = 0; c < 3; c++){
        if((jogo[0][c] == jogo[1][c]) && (jogo[1][c] == jogo[2][c])){
            return jogo[0][c]
        }
    }
    if((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2])){
            return jogo[0][0]
    }
    if((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0])){
        return jogo[0][2]
    }
    return "";
}

function jogar(p){

    if((jogando) && (quemJoga == 0)){
        switch(p){
            case 1:
                if(jogo[0][0] == ""){
                    jogo[0][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 2:
                if(jogo[0][1] == ""){
                    jogo[0][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 3:
                if(jogo[0][2] == ""){
                    jogo[0][2] = "X";
                    quemJoga = 1;
                }
                break;
            case 4:
                if(jogo[1][0] == ""){
                    jogo[1][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 5:
                if(jogo[1][1] == ""){
                    jogo[1][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 6:
                if(jogo[1][2] == ""){
                    jogo[1][2] = "X";
                    quemJoga = 1;
                }
                break;
            case 7:
                if(jogo[2][0] == ""){
                    jogo[2][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 8:
                if(jogo[2][1] == ""){
                    jogo[2][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 9:
                if(jogo[2][2] == ""){
                    jogo[2][2] = "X";
                    quemJoga = 1;
                }
                break;
            default:
                break;
        }
        if(quemJoga == 1){
        attTabuleiro();
        verifica = verificaVitoria();
        if(verifica != ""){
            alert(verifica + " venceu!");
            jogando = false;
        }
        jogada++;
        cpuJoga();
        }
    }
}

function attTabuleiro(){
    for (l = 0; l < 3; l++){
        for (c = 0; c < 3; c++){
            if (jogo[l][c] == "X"){
                tabuleiro[l][c].innerHTML = "X";
                tabuleiro[l][c].style.cursor = "default";
                
            }
            else if (jogo[l][c] == "O"){
                tabuleiro[l][c].innerHTML = "O";
                tabuleiro[l][c].style.cursor = "default";
                
            }
            else{
                tabuleiro[l][c].innerHTML = "";
                tabuleiro[l][c].style.cursor = "pointer";
            }
        }
    }
}

function iniciar(){
    jogando = true;
    jogadaCpu = 1;
    jogada = 0;
    jogo=[
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    tabuleiro = [
        [document.getElementById("dv1"),document.getElementById("dv2"),document.getElementById("dv3")],
        [document.getElementById("dv4"),document.getElementById("dv5"),document.getElementById("dv6")],
        [document.getElementById("dv7"),document.getElementById("dv8"),document.getElementById("dv9")]
    ];
    attTabuleiro();
    if(quemComeca == 1){
        quemComeca = 0;
        quemJoga = quemComeca;
        document.getElementById("botao").innerHTML = "Quem começa: JOGADOR";
    } 
    else{
        quemComeca = 1;
        quemJoga = quemComeca;
        document.getElementById("botao").innerHTML = "Quem começa: CPU";
        cpuJoga();
    }
}

window.addEventListener("load", iniciar);