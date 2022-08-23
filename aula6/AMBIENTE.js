let amigo = {nome: "pedro",
genero:"m",
peso:85.5,
engorda(p=0){
    console.log("engordou")
    this.peso += p
}

}
amigo.engorda(2)
//o amigo q e uma variavel consegue ser uma função
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)