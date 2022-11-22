function tab() {
    var res = document.querySelector('div#res')
    var tab = Number(document.getElementById('tab').value)
    res.innerHTML = `<h1>Tabuada de ${tab}<h1>`
    for(let num = 1; num <= 10; num++){
        res.innerHTML += `${tab} x ${num} = ${tab*num}<br>`
    }
}