var diryJ, dirxJ, jog, vel, pjx, pjy
var telaA, telaC
var jogo
var frame
function controle(){
    pjx = dirxJ*vel
    pjy = diryJ*vel
    jog.style.top = pjy + 'px'
    jog.style.left = pjx + 'px'
}
function loop(){
    if(jogo){
        //mecanica
        controle()
    }
    frame = requestAnimationFrame(loop)
}
function inicia(){
    jogo =true
    //ini tela
    telaA = window.innerHeight
    telaC = window.innerWidth
    //ini jogador
    dirxJ = diryJ = 0
    pjx = telaC / 2
    pjy = telaA / 2
    vel = 5
    jog = document.getElementById('naveJog')
    jog.style.top = pjy + 'px'
    jog.style.left = pjx + 'px'
    loop()
}
window.addEventListener('load', inicia)
document.addEventListener('keydown', teclaDw)
document.addEventListener('keyup', teclaup)
