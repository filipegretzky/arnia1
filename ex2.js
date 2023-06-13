let io = require("../io")
io.write('diguite seu nome')
let n = io.read()
io.write('diguite o numero de vezez para repetiçao')
let n2 = io.readInt()
for(let i =1; i<n2;i++){
    io.write(i+n)

}
