// 核心思想：闭包+递归。
// 保存参数，return函数，将保存的参数传入

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
