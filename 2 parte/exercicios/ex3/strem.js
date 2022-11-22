function fatorial(){
    var res = document.querySelector('div#res')
    var num = Number(document.getElementById('num').value)
    var fat = 1
    var con = num
    if (num < 1 || num >21){
        alert('erro!!!')
    }else{
        res.innerHTML = `<h1>Calculando ${num}!<h1>`
        while(con > 1){
            res.innerHTML += ` ${con} x`
            fat *= con
            con--
        }
    }
    res.innerHTML += ` 1 = ${fat.toLocaleString('pt-BR')}`
}