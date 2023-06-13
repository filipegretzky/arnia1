let io = require("../io")
io.write('diquite o numero ')
 let maior = 0
 for(let i = 0; i < 10 ; i++){
    let numero = io.read()

    if(maior < numero){
        maior = numero
    }
 }
io.write('o maior numero e : '+ maior)