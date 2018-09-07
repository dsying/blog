## 解构赋值

```javascript
//ES5两个变量交换  如 a = 5  b = 6
var temp = a;
a = b;
b = temp;

//ES6解构
[a,b] = [b,a]
```

## Promise

### 含义
Promise 是异步编程的一种解决方案，所谓Promise,可简单理解为一个容器，这个容器里存放着一个异步操作

Promise有一下两个特点
1）Promise实例对象的状态只能是下面两种变化之一
    1.1）pending=>resolved
    1.2) pending=>rejected
   promise承诺，状态只受异步操作的结果决定，其他手段无法改变

2）一旦状态改变，就不会再变

### 基本用法
```javascript
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```
Promise构造函数接收一个函数作为参数，该函数的两个参数resolve和reject由javascript引擎提供
```javascript
function (resolve,reject){
    if(/*异步成功*/){
        resolve(value)
    }else{
        reject(error);)
    }
```

* resolve函数：异步成功 执行resolve(value) promise状态由pending=>resolved
                并把value传递给then的doneCallback   
* reject函数： 异步失败 执行reject(error)  promise状态由pending=>rejected
                并把error传递给then的errorCallback

#### Promise.prototype.then(doneCallback,errorCallback)
Promise实例具有then()方法，说明then定义在原型对象Priomise.prototype上
作用是 监听Promise实例的状态变更
* pending->resolved 时 then()的doneCallback 被调用
* pending->rejected 时 then()的errorCallback 被调用


#### Promise.prototype.catch()
Promise.prototype.catch 方法是 .then(null,rejection)的别名，用于指定发生错误是的回调函数


