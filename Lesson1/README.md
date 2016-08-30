## Superagent 的使用  superagent 是node上的http封装库,它的链式调用很让我喜欢,由于在java和android端最近也正在学习和使用rx系列,所以对链式调用较为青睐。

superagent的主要用法，官网给出了非常详细的说明和调用。请移步：
[superagent使用](http://visionmedia.github.io/superagent/)

总结一下使用：get和post
### Get请求
```
superagent.get('/user') // url 或者 uri 绝对和相对路径都支持
		.query('') //GET 请求一般使用query添加参数，也是比较形象反映这是get请求
		.query('{name:"haha"}') // 参数可以是json 或者说 可以使对象参数
		.query('search=Manny&range=1..5') // 也可以是字符串
		.query('{search:Manny}')  // 也可以拆开
		.query('{range:1.5}')
		// 总之方式很多，可以各种拆和组，保证你在使用的时候，可以任意配置共有和私有这种概念，很不错
		.set({'Content-type','applation/json'}) // heads 头信息中的一些信息
		.end(function(err,res){
		})
```
### POST 请求
```
superagent.post('/') // 和GET一样，地址可以是绝对也可以是相对
		.send({'name':'long'}) // 参数一般用send添加，毕竟是post嘛，组合方式也很多中，这里不再重复了
		.set({'Content-type','applation/json'})
		// 额外补一点
//		.set('content-type':'application/x-www-form-urlencoded') 等价于 .type('form') 这是一个封装
		.query('dsafas') // 当然在post中一样可以添加url参数，用来补充参数用的，这个用法心里有数就行。
		.end(function(err,res){
		})
```

### Response
`res`除了正常的`status`状态码， `heads` 头信息等。说一下superagent对其的自动处理和封装。

* `res.text` 响应内容，这是没封装的，是啥就是啥。
* `res.body` 解析分装后的响应内容。一次解析后的。
* `res.type`  和 发送时候的type一样，都是对于内容类型的缩写
* `res.ok` 等吧，对于状态吗的解析还有error，server.error

基础用法基本就这些，以后再讨论更高级和深入的用法。