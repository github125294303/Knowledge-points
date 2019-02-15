// 回调函数 （预置参数） 
// 例子 有个西瓜 每次调用eat就吃一口 吃2口就吃完了 
// 每吃一口 num 减一  吃完2口 num = 0
function after(num,cb){
   return function(){
     if(--num===0){
       cb()
     }
   } 
}
// 因为eat是个函数 表示after 执行之后返回的是个函数   eat = after() 
//  eat  = function(){
//     if(--num===0){
//        cb()
//     }
//  } 
eat = after(2,function(){
    console.log('西瓜吃完了')
})
eat()
