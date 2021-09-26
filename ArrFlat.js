// 方法一：
arr.flat(Infinity) // infinity表示层数无限

// 方法二：reduce+concat
function arrFlat(arr){
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? arrFlat(cur) : cur)
  }, []) // []为初始值
}

// 方法三：拓展运算符
function arrFlat(arr){
  while(arr.some(i => Array.isArray(i))) {
    arr = [].concat(...arr)
  }
  return arr
}
