function app(){}
//中间件的原理 就是把函数存在一个数组里面，每执行一次next()  就从数组里面取出来一项执行 
app.middle  = [];
app.use = function(fn){
    //每调用一次use 就把函数存在数组里 
    app.middle.push(fn)
    console.log(app.middle)
}
app.use(function(req,res,next){
   console.log(1)
   next()
})
app.use(function(){
    console.log(2)
    next()
})
app.use(function(){
    console.log(3)
   
})
let index = 0; //开始的索引是0 
function next(){
    //第一次调用执行第一个函数，索引是0 
    //第二次调用执行第二个函数，索引是1 
    app.middle[index++](null,null,next) 
  
    // null 表示占位，next必须传  
}
next()