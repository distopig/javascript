function verificar(){
    let res = document.querySelector('div#res')
    let num = Number(prompt('digite o valor do produto antes'))
    let valor = Number(prompt('agora o preço dele hoje'))
    res.innerHTML = `<h1>O produto antes custava ${num} e passou a valer ${valor}</h1>`
    if (num < valor){
        res.innerHTML += `<br> hoje o produto esta mais caro <br>
        o preço subiu ${valor - num} reais <br>
        uma variação de ${(valor/num-1)*100}% pra cima`
    } else{
        res.innerHTML += `<br> hoje o produto esta mais barato <br>
        o preço caiu ${num - valor} reais <br>
        uma variação de ${(valor/num-1)*100}% pra baixo`
    }
    
}