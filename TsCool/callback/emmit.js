
let fs = require('fs')

function Emmiter(){
    this._arr = []
}


//订阅
Emmiter.prototype.on = function(callback){
    this._arr.push(callback)
}
//发布
Emmiter.prototype.emit = function(){
    this._arr.forEach(fn => {
        fn.apply(this,arguments)
    });
}

let e = new Emmiter();
let school = {}

e.on(function(){
    console.log("一个参数执行成功")
})
e.on(function(value,key){
    school[key] = value
    if(Object.keys(school).length === 2){
        console.log(school)
    }
})

fs.readFile('./name.txt','utf-8',function(err,data){
    if (err) return console.log(err)
    e.emit(data,"name")
})

fs.readFile('./age.txt','utf-8',function(err,data){
    if (err) return console.log(err)
    e.emit(data,"age")
})