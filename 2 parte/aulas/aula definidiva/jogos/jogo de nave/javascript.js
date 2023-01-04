var diryJ, dirxJ, jog, vel, pjx, pjy
var telaA, telaC
var jogo
var frame
function controle(){

}
function loop(){
    if(jogo){
        //mecanica
    }
    frame = requestAnimationFrame(loop)
}
function inicia(){
    jogo = false
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
}
window.addEventListener('load', inicia)
document.addEventListener('keydown', teclaDw)
document.addEventListener('keyup', teclaup)
