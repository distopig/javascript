 let amg = {nome: 'josê',
sexo: 'm',
peso: 87.8,
engordar(p){
    console.log('engordau')
    this.peso += p
}}
amg.engordar(3)
console.log(`${amg.nome} pesa ${amg.peso}`)