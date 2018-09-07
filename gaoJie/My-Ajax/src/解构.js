/*
  1 解构数组
 */
//ES6 解构
var c = 'c';
var d = 'd';
[c, d] = [d, c]
console.log('c: ' + c)
console.log('d: ' + d)

var foo = ['one','teo','three']
var [one,two,three] = foo
console.log(one)
console.log(two)
console.log(three)


//...
//将剩余数组 赋值给一个变量
var g,h,i;
[g,h,...i] = [1,2,3,4,5]
console.log(i) //[3,4,5]


/*
  2 解构对象
 */
var p,q;
({p,q} = {p: 42, q: true})
console.log(p)
console.log(q)

//给新的变量名赋值
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;
console.log(foo)
console.log(bar)


/**
 * 总结：
 *  1） 数组解构 按照 顺序 一一对应
 *  2） 对象解构 按照 key 一一对应
 */