let _toString = Object.prototype.toString
function isType(content,type){
  let str  = _toString.call(content).slice(8,-1) 
//   let str = _toString.call(content).replace(/\[object\s|\]/g,'')
  console.log(str)
  return str ===type
}
let result = isType('hello','String')
 //true  
console.log(result)