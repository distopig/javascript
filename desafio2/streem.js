function verificar() {
    var ano = document.getElementById('idata')
    var data = new Date()
    var ano2 = data.getFullYear()
    var sex = document.getElementsByName('sexo')
    var msg = document.getElementById('msg')
    var dia = ano2 - ano
    msg.innerHTML = `${ano2}`
}