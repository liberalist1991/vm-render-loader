## desc

  需求：webpack生成的html中若含有velociy语法，无法本地渲染。而devMiddleware不便于修改。

  解决：利用loader给定json格式直出数据，输出渲染后的html


## usage

```
    {
        test: /\.html$/,
        loader: 'vtl-loader!vm-render-loader?url=http://test.json'

    }
```

## demo

input: index.html
```
<html>
<body>
    <p>$!{test}</p>
</body>
</html>
```

options: url=http://test.json
```
{
    test: "hello world!"
}
```
output
```
<html>
<body>
    <p>hello world!</p>
</body>
</html>
```
