let dol = Number(prompt('digite a cotação do dolar atual'))
function converter(){
    let res = document.querySelector('div#res')
    let num = Number(prompt('quantos R$ você tem na carteira'))
    res.innerHTML = `com ${num} reais você pode ter ${num/dol} dolares`
}