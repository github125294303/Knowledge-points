## Promise 书写流程 
>注意this的指向问题 
1. 创建一个类/构造函数   名字 Promise 参数excutor   excutor 是一个立即执行的构造器 参数 resolve reject  是函数  
```
function Promise(excutor){
  excutor(resolve,reject )
}
```
2. 定义状态 定义成功失败的值   
``` 
  this.status = 'pending'  #状态默认为pending 等待态 
  this.value = undefined  成功的值
  this.reason = undefined 失败的值 
  
```
3.定义resolve和reject 函数 
```
   function resolve (value){
       代码逻辑...
   }
   function reject (reason){
       代码逻辑...
   }
```
4.定义then方法 then是原型上的方法  参数是onFufilled 和 onRejected  then里面必须返回一个promise  
```
  Promise.prototype.then=function(onFufilled,onRejected){
      let self= this;
      let  promise2;
      promise2 = new Promise(resolve,reject){
         if(self.status==='resolved'){
             onFufilled(self.value)
         }
         if(self.status==='rejected'){
             onRejected(self.reason)
         }
      }
      return promise2 
  }
```
5. 解决异步的问题异步的时候status是pending状态 直到 resolve或者reject调用 状态才会改变到相应的值 
在构造函数定义2个数组 一个放成功的回调 一个放失败的回调  调用resolve/reject的时候让数据的函数依次执行 
```
this.resolveCb = []
this.rejectCb  = []
```
在then 函数的pending状态存放成功/失败的回调
```
  if(self.status==='pending'){
      this.resolveCb.push(function(){
          onFufilled(self.value)
      })
      this.rejectCb.push(function(){
          onRejected(self.reason)
      })
  }
```
在resolve/reject调用的时候 依次执行成功/失败函数存放的数组
```
  function resolve(value){
    this.resolveCb.foreach(function(fn){
       fn()
    })
  }
```
6、根据规范，需要用一个x的值来接受then里面成功（onFufilled）或 失败（onRejected）的回调参数，并且 onFufilled 和 onRejected 只能异步调用，因为try catch 无法捕获异步的异常，所以 try catch 要写在异步里面，因为 then 必须是异步的，并且需要一个函数来解析x的值，解析函数的名字 resolvPromise
    ```
    setTimeout(function(){
        try{
            let x = onFuflilled(self.value)
            resolvePromise(promise2,x,resolve,reject)
        }catch(e){
            reject(e)
        }
    },0)
    ```
    

7.书写解析promise的函数  resolvePromise(promise2,x,resolve,reject)
7.1  判断x和promise2是否相等(===)  相等的话是抛出循环引用  TypeError
7.2  判断x是否是对象或者函数  要排除null的情况，如果不是 直接成功，如果是对象或者函数，让then = x.then ，可能会报错
    if(((typeof x ==='function')||(typeof x ==='object'))&&x!=null){
        try{
            let then = x.then
        }catch(e){
            reject(e)
        }
    }else{
        resolve(x)
    }
7.3  判断then是不是函数，如果是函数，表示是一个promise，如果不是函数，表示是一个普通对象直接成功
    if(typeof then ==='function'){

    }else{
        resolve(x)//表示是一个普通对象
    }
7.4  执行then x作为(call)this  成功的回调参数y和失败的回调参数r/err/reason，y可能是promise，所以递归解析
    then.call(x,y=>{
        resolvePromise(y)
    },r=>{
        reject(r)
    })

7.5 为了防止多次调用，定义一个called的状态
    let called;      ......
    
    if(called) return
    called = true

8.  处理穿透问题 onFufilled  onRejected不传值的问题
    onFufilled = typeof onFufilled==='function'?onFufilled:val=val
    onRejected = typeof onRejected==='function'?onRejected:err=>{throw err}