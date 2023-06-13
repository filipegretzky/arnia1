let io = require("../io")
let contador = 1
let maior = 0
let calculo = 0
for(let i = 1; i<=5;i++){
    io.write('digite o idade da pessoa :'+ contador)
    let idade = io.readInt()
    io.write('digite a altura da pessoa :'+ contador)
    let altura = io.readFloat()
    contador++
    calculo = calculo + altura
    if(maior < idade){
        maior = idade
    }
}
io.write('a maior idade e :'+ maior)
io.write('a media de altura e :'+ (calculo / 5))