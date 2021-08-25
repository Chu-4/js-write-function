// 核心思想：闭包+递归。
// 保存参数，return函数，将保存的参数传入

// 方法一：
function currying(){
    let res = [...arguments].reduce((a, b) => a+b)
    function temp() {
        if (arguments.length) {
            res+=[...arguments].reduce((a, b) => a+b)
            return temp
        } else {
            return res  // console.log(currying(1)(3)())或currying(1)(3) -> 4
        }
    }

    temp.toString = function() { // 重写toSting() 方法, 为了console.log(currying(1)(3)) -> 4
        console.log(res); 
    }  
    return temp
}

console.log(currying(1)(3)) // fn 4
console.log(currying(1,3)) // fn 4
currying(1)(3)() // 4
currying(1,3)() // 4

// 输出全部参数
function currying(){
    let res = [...arguments]
    function temp() {
        if (arguments.length) {
            let aa = [...arguments]
            res = res.concat(aa)
            return temp
        } else {
            return res.map(i => console.log(i))  // console.log(currying(1)(3)())或currying(1)(3) -> 4
        }
    }

    temp.toString = function() { // 重写toSting() 方法, 为了console.log(currying(1)(3)) -> 4
        res.map(i => console.log(i))
    }  
    return temp
}

console.log(currying(1)(3)) // 1 3
console.log(currying(1,3)) // 1 3
currying(1)(3)() // 1 3
currying(1,3)() // 1 3




// 方法二：
function currying() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments); // 将arguments对象转化为数组

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            console.log(a + b)
        });
    }
    return _adder;
}

console.log(add(1)(2)(3)())                //fn 6
console.log(add(1, 2, 3)(4)())             //fn 10
