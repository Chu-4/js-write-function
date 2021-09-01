// 函数变量定义时只能用var不能用let，因为是自执行函数，且let没有变量提升，自动执行时caches还没有初始化会报错：Uncaught ReferenceError: Cannot access 'caches' before initialization
var caches = (function () { 
  let a = Date.now()
  caches = function () {
    return a
  }
  return caches
})()

caches() // 1630456365873
caches() // 1630456365873
caches() // 1630456365873
