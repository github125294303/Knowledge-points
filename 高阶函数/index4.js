let fs = require('fs')
// 发布订阅
let event ={
    cbs:[],
    results:[],
    on(cb){//订阅的过程
        this.cbs.push(cb)
    },
    emit(data){//发布的过程
        this.results.push(data) 
        this.cbs.forEach(fn=>fn(this.results))
    }
}
event.on(function(data){
    if(data.length===2){
      console.log(data)
    }
})
event.on(function(data){
    if(data.length===2){
      console.log('全都拿到了')
    }
})
fs.readFile('./1.txt','utf8',function(err,data){
    event.emit(data)
})
fs.readFile('./2.txt','utf8',function(err,data){
    event.emit(data)
})