function calcular(){
    let res = document.querySelector('div#res')
    let a = Number(prompt('qual o valor de a'))
    let b = Number(prompt('qual e o valor de b'))
    let c = Number(prompt('qual e o valor de c'))
    res.innerHTML = `a equação e <strong>
        ${a}x^
        2 + ${b}x + ${c} = 0
    </strong> <br>
    o calculo será Δ = ${b}^2 - 4 . ${a} . ${c} <br>
    o valoe de Δ e ${b**2 - 4 * a * c}`
}