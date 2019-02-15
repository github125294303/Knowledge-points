let fs = require('fs')
// fs.readfile是异步 
let arr = [] 
function after(num,cb){
     let arr =[];
     return function(data){
         arr.push(data)
         if(--num===0){
            console.log(arr)
            cb(arr)
         }
    }
}
// 读完2个文件之后拿到所有的数据
let result  = after(2,function(data){
  console.log(data)
})
fs.readFile('./1.txt','utf8',function(err,data){
    console.log(data)
    result(data) 
})
fs.readFile('2.txt','utf8',function(err,data){
  console.log(data)
  result(data) 
})
