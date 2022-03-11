
function verificar() {
    
    // Variáveis da IDADE
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('nasc').value
    // Teste de dados
    if (nasc > ano || nasc <= 0) {
        window.alert ('[ERRO] Verifique os dados e tente novamente !')
    } else { 
        // Verificar SEXO
        var fsexo = document.getElementsByName('radsex')
        if (fsexo[0].checked) {
            var sexo = 'Homem'
        } else {
            var sexo = 'Mulher'
        }
        // Verificar IDADE
        var idade = ano - nasc
        var foto = document.querySelector('img#imgidade')
        if (sexo == 'Homem') {
            if (idade >= 0 && idade < 10) {
                // Criança
                foto.src = 'imagens/homem-crianca.png'
            } else if (idade < 21) {
                // Jovem
                foto.src = 'imagens/homem-jovem.png'
            } else if (idade < 50) {
                // Adulto
                foto.src = 'imagens/homem-adulto.png'
            } else {
                // Idoso
                foto.src = 'imagens/homem-idoso.png'
            }
        } else {
            if (idade >= 0 && idade < 10) {
                //Criança
                foto.src = 'imagens/mulher-crianca.png'
            } else if (idade < 21) {
                // Jovem
                foto.src = 'imagens/mulher-jovem.png'
            } else if (idade < 50) {
                // Adulto
                foto.src = 'imagens/mulher-adulto.png'
            } else {
                // Idoso
                foto.src = 'imagens/mulher-idoso.png'
            }
        }
        
            
        document.getElementById('result').innerHTML = `Detectamos: ${sexo} com ${idade} ano(s).`  

        } // Fim do if ( Teste de dados )
    
} // Fim da Function Verificar()