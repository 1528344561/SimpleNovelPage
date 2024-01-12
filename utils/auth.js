export function setDataInfo(key,data){
    if(typeof data!=='object' && typeof data!== undefined){
        uni.setStorageSync(key,data)
    }else{
        let source = JSON.stringify(data)
        if(data==undefined)
            source = '{}'
        uni.setStorageSync(key,source)
    }
}

export function getDataInfo(key){
    var value = uni.getStorageSync(key)
    if(!value){
        // value = '{}'
        return null
    }
    return JSON.parse(value)
}

// 精简写法
// 箭头函数只有在只有一个参数的时候可以简化掉参数的括号,只有一行的函数可以省略花括号
export const getDataInfos=key=>JSON.parse(uni.getStorageSync(key))