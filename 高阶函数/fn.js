// 判断数据类型 
//typeof  instanceof constroctor Object.prototype.toString
//typeof null  'object '
//null instanceof Object  false
let _toString = Object.prototype.toString
function isType(content,type){
  let str  = _toString.call(content) 
  console.log(str)
  return str === `[object ${type}]`
}
let result = isType('hello','String')  //true  
console.log(result)
