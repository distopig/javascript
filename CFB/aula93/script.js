var div, div2, div3, div4
window.addEventListener('load', inicia)
function inicia(){
    div = document.getElementById('div')
    div2 = document.getElementById('div2')
    div3 = document.getElementById('div3')
    div4 = document.getElementById('div4')

    div.addEventListener('mouseover', troca)
    div.addEventListener('mouseout', volta)
    
    div2.addEventListener('mouseover', troca)
    div2.addEventListener('mouseout', volta)

    div3.addEventListener('mouseover', troca)
    div3.addEventListener('mouseout', volta)

    div4.addEventListener('mouseover', troca)
    div4.addEventListener('mouseout', volta)
}
function troca(){
    var obj = event.target
    obj.style.backgroundImage = 'url(cokie2.jfif)'
}
function volta(){
    var obj = event.target
    obj.style.backgroundImage = 'url(cookie1.jfif)'
}