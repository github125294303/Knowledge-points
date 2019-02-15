let express = require('express')
let app =express()
app.use(express.static(__dirname))
app.listen(4000,()=>{
   console.log('4000启动成功') 
})
// localhost:4000/index.html