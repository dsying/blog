window.jQuery = function () {
}

window.jQuery.ajax = function (method,url,async,body,success,fail) {
    let xhr = new XMLHttpRequest()
    xhr.open(method,url,async)
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
    $.ajax('POST','http://localhost:8002/ajax',true,'a=1&b=2',success,fail)
})