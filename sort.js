//快排
function quickSort (arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let midNum = arr.splice(mid, 1)[0]
    let left = []
    let right = []
    for (i = 0;i<arr.length;i++) {
        if (arr[i]<midNum) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }   
    }
    return quickSort(left).concat(midNum, quickSort(right))
}


//冒泡
function bubbleSort (arr) {
    if (arr.length < 2) {
        return arr
    }
    //最后一位已被排好序不需要再循环一遍所以为arr.length-1
    for (let i=0;i<arr.length-1;i++){
        for (let j=i;j<arr.length;j++){
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}


//选择 冒泡改进 每次都找出最小的数放在前面
function selectSort (arr){
    let min
    for (let i = 0;i<arr.length-1;i++){
        min = i
        for (let j = i;j<arr.length;j++) {
            if (arr[j]<arr[min]) {
                min = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}
