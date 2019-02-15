// 1函数返回函数
let _toString = Object.prototype.toString
function isType(type){
    return function(content){
      let str = _toString.call(content).slice(8,-1)
      return type === str
    }
}
let util={}
let type = ['String','Object','Null']
type.forEach(item=>util[`is${item}`]=isType(item))
console.log(util.isString('hello'))
console.log(util.isObject({}))
//let isString = isType('String')
//console.log(isString('hello'))