function soma(){
    let res = document.querySelector('div#res')
    let con = 0
    let soma = 0
    do {
        num = Number(prompt('digite um numero (digite 0 para parar)'))
        con++
        soma += num 
    } while (num != 0);
    res.innerHTML = `o total de numero de colocados foi ${con} <br>
    a soma de todos esses numero é ${soma}`

}