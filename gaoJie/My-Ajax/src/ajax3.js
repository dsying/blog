window.jQuery = function () {
}


window.jQuery.ajax = function ({method,url,async,headers,body}) {
    return new Promise(function (resolve,reject) {
        let xhr = new XMLHttpRequest()
        xhr.open(method,url,async)
        for(let header in headers){
            xhr.setRequestHeader(header, headers[header])
        }
        xhr.send(body)
        xhr.onreadystatechange = function () {
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status >= 200 && xhr.status <= 300){
                    console.dir(resolve)
                    resolve.call(undefined,xhr.responseText)

                }else{
                    console.log(reject)
                    reject.call(undefined,xhr)
                }
            }
        }
    })
}

window.$ = window.jQuery


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
    }).then(
        (text) => {console.log(text)},
        (request) => {console.log(request)} )
})