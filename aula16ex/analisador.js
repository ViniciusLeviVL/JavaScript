let num = document.getElementById('numana')
let select = document.getElementById('selana')
let res = document.getElementById('res')
let valores = []
function testeIsNum(n) {
    if (n >= 1 && n <=100) {
        return true
    } else {
        return false
    }
}
function testeNotInSelect(n, val) {
    if (val.indexOf(n) == -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (testeIsNum(Number(num.value)) && testeNotInSelect(Number(num.value),valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        let qnum = valores.length
        item.value = `n${qnum}`
        select.appendChild(item)
    } else {
        window.alert('O valor está fora dos parâmetros ou ja foi adicionado')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        res.innerHTML = 'Adicione números e tente novamente'
    } else {
        let qnum = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let somat = 0
        for (let c = 0; c < qnum ; c++){
            if (maior < valores[c]) {
                maior = valores[c]
            }
            if (menor > valores[c]) {
                menor = valores[c]
            }
            somat = somat + valores[c]
        }
        let media = somat/qnum
        media = media.toFixed(1)
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${qnum} números cadastrados</p>`
        res.innerHTML += `<p>O maior número cadastrado foi ${maior}</p>`
        res.innerHTML += `<p>O menor número cadastrado foi ${menor}</p>`
        res.innerHTML += `<p>Somando os números temos ${somat}</p>`
        res.innerHTML += `<p>A média dos números cadastrados é ${media}`
    }

}
