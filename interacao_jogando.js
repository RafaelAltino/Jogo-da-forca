
var jogadores = sessionStorage.getItem("jogadores")
var palavra_secreta = sessionStorage.getItem("palavra_secreta")
var palavra_adivinhando = Array()
for(var i=0; i<palavra_secreta.length; i++){
    palavra_adivinhando[i] = '_'
}

function enviarChute(){
    var html_palavra = document.getElementById('area-palavra').innerHTML
    for(var i=0; i<palavra_adivinhando.length; i++){
        html_palavra += palavra_secreta[i] + ' '
    }
    document.getElementById('area-palavra').innerHTML = html_palavra
}


console.log(jogadores)
console.log(palavra_secreta)
