
var jogadores = sessionStorage.getItem("jogadores")
var palavra_secreta = sessionStorage.getItem("palavra_secreta")
var palavra_adivinhando = Array()
var total_erros = 0
for(var i=0; i<palavra_secreta.length; i++){
    palavra_adivinhando[i] = '_'
}

function enviarChute(){
    var letra = document.getElementById('chute-letra').value
    letra = letra.toUpperCase()
    var acertou = 0
    for(var i in palavra_secreta){
        if(palavra_secreta[i] == letra){
            palavra_adivinhando[i] = letra
            acertou = 1
        }       
    }
    if(acertou == 0){
        contabilizarErro()
    }
    exibirPalavra()
}

function exibirPalavra(){
    var html_palavra = ''
    for(var i=0; i<palavra_adivinhando.length; i++){
        html_palavra += palavra_adivinhando[i] + ' '
    }
    document.getElementById('area-palavra').innerHTML = html_palavra
    document.getElementById('chute-letra').value = ''
}

function contabilizarErro(){
    total_erros += 1
    switch(total_erros){
        case 1:
            document.getElementById('imagem_forca').src = "imagens/forca_1.png"
        break
        case 2:
            document.getElementById('imagem_forca').src = "imagens/forca_2.png"
        break
        case 3:
            document.getElementById('imagem_forca').src = "imagens/forca_3.png"
        break
        case 4:
            document.getElementById('imagem_forca').src = "imagens/forca_4.png"
        break
        case 5:
            document.getElementById('imagem_forca').src = "imagens/forca_5.png"
            console.log("Jogo acabou")
        break
    }
    if(total_erros == 1){
        document.getElementById('chutes-errados').value += document.getElementById('chute-letra').value.toUpperCase()
    } else{
        document.getElementById('chutes-errados').value += " - " + document.getElementById('chute-letra').value.toUpperCase()
    }

}


console.log(jogadores)
console.log(palavra_secreta)
