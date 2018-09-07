btn.addEventListener('click',(e)=>{

    let xhr = new XMLHttpRequest();

    xhr.open('POST','http://localhost:8002/ajax');// 1 设置 method url async

    xhr.setRequestHeader('frank', '18') //2 setRequestHeader() 设置key:value
    xhr.setRequestHeader('Content-Type','x-www-form-urlencoded')

    xhr.send('我偏要设置request的第四部分');//4 send() 设置第四部分 请求参数

    xhr.onreadystatechange = function(){
         if(xhr.readyState === 4){

             console.log('请求响应都完毕了')
              console.log(xhr.status)
              if(xhr.status >= 200 && xhr.status < 300){
                console.log('说明请求成功')
                console.log(typeof xhr.responseText) //string
                console.log(xhr.responseText)

                console.log(xhr.getAllResponseHeaders())
                console.log(xhr.getResponseHeader('Content-Type'))

                let string = xhr.responseText
                // 把符合 JSON 语法的字符串
                // 转换成 JS 对应的值
                let object = window.JSON.parse(string)
                // JSON.parse 是浏览器提供的
                console.log(typeof object) //object
                console.log(object)
                console.log('object.note')
                console.log(object.note)

                //把js对象 转为 json字符串
                let str1 = JSON.stringify(object)
                console.log(str1)

              }else if(xhr.status >= 400){
                console.log('说明请求失败')
              }

        }
    }


})