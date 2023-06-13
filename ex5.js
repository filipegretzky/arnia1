let io = require("../io")
io.write('diquite um numero')
let n = io.readInt()
for(let i = 0 ;i< n ; i+= 2){
 io.write(i)
}