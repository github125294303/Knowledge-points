// 1函数返回函数 柯里化  偏函数... 

//判断内容类型 
// Object.protype.toString.call('aa')  => '[object String]'
function istype(content,type){
    //   let str  = Object.prototype.toString.call(content).replace(/\[object\s|\]/g,'')
    let str = Object.prototype.toString.call(content).slice(8,-1)
      return type === str
}
let res = istype('hello','String')
console.log(res)