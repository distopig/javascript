function verificar(){
    var data = new date()
    var ano = data.getfullyear()
    var fano = document.getElementsByid('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('verifique os dados')
    } else {
        var fsex = document.getElementsByName('radio')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade de ${idade}`
    }
}