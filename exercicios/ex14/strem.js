function soma(){
    let res = document.querySelector('div#res')
    let num1 = Number(prompt('digite o primeiro valor'))
    let num2 = Number(prompt('digite o segundo valor'))
    let op = Number(prompt(`os valores são ${num1} e o ${num2} 
    qual operação vamos fazer 
    [1] soma 
    [2] subtrair
    [3] dividir 
    [4] multiplicar`))
    res.innerHTML = `<h1>Calculando...<h1>`
    if (num1 == 0 || num2 == 0 || op == 0){
        res.innerHTML = `OPÇÃO INVÁLIDA! você digitou ${num1} e ${num2}, mas não sei o que fazer com eles`
    }else if (op == 1){
        res.innerHTML += `<p>${num1} + ${num2} = ${num1 + num2}</p>`
    } else if (op == 2){
        res.innerHTML += `<p>${num1} - ${num2} = ${num1 - num2}</p>`
    } else if (op == 3){
        res.innerHTML += `<p>${num1} / ${num2} = ${num1 / num2}</p>`
    }else{
        res.innerHTML += `<p>${num1} x ${num2} = ${num1 * num2}</p>`
    }
}