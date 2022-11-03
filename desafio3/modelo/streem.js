function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.Value == 0 || fim.value == 0 || passo.value.length == 0){
        alert('erro')
    }else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            p = 1
        }
        if (i < f){
            //contagem crecente
          for (let c = 1; c <= f; c += p){
            res.innerHTML += `${c} \u{1f449}`
            }
        }else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}` 
    }
}