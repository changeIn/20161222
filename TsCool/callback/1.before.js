
    Function.prototype.before = function (callback) {
        let that = this;

        // 只有一个参数的情况
        /**
        return function (val1) {
            callback(),
                that(val1)
        }
        **/


        // 多个参数的情况
        return (...args)=> {
            callback();
            this(...args)
        }
    }

    function fn(val1, val2) {
        console.log("执行函数" + val1 + val2)
    }

    let newFn = fn.before(function () {
        console.log("函数执行之前")
    })

    newFn("参数一", "参数二")



//AOP切片

//当调用数组的push方法的时候 先打印调用了push方法

let arr= [1,2,3];
let oldPush = Array.prototype.push;
function push(arr,...args){
    console.log('调用了push方法');
    oldPush.call(arr,...args);
}
push(arr,4,5,7,9);
console.log(arr)

