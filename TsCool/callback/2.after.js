
    let after = function (count, callback) {
        return function () {
            if (--count === 0) {
                callback()
            }
        }
    }

    let newFn = after(3, function () {
        console.log("函数执行之后")
    })

    newFn()
    newFn()
    newFn()