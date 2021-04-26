/*Lista de possíveis palavras a serem sorteadas*/
var lista_de_palavras = ['ARANHA', 'BORBOLETA', 'CACHORRO', 'DINOSSAURO', 'ELEFANTE', 'FORMIGA', 'GORILA', 'HIPOPOTAMO', 'IGUANA', 'JACARE', 'LEOPARDO', 'MARIPOSA', 'NAJA', 'OVELHA', 'PERU', 'QUATI', 'RINOCERONTE', 'SALAMANDRA', 'TOURO', 'URSO', 'VEADO', 'XEXEU', 'ZEBRA']
var palavra_secreta = 'VAZIA'
var jogadores = 0
function habilitarComeco(){/*Habilita botão de começar*/
    document.getElementById('button_start').disabled = false
}
function habilitarPalavra(estado){/*Habilita ou desabilita o campo da palavra dependendo da quantidade de jogadores selecionada*/
    document.getElementById('palavra_secreta').disabled = estado
}

function comecarJogo(){/*Confere a quantidade de jogadores, define a palavra secreta, guarda ambos no sessionStorage e vai pra proxima página*/
    var quantidade_jogadores = document.getElementsByName('quantidade_jogadores')
    for(var i=0; i<quantidade_jogadores.length; i++){
        if(quantidade_jogadores[i].checked){
            jogadores = quantidade_jogadores[i].value
        }
    }

    if(jogadores == 1){
        var posicao_palavra = parseInt(Math.random() * lista_de_palavras.length)
        palavra_secreta = (lista_de_palavras[posicao_palavra])
    } else{
        palavra_secreta = document.getElementById('palavra_secreta').value
        palavra_secreta = palavra_secreta.trim()
        palavra_secreta = palavra_secreta.toUpperCase()
        if(palavra_secreta == ''){
            alert("Por favor preencha o campo: Palavra Secreta")
            return
        }
    }

    sessionStorage.clear()
    sessionStorage.setItem("jogadores", jogadores)
    sessionStorage.setItem("palavra_secreta", palavra_secreta)
    window.location.href = "jogando.html"
}


