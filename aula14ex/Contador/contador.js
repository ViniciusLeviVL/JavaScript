function contar() {
    let ini = document.getElementById ('inin')
    let fim = document.getElementById ('infi')
    let pas = document.getElementById ('inpa')
    let res = document.getElementById ('res')
    res.innerHTML = ''
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
        window.alert ('[ERRO] Faltam dados !')
    } else {
        ini = Number(ini.value)
        fim = Number(fim.value)
        pas = Number(pas.value)
        if (pas <= 0) {
            window.alert ('Passo inválido ! Considerando PASSO 1 !')
            pas = 1
        }
        if (ini < fim) {
            for ( ; ini <= fim ; ini += pas){
                res.innerHTML += ini + ' &#x1F449 '
            }
        } else {
            for ( ; ini >= fim ; ini -= pas){
                res.innerHTML += ini + ' &#x1F449 '
            }
        }
        
    }
    res.innerHTML += ' &#x1F3C1'   
}
/*  
    res.innerHTML += ini + ' &#x1F449 '
    res.innerHTML += ' &#x1F3C1' 
*/