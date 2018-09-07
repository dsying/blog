/*

市面上 ajax 实现方式有很多
个人封装的ajax   jquery的ajax
就会出现一个问题，没有一个确定的标准  ajax的回调函数名 到底叫什么
成功： 我可以叫 success  我也可以叫 ‘成功’
失败： 我可以叫 fail     我也可以叫 error

花费精力去记住 同一事物的 不同叫法 是很愚蠢的行为

所以 后来就出现了 一种 规范 叫 Promise

Promise  本质上来说只是规定一种形式

*/

/*
   案例1
 */
function timeout (ms) {
    return new Promise((resolve,reject) => {
        setTimeout(resolve(2), ms)
    })
}
// timeout(1000)返回一个 promise实例  表示一段时间后才会发生的结果
// 过了1000ms后 函数resolve将 Promise实例的状态由 pending变为resolved, 并将异步结果作为参数传递给then
// 然后(then) 触发 doneCallbacks
timeout(1000).then((text)=>{console.log(text)})


/*
   案例2
   Promise 新建后就会立即执行
 */
let promise = new Promise((resolve,reject)=>{
    console.log('Promise')
    reject()
})

promise.then(()=>{
    console.log('resolved')
}).catch(()=>{
    console.log('reject')
})
console.log('同步 hi')




