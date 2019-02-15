let express = require('express') 
//引入express express是个函数
let app = express()
 //express执行固定叫做app(也可以叫别的，不建议这么做)
 //app.listen(8080) 
 //express把各个请求方法进行封装 参数就是路径 callback 
 //路径是不带任何参数的绝对路径
 //代码执行顺序是从上到下依次执行，如果匹配到路径了就不再往下走


app.use(function(req,res,next){
    res.setHeader('content-type','text/plain;charset=utf8');
    next()
})
//放在需要处理的路径前面处理通用逻辑 可以用来进行权限校验等，必须写next  才会继续往下走
//  req，res   不带路径的话表示匹配所有，       带路径的话表示匹配这个路径上的进行处理
//中间件的作用  访问路径之前可以提前做一些逻辑处理   但是中间件必须放在你要处理的路径之前
                                                                             
app.use('/sign',function(req,res,next){
    console.log("葛伟荣很帅")
    next()
})
 app.get('/sign',function(req,res){
    //  res.setHeader('content-type','text/plain;charset=utf8')
    console.log(req.headers,'header')    //请求头
     res.send('get登录')//用send不用end  不用配置setHeader
 })
 app.post('/sign',function(req,res){
     res.send('post登录')
 })
 app.get('/app',function(req,res){
     res.send('not found')
     res.status(404)//设置状态码，要配合send
 })
//:id路径参数 必须有  但是不固定
app.get('/list/:id/:name',function(req,res){
    console.log(req.params);
    res.send('请求一个')
})
app.get('/list',function(req,res){
    res.send('请求多个')
}) 
app.listen(8080,function(){
    console.log('成功')
})