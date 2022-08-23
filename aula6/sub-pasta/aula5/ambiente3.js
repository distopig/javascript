 let num= [1,3,6,2,9,8]
 num.sort()
 num.push(1)// esse comando aticiona um elemento novo 1 '-'
console.log(num)
 console.log(`o vetor tem ${num.length} posiçoes`)
 console.log(`este aqui e ${num[0]}`)
 // num.length e para contar quandos elementos tem no num '-'
//for(pos=0;pos <num.length;pos++){
//   console.log(`a posição ${pos} tem o valor ${num[pos]}`)
//}
//for ( pos in num) {
//   console.log(`a posição ${pos} tem o valor ${num[pos]}`)
//}
let pos = num.indexOf(15)
if (pos == -1) {
    console.log("o valor nao foi encontrado")
}else {
    console.log(`o valor 8 esta na posição ${pos}`)
}