## 所需工具

vs code 、chrome、基于 vue-cli 脚手架的前端项目

## 步骤

### 1、安装开发工具 vs code

下载地址：[链接](https://code.visualstudio.com/Download)

### 2、下载安装相关插件，

下载安装插件 Debugger for Chrome，如图所示：  
<img :src="$withBase('/img/debug1.png')">

### 3、修改 config/index.js 配置

找到属性：devtool 修改为

```js
devtool: 'source-map',
```

如果使用 vue-cli3 你需要设置 vue.config.js 内的 devtool 属性：

```js
module.exports = { configureWebpack: { devtool: "source-map" } };
```

### 4、配置 vs code

找到 vs code 顶部工具栏 打开 调试–打开配置，添加如下配置

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "vuejs: chrome",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}/src",
      "breakOnLoad": true,
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```
::: danger 注意
url 为项目启动的地址
:::

### 5、设置断点  
如图
<img :src="$withBase('/img/debug2.png')">


### 6、启动项目
在终端使用如下命令开启这个应用

```bash
npm run dev
```

### 7、打开调试
按快捷键 F5，即可启动
随着一个新的 Chrome 实例打开 http://localhost:8080，你的断点现在应该被命中了。
<img :src="$withBase('/img/debug3.png')">
