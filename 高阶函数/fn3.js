//偏函数 
let _toString = Object.prototype.toString
function isType(type){
    return function(content){
        let str  = _toString.call(content).slice(8,-1) 
        return str ===type 
    }
}
// 定义需要判断的数据类型
let type = ['Object','Array','String','Function','Null','Undefinded','Number','Boolean']
// 定义一个工具类叫做util 
let util ={};
// 把istype 函数挂载到util 相对应的函数上面  
type.forEach(item=>util[`is${item}`]=isType(item))
console.log(util.isString('hello'))
console.log(util)
    
