window.jQuery = function () {
}

//window.jQuery.ajax = function (options) {
    // let method = options.method || 'GET';
    // let url = options.url;
    // let async = options.async;
    // let body = options.body;
    // let success = options.success;
    // let fail = options.fail;
    // let headers = options.headers;

//ES6 怎么优化上面7行代码  ==> 解构赋值
    //let {method,url,async,headers,body,success,fail} = options

// 直接在 参数处 解构

window.jQuery.ajax = function ({method,url,async,headers,body,success,fail}) {
    let xhr = new XMLHttpRequest()
    xhr.open(method,url,async)
    for(let header in headers){
        xhr.setRequestHeader(header, headers[header])
    }
    xhr.send(body)
    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status >= 200 && xhr.status <= 300){
                success.call(undefined,xhr.responseText)
            }else{
                fail.call(undefined,xhr)
            }
        }
    }
}

window.$ = window.jQuery



function success (param) {
    alert('success: ' + param)
}
function fail (param) {
    alert('fail: ' + param)
}

btn.addEventListener('click',(ev) => {
    $.ajax({
        method: 'POST',
        url: 'http://localhost:8002/ajax',
        async: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'frank': '18'
        },
        body : 'a=1&b=2',
        success: success,
        fail: fail
    })
})