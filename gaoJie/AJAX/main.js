btn.addEventListener('click',(e)=>{

    let xhr = new XMLHttpRequest();

    xhr.open('GET','http://dsying:8001/ajax');
    xhr.send();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 2){
            var p2 = document.createElement('p')
            p2.innerHTML = 'readyState:2 状态:HEADERS_RECEIVED 描述：send() 方法已经被调用，并且头部和状态已经可获得。'
            show.appendChild(p2)
        }else if(xhr.readyState === 3){
            var p3 = document.createElement('p')
            p3.innerHTML = 'readyState:3 状态:LOADING 描述：下载中； responseText 属性已经包含部分数据'
            show.appendChild(p3)
        }else if(xhr.readyState === 4){
            var p4 = document.createElement('p')
            p4.innerHTML = 'readyState:4 状态:DONE 描述：下载操作已完成'
            show.appendChild(p4)


             console.log('请求响应都完毕了')
              console.log(xhr.status)
              if(xhr.status >= 200 && xhr.status < 300){
                console.log('说明请求成功')
                console.log(typeof xhr.responseText) //string
                console.log(xhr.responseText)
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