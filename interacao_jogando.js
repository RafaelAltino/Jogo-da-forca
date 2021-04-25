
var jogadores = sessionStorage.getItem("jogadores")
var palavra_secreta = sessionStorage.getItem("palavra_secreta")
var palavra_adivinhando = Array()
var total_erros = 0
for(var i=0; i<palavra_secreta.length; i++){
    if(palavra_secreta[i] == ' '){
        palavra_adivinhando[i] = '&nbsp;'
    }else{
        palavra_adivinhando[i] = '_'
    }
    
}

function verificarChute(chute){
    if(chute.length >= 2){
        alert("Digite apenas uma letra")
        return false
    } else if(chute == ''){
        alert("Campo vazio")
        return false
    } else{
        return true
    }
}

function enviarChute(){
    var letra = document.getElementById('chute-letra').value
    letra = letra.toUpperCase()
    if(verificarChute(letra)){
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
        verificarFim()
    } else{       
        document.getElementById('chute-letra').value = ''
    }
    
} /*Fim da função enviarChute*/

function exibirPalavra(){
    var html_palavra = ''
    for(var i=0; i<palavra_adivinhando.length; i++){
        html_palavra += palavra_adivinhando[i] + ' '
    }
    document.getElementById('area-palavra').innerHTML = html_palavra
    console.log(html_palavra)
    document.getElementById('chute-letra').value = ''
} /*Fim da função exibirPalavra*/

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
        break
    }
    if(total_erros == 1){
        document.getElementById('chutes-errados').value += document.getElementById('chute-letra').value.toUpperCase()
    } else{
        document.getElementById('chutes-errados').value += " - " + document.getElementById('chute-letra').value.toUpperCase()
    }

} /*Fim da função contabilizarErro*/

function verificarFim(){
    var palavra_auxiliar = ''
    for(var i=0; i<palavra_adivinhando.length; i++){
        if(palavra_adivinhando[i] == '&nbsp;'){
            palavra_auxiliar += ' '
        } else{
            palavra_auxiliar += palavra_adivinhando[i]
        }
        
    }
    if(total_erros == 5){
        exibirDerrota()
    } else if(palavra_auxiliar == palavra_secreta){
        exibirVitoria()
    }  
} /*Fim da função verificarFim*/

function exibirVitoria(){
    document.getElementById('logo').innerHTML += ' - Você venceu!'
    document.getElementById('imagem_forca').src = "imagens/forca_vitoria.png"
    jogarNovamente()
}

function exibirDerrota(){
    var palavra_auxiliar = ''
    document.getElementById('logo').innerHTML += ' - Você perdeu!'
    for(var i=0; i<palavra_adivinhando.length; i++){
        if(palavra_adivinhando[i] == '_'){
            palavra_auxiliar += '<span style="color: red;">' + palavra_secreta[i] + '</span> '
        } else{
            palavra_auxiliar += palavra_adivinhando[i] + ' '
        }
    }
    console.log(palavra_adivinhando)
    console.log(palavra_auxiliar)
    document.getElementById('area-palavra').innerHTML = palavra_auxiliar
    document.getElementById('chute-letra').value = ''
    jogarNovamente()
}

function jogarNovamente(){
    var botao_jogar_novamente = '<button id="btn-jogar-novamente" onclick="resetarJogo()">Jogar Novamente</button><br>'
    var errados = document.getElementById('chutes-errados').value
    document.getElementById('area-chutes').innerHTML = botao_jogar_novamente + '<input id="chutes-errados" type="text" value="' + errados + '" disabled=true>'
}

function resetarJogo(){
    window.location.href = "index.html"
}

