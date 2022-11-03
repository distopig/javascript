function compra(){
    let nome = prompt('qual produto quer compra?')
    let pre = Number(prompt('quando ele custa?'))
    let din = Number(prompt('quando você vai paga'))
    alert(`certo, você quer comprar um ${nome} que custa R$${pre} com R$${din}, você vai receber R$${din - pre} de troco`)
}