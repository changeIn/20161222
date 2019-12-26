

// function isType(content,type){
//     return  Object.prototype.toString.call(content) === `[object ${type}]`
// }



function isType(type){
    return function(content){
      return Object.prototype.toString.call(content) === `[object ${type}]` 
    }  
}

let util = {};
["String","Boolean","Symble"].forEach((type)=>{
   util["is"+type] = isType(type)
 })


//柯里化
// let isString = isType('String')
// let isBoolean = isType('Boolean')
console.log(util.isString('hello world'))
console.log(util.isBoolean(false))

