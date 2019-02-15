// 回调函数（不一定是异步的 预置参数）
// loadash after 
function after(times,cb){
  return function(){
     if(--times===0){
         cb()
     } 
  }
}
let eat = after(2,function(){
    console.log('吃完了')
})
eat()

