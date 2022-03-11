function gerartabuada() {
    var n = document.getElementById('ntab').value
    var ultab = document.getElementById('ultab')
    ultab.innerHTML = ''
    if (n.length == 0) {
        window.alert ('[ERRO] Verifique os dados e tente novamente !')
    } else {
        for (var c = 1; c <= 10; c++){
            var item = document.createElement('li')
            item.innerHTML = `${c} x ${n} = ${c*n}`
            ultab.appendChild(item)
        }
    }
}
