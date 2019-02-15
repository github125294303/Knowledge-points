let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
let path = require('path')//引入路径模块
app.listen(3030);
//app.use(express.static('public'))//访问静态文件
//解析请求体
//app.use('/static',express.static('public'))//如果写了一个路径，会在访问的路径前面添加这个路径  localhost：3000/static
app.use(express.static(path.join(__dirname,'public')))
//__dirname表示绝对路径
//path路径方法，path.join拼接路径
//为了访问更加安全，可以使用绝对路径
console.log(path.join(__dirname,'public'))

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

let user = require('./user/user');
let car = require('./car/car')

app.use('/user',user)
app.use('/car',car)

