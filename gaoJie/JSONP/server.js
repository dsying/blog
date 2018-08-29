var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('方方说：含查询字符串的路径\n' + pathWithQuery)

  if(path === '/'){
    var string = fs.readFileSync('index.html','utf8');
    var amount = fs.readFileSync('db.txt','utf8');
    string = string.replace('&&&amount&&&',amount)
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(string)
    response.end()
  }else if(path === '/formPay' && method.toUpperCase() === 'POST'){
    var amount = fs.readFileSync('db.txt','utf8')
    var newAmount = amount - 1;
    fs.writeFileSync('db.txt',newAmount);
    response.write('success')
    response.end()

  }else if(path === '/formPaywithFrame' && method.toUpperCase() === 'POST'){
    var amount = fs.readFileSync('db.txt','utf8')
    var newAmount = amount - 1;
    fs.writeFileSync('db.txt',newAmount);
    response.write('success')
    response.end()

  }else if(path === '/imgPay'){
    var amount = fs.readFileSync('db.txt','utf8')
    response.setHeader('Content-Type','image/png')
    if(Math.random()>0.5){
      var newAmount = amount - 1;
      fs.writeFileSync('db.txt',newAmount);
      response.statusCode = '200'
      var img = fs.readFileSync('1.png')
      response.write(img)
    }else{
      response.statusCode = '404'
    }
      response.end()
  }
  else if(path === '/scriptPay'){
    var amount = fs.readFileSync('db.txt','utf8')
    response.setHeader('Content-Type','text/javascript')
    if(Math.random()>0.5){
      var newAmount = amount - 1;
      fs.writeFileSync('db.txt',newAmount);
      response.statusCode = '200'
      response.write(`
        alert("script请求返回的是 js代码 直接在前台执行")
        window.location.reload()

      `)
    }else{
      response.statusCode = '404'
    }
      response.end()
  }else if(path === '/scrossPay'){
    var amount = fs.readFileSync('db.txt','utf8')
    response.setHeader('Content-Type','text/javascript')

      var newAmount = amount - 1;
      fs.writeFileSync('db.txt',newAmount);
      response.statusCode = '200'
      response.write(`
        alert("script跨域请求 执行代码：（amount.innerHTML = amount.innerHTML - 1）")
        amount.innerHTML = amount.innerHTML - 1
        alert('说明 dsying.com 的后台程序员 要对 dingduouo.com的前台代码要充分了解 这样就过于耦合！！那要如何解耦了？请看下一个例子')
      `)

      response.end()
  }else if(path === '/jsonpPay'){
    var amount = fs.readFileSync('db.txt','utf8')
    response.setHeader('Content-Type','text/javascript')

      var newAmount = amount - 1;
      fs.writeFileSync('db.txt',newAmount);
      response.statusCode = '200'
      response.write(`
        ${query.callback}.call(undefined,'success 前台通过url传递一个name为callback的参数，告诉我要执行哪个function')
      `)

      response.end()
  }else{
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('呜呜呜')
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


