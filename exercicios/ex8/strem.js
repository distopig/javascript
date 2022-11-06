function calcular(){
    let nome = prompt('qual o produto que você quer comprar')
    let num = Number(prompt(`qual o preço de ${nome}`))
    let res = document.querySelector('div#res')
    res.innerHTML = `<h1>Calculando desconto de 10% para ${nome}<h1> <br>
    o preço original era R$${num} <br>
    ganhou ${10/100*num} de desconto(-10%)<br>
    agora o preço é ${num-(10/100*num)}`
}