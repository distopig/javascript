function notas(){
    let res = document.querySelector('div#res')
    let nome = prompt('qual o nome do aluno?')
    let pri = Number(prompt(`primeira nota de ${nome}`))
    let seg = Number(prompt(`segunda nota de ${nome}`))
    res.innerHTML = `${nome} esta com a media ${(pri + seg) / 2}`
    if ((pri + seg) / 2 <= 3){
        res.innerHTML += ` esta reprovado`
    } else if ((pri + seg) / 2 <= 5) {
        res.innerHTML += ` esta recuperação`
    } else{
        res.innerHTML += ` esta aprovado`
    }

}