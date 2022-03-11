// ========== HEADER ==========
function pix() {
    navigator.clipboard.writeText('Diego Luiz da Silva\nNubank\n08913729466')
}
// ========== COPIAR TEXTOS ==========
const list = document.querySelectorAll('.copy li')
const copyicon = document.querySelectorAll('.catalogo img')
const price = document.querySelectorAll('.price')
for (let element of list) {
    element.addEventListener('click', function () {
        let txt = element.innerText
        navigator.clipboard.writeText(txt)
    })
}
function copyiconf(father) {
    navigator.clipboard.writeText(father)
}
for (let element of price) {
    element.addEventListener('click', function () {
        let txt = element.innerText
        navigator.clipboard.writeText(txt)
    })
}
