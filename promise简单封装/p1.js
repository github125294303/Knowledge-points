/**
 *  @param  {function} excutor  
 *  @param  {function} resolve 成功的函数
 *  @param  {function} reject  失败的函数
 *  @param  {string} status  promise的状态  pending 等待 resloved 成功 rejected 失败
 *  @param  {string} value成功的原因
 *  @param  {string}  reason失败的原因
 *  @param  {function}  then 原型上的方法
*/
// 有异步的情况下 因为excutor 是立即执行的 所以status 始终是pengding状态  
class Promise {
   constructor(excutor){
     this.status = 'pending';
     this.value  = undefined;
     this.reason = undefined;
     this.onFuflilledCallback = [] // 专门存放成功的回调  
     this.OnRejectedCallback= [] // 专门存放失败的回调
     //promise的特点 只有等待状态才能够变成成功或者失败  
      let  resolve= (value) =>{
       if(this.status==='pending'){
         this.status ='resolved';
         this.value= value;
         this.onFuflilledCallback.forEach(fn=>fn())
        }
     }
      let reject=(reason)=>{
        if(this.status==='pending'){
            this.status='rejected';
            this.reason = reason;
            this.OnRejectedCallback.forEach(fn=>fn())
        }
     }
     excutor(resolve,reject)
   }
    // onFuflilled 成功的回调 OnRejected 失败的回调  可选参数 
   then(onFuflilled,OnRejected){
     if(this.status==='resolved'){
        onFuflilled(this.value)
     }
     if(this.status==='rejected'){
        OnRejected(this.reason)
     }
     if(this.status==='pending'){
        //成功存放成功的回调
        this.onFuflilledCallback.push(()=>{
          onFuflilled(this.value)
        })
      // 失败存放失败的回调
      this.OnRejectedCallback.push(()=>{
         OnRejected(this.reason)
      })
     }
   }
}
 
module.exports =  Promise;
