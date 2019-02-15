// 操作数据库的逻辑 
let mongoose = require('mongoose')
// 默认端口27017
let {db_url} = require('../config')
mongoose.connect(db_url,{useNewUrlParser:true});
// 创建一个骨价 schema 
let UserSchema = new mongoose.Schema({
    username:String,
    password:String
})

module.exports=mongoose.model('User',UserSchema)


