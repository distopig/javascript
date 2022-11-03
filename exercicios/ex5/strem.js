function converter(){
    let res = document.querySelector('div#res')
    let num = Number(prompt('digite uma distancia em metros (m)'))
    res.innerHTML = `<h1>A distância de ${num} metros, corresponde a...</h1> <br>
    ${num / 1000} quilômetros (km) <br>
    ${num / 100} hectômetros (hm) <br>
    ${num / 10} decâmetros (dam) <br>
    ${num * 10} decimetros (dm) <br>
    ${num * 100} centimetros (cm) <br>
    ${num * 1000} milimetros (mm)`
}