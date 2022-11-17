function compra(){
    let res = document.querySelector('div#res')
    let nome = []
    let num = 0
    while(nome != 'n'){
        num += 1
        nome[num] = prompt('o que deseja comprar (digite não or n para parar)')
        
    }
    res.innerHTML = `${nome}`
}