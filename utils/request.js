// let url=''
import systemUrl from '@/system.config.js'
export const service = (url,method)=>{
   
    // new Promise (回调函数有两个参数  resolve -> 成功时执行, reject ->失败时执行) 内部过程是一个同步过程
    // promise 还有两个异步的方法分别对应上边这两个回调参数
    //异步方法可以拿到对应回调参数所取到的数据
    // 这两个方法分别是 .then() .catch()  -> 通过链式调用的方式
    // 问 promise 是同步的还是异步的?
    // promise本身是同步的,但他有两个异步的方法.


    // console.log('ok')
    return new Promise((resolve,reject)=>{
        console.log('请求url :'+systemUrl.developUrl+url)
        //uni.request 没有返回值
        uni.request({
            url:systemUrl.developUrl+url,
            methods:method,//请求方式
            header:{
                'Access-Control-Allow-Origin':systemUrl.developUrl
            },
            success:function(res){
                resolve(res.data)
            },
            fail:function(){

            }
        })
    })
}


