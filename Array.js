//1.set方法
function setArr(arr){
  return Array.from(new Set(arr))
}

//2.循环去重
function setArr(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        j-- //回退到splice删除的位置
      }
    }
  }
  return arr
}

//3.indexOf
function setArr(arr){
  let res = []
  for(let i=0;i<arr.length;i++){
    if (res.indexOf(arr[i])===-1){
      res.push(arr[i])
    }
  }
  return res
}


setArr([1,3,5,3,3,6,8,8,7,9,2,1,1,2,3,4]) //[1, 3, 5, 6, 8, 7, 9, 2, 4]


