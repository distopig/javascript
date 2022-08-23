//let v = function(x){
//    return x*2
//}
//console.log(v(10))
// foi passado para uma variavel um parametro e
// ele consegui executar uma ação

function fatorial(n){
    let fat = 1
    for (let c=n; c>1; c--) {
        fat *=c
        
    }
    return fat
}
console.log(fatorial(5))
// 5! = 5 x 4 x 3 x 2 x 1 = 120 '-' 

function fatorial(n){
    if(n==1){
        return 1
    }else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(9))