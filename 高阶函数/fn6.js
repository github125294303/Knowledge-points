//发布（依次执行）  订阅（预先规划好）
//定义发布、订阅的事件
//emit 英文词义为发射的意思
//on是订阅事件
//emit是发布事件
//cbs 用来放on的事件回调
//emit之后 让on 里面的回调执行，回调执行把参数(也就是emit发送过来的数据) 传进去
let fs = require('fs')
let event ={
    cbs:[],
    res:[],//res  用来存放每一次emit发送过来的数据
    on(fn){
        this.cbs.push(fn)//把事件全都订阅后放在一个数组里
    },
    emit(data){
        this.res.push(data)
        this.cbs.forEach(fn=>fn(this.res))
    }
}
event.on(function(data){
    if(data.length===2){
        console.log(data)
        console.log('可以吃了')
    }
})
event.on(function(data){
    console.log('怎么还给我掺素包子？')
})
//发布买馄饨和小笼包的事件
fs.readFile('./1.txt','utf8',function(err,data){
    event.emit(data)
})
fs.readFile('./2.txt','utf8',function(err,data){
    event.emit(data)
})