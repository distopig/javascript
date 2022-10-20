function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano) {
        alert('erro')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src','garoto.jpg' )
            }else if (idade < 25) {
                //adulto
                img.setAttribute('src','homem.jpg')
            }else if (idade < 50) {
                //idoso
                img.setAttribute('src','velho.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src','garota.jpg')
            }else if (idade < 25) {
                //adulto
                img.setAttribute('src','mulher.jpg')
            }else if (idade < 50) {
                //idoso
                img.setAttribute('src','velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos: ${genero} com ${idade} anos`
        img.style.width = '400px'
        img.style.height = '400px'
        img.style.borderRadius = '500px'
        img.style.backgroundSize = 'cover'
        res.appendChild(img)
    }
}