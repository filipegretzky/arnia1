let io = require("../io")
let nome = 0
let iq = 0
for(let i = 0; i<10;i++){
    io.write('diquite um nome')
    nome= io.read()

    if (nome=='maria'){
    iq ++
 
    }
    
}
io.write(iq)