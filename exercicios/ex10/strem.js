function verificar(){
    let res = document.querySelector('div#res')
    let ano = Number(prompt('de que ano vamos começar'))
    if (ano % 4 == 0){
        if(ano % 100 == 0){
            if(ano % 400 == 0){
                res.innerHTML = `o ano ${ano} é bissexto`
            }
        }
    } else{
        res.innerHTML = `o ano ${ano} não é bissexto`
    }
}