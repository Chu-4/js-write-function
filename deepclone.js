function deepClone(obj){
    let cloneObj;
    // 判断当输入的数据是简单数据类型时，直接复制
    if(obj && typeof obj !== 'object'){
        cloneObj = obj;
    }
    // 当输入的数据是对象或者数组时
    else if(obj && typeof obj === 'object'){
        // 检测输入的数据是数组还是对象
        cloneObj = Array.isArray(obj) ? [] : {};

        // 变量数据对象
        for(let key in obj){
            // 判断对象是否存在key属性
            if(obj.hasOwnProperty(key)){
                if(obj[key] && typeof obj[key] === 'object'){
                    // 若当前元素类型为对象时，递归调用
                    cloneObj[key] = deepClone(obj[key]);
                }
                // 若当前元素类型为基本数据类型
                else{
                    cloneObj[key] = obj[key];
                }
            }
        }
    }
    return cloneObj;
}
