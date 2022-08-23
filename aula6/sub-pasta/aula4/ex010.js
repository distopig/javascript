var agora = new Date()
// esse comando pega o horario atual do sistema 
// junto gethours eu pego as horas
var hora = agora.getHours
console.log(`agora são exatamende ${agora} horas`)
if (hora <12) {
    console.log("bom dia")
}else if(hora<=18){
    console.log("boa tarde")
}else{
    console.log("boa noite")
}