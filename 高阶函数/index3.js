let fs = require('fs')
function after(times,cb){
    let arr = [];
   return function(data){
       arr.push(data)
       if(--times===0){
           cb(arr)
       }
    } 
}
let result = after(2,function(data){
   console.log(data)
})
fs.readFile('./1.txt','utf8',function(err,data){
    result(data)
})
fs.readFile('./2.txt','utf8',function(err,data){
    result(data)
})
