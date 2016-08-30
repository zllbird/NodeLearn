# [Node] 异步 async
应该是node上最流行的异步库，API非常的人性化，大量的操作符可以将事件分发和处理，看起来也非常好看，棒棒哒💯！
个人感觉风格很像Rx，看起来非常舒服。很喜欢。
先放官方网址，[使用](http://caolan.github.io/async/)

### 快速上手
```
async.map(['file1','file2','file3'], fs.stat, function(err, results){
    // results is now an array of stats for each file
});

async.filter(['file1','file2','file3'], function(filePath, callback) {
  fs.access(filePath, function(err) {
    callback(null, !err)
  });
}, function(err, results){
    // results now equals an array of the existing files
});

async.parallel([
    function(callback){ ... },
    function(callback){ ... }
], function(err, results) {
    // optional callback
};

async.series([
    function(callback){ ... },
    function(callback){ ... }
]);
```

`async` 包含大量的API。有近70个，操作符或者API如此之多，其实根本用不过来。所以挑一些常用，和通用的，来解释和使用。

主要分成三类：
* `collections` 结果过滤收集等
* `control flow` 流控制，对操作流的控制
* `utils` 相关工具类

### collections
* `concat` 添加，补
* `each` 每一个都执行，有错误就返回，没错误就无所谓啦。有错误打断
* `every` 每个都执行后，返回bool，如果返回正确，大家都开心，如果返回错误，立马执行回调
* `map` 转化，执行函数后，转化结果返回。
* `filter` 过滤，方法返回正确，然后出现在回调中

### control flow
* `series` 串行处理
* `parallel` 并行处理
* `waterfall` 按顺序依次执行一组函数。每个函数产生的值，都将传给下一个。
* `apply` 可以让我们给一个函数预绑定多个参数并生成一个可直接调用的新函数，简化代码。
