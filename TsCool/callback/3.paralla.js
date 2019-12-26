
let fs = require('fs')

let after = function(times,callback){
    let result = {}
    return function(key,data){
        result[key] = data
        if(--times === 0){ //如果调用次数达到
            callback(result) //将储存的结果传递出去
        }
    }
}

let out = after(2,function(result){
    console.log(result)
})

fs.readFile('./name.txt','utf-8',function(err,data){
    if (err) return console.log(err)
    out("name",data)
})

fs.readFile('./age.txt','utf-8',function(err,data){
    if (err) return console.log(err)
    out("age",data)
})