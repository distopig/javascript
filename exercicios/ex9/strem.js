function salario(){
    let res = document.querySelector('div#res')
    let nome = prompt('qual o nome do funcionario')
    let atual = Number(prompt(`qual o salario atual de ${nome}`))
    let sal = Number(prompt('qualdo sera o reajuste'))
    res.innerHTML = `<h1>calculando<h1> <br>
    o salario atual e de ${atual} <br>
    com um aumento de ${sal}%. o salario vai aumentar R$${atual*sal/100}<br>
    ${nome} vai receber ${(atual*sal/100)+ atual}`
}