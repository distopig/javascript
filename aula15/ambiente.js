let num = [5,2,5,7,3,8,32,24]
num.push(1)
console.log(`o vetor tem ${num.length} posições`)
console.log(num)
/*
for (let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}
*/
for (let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}

console.log(num.indexOf(7))