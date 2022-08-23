function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomnhã.png'
        document.body.style.background = '#d9a6b8'
    } else if (hora >= 12 && hora < 18){
        img.src = 'fotetarde.png'
        document.body.style.background = '#e26603'
    }else {
        img.src = 'foteonoite.png'
        document.body.style.background = '#382a43'
    }
}
