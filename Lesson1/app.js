/**
 * Created by zhulonglong on 16/8/29.
 */

var express = require('express');
var superaget = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.listen(3000);

app.get('/lesson1',function (req, res, next) {
    superaget.agent
        .get('http://www.lesdo.cn')
        .send({name:'name'}) // 添加参数
        // .set({'content-type':'text/json'}) // 添加请求头
        .end(function (err, ageres) { // 请求结果
            if (err || !res.ok){
                // 请求异常
            }else{
                // var data = JSON.stringify(res.body); //正常返回json数据
                console.log(ageres.text);
                // ageres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
                // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
                // 剩下就都是 jquery 的内容了
                var $ = cheerio.load(ageres.text);
                var items = [];
                $('img').each(function (idx, element) {
                    var $element = $(element);
                    items.push({
                        url:$element.attr('url')
                    });
                });

                // 读取完首页所有img后
                console.log(items);
                res.send(items);
            }
        })
});