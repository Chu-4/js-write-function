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
