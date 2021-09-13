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


//插入   假设当前数字前的为以排序内容，分别和前方对比，如果大与当前数就把大的值往后移动一位，将当前temp插入到移动后空出的位置，如果小则不变，从后开始对比
function insertSort(arr){
    //假设第一位已排好序
    for (let i=1; i<arr.length; i++) {
        //缓存当前元素值
        let temp = arr[i],
        j = i-1
        while(j >= 0 && arr[j] > temp) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = temp // 跳出while循环时已经j--，所以要填补的位置是j+1
    }
    return arr
}
