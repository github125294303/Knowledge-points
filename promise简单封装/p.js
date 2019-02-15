/** 
*   @param {function} excutor 
*   @param {function} resolve
*   @param {function} reject
*   @param {string} status promise的状态 pending 等待 resolved成功 rejected失败
*   @param {string} value 成功的原因
*   @param {string} reason 失败的原因
*   @param {function} then 原型上的方法
*/
//只有等待状态才能变成成功或者失败
class Promise {
    constructor(excutor) {//promise有个立即执行器
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onFuflilledCallback = []//专门存放成功的回调
        this.onRejectedCallback = []//专门存放失败的回调
        let resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'resolved'
                this.value = value;
                this.onFuflilledCallback.forEach(fn => fn())
            }
        }
    }
        let reject = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected'
                this.reason = reason;
                this.OnRejectedCallback.forEach(fn => fn())
            }
        }
    }
excutor(resolve, reject)//excutor 立即执行
    }
//onFuflilled  成功的回调  onRejected  失败的回调   这俩都是可选参数
then(onFuflilled, onRejected){
    if (this.status === 'resolved') {
        onFuflilled(this.value)
    }
    if (this.status === 'rejected') {
        onRejected(this.reason)
    }
    if (this.status === 'pending') {
        //成功时存放成功的回调
        this.onFuflilledCallback.push(() => {
            onFuflilled(this.value)
        })
        //失败时存放失败的回调
        this.onRejectedCallback.push(() => {
            onFuflilled(this.reason)
        })
    }
}
}
//
module.exports = Promise;