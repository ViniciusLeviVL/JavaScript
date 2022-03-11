var data = new Date()
var hora = data.getHours()
document.getElementById ('hour').innerHTML = hora
if (hora >= 3 && hora < 11) { // BOM DIA
    document.body.style.backgroundColor = '#eda96d'
    document.querySelector('main img').src = 'imagens/manha.png'
} else if (hora >= 11 && hora <= 17) { // BOA TARDE
    document.body.style.backgroundColor = '#db6307'
    document.querySelector('main img').src = 'imagens/tarde.png'
} else { // BOA NOITE
    document.body.style.backgroundColor = '#503e63'
    document.querySelector('main img').src = 'imagens/noite.png'
}