function parimp(n) {
    if (n%2==0) {
        return "par'-'"
    }else{
        return "inpar'-'"
    }
}
console.log(parimp(11))
//jeito mais simples

function soma(n1=0,n2=0){//esses =0 são parametros segundarios '-'
    return n1 + n2
}

console.log(soma(2))