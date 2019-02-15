let express = require('express')
let bodyParse = require('body-parser')
let jwt = require('jwt-simple')
let app = express()

app.use(bodyParse.json())
let auth =function(req,res,next){
   let authorization =req.headers['authorization'];
     if(authorization){
       let token = authorization.split(' ')[1];
       console.log(token)
       try{
           let user = jwt.decode(token,'1234')   //解码表示token没有篡改过
           req.user =user;
           next()
       }catch(e){
        res.status(401).send('not allowed')
       }
   }else{
     res.status(401).send('not allowed')
   }
}
// 注册 
let User = require('./model/user')
app.post('/reg', async function(req,res){
    let user = req.body;
    try{
    await User.create(user)
    res.json({
        code:0,
        data:{
            user:{id:user._id,username:user.username}
        }
    })
   }catch(e){
      res.json({
          code:1,
          data:"注册失败"
      })
   }
})
// 登录 
app.post('/login',async function(req,res){
   let user = req.body;
   user = await User.findOne(user)
   if(user){
      let token =  jwt.encode({
           id:user._id,
           username:user.username
       },'1234')
       res.json({
           code:0,
           data:{
               token
           }
       })
   }
})
// 订单 请求头 authorization 
app.get('/order',auth,function(req,res){
   res.json({
       code:0,
       data:{
           user:req.user
       }
   })
})
app.listen(3000)

