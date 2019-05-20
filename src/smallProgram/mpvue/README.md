

## 简介

　　mpvue框架对于从没有接触过小程序又要尝试小程序开发的人员来说， 无疑是目前最好的选择。 mpvue从底层支持 Vue.js 语法和构建工具体系， 同时再结合相关UI组件库， 便可以高效的实现小程序开发， 如果你不熟悉微信小程序与mpvue, 请移步至其官网[微信小程序开发](https://developers.weixin.qq.com/miniprogram/dev/api/)与[mpvue](http://mpvue.com/mpvue/)

## 前言

　　本文讲述如何搭建完整的小程序项目框架， 因为是第一次使用， 有不完善的地方请大佬指正。 

　　搭建内容包括： 

* 使用scss语法： 依赖插件sass-loader 、 node-sass

* 像vue一样使用路由： 依赖插件 mpvue-entry 和 mpvue-router-patch

* 使用ZanUI:有赞团队的小程序版UI组件库（GitHub)

* 使用vuex进行状态管理

* 使用flyio进行数据交互： GitHub地址

## 快速开始

### 一、 初始化一个mpvue项目

```bash
# 1. 先检查下 Node.js 是否安装成功
$ node -v
v8.9.0

$ npm -v
5.6.0

# 2. 由于众所周知的原因，可以考虑切换源为 taobao 源
$ npm set registry https://registry.npm.taobao.org/

# 3. 全局安装 vue-cli
# 一般是要 sudo 权限的
$ npm install --global vue-cli@2.9

# 4. 创建一个基于 mpvue-quickstart 模板的新项目
# 新手一路回车选择默认就可以了
$ vue init mpvue/mpvue-quickstart my-project

# 5. 安装依赖，走你
$ cd my-project
$ npm install
$ npm run dev
```

### 二、 使用scss语法

	

#### 1、 安装依赖

::: warning
　　因为一些不知名的原因导致node-sass经常安装失败， 所以采用cnpm方式安装最好
:::

```bash
　　cnpm install node-sass sass-loader --save-dev
```

#### 2、 在。vue文件中的style节点加上lang=”scss"  

  <br>
<img :src="$withBase('/remind-04.jpg')">

### 三、 像vue一样使用路由

　　在使用mpvue提供的命令 vue init mpvue/mpvue-quickstart my-project 创建项目后， 会发现每个页面都要配置main.js 文件， 不仅繁琐而且显得多余， 所以我们是否可以改造成像vue一样使用路由的方式呢， 答案是可以的， 需要用到mpvue-entry 和 mpvue-router-patch插件（集中式页面配置， 自动生成各页面的入口文件， 优化目录结构， 支持新增页面热更新）和

* mpvue-entry: 集中式页面配置， 自动生成各页面的入口文件， 优化目录结构， 支持新增页面热更新

* mpvue-router-patch: 在 mpvue 中使用 vue-router 兼容的路由写法

#### 1、 安装依赖

```bash
　　cnpm install mpvue-entry mpvue-router-patch --save-dev
```

#### 2、 项目src文件夹下创建router文件夹和router.js文件

<br>
<img :src="$withBase('/project-dir.png')">  
　　

#### 3、 项目引入src下的main.js文件　

```javascript
import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.use(MpvueRouterPatch)
```

::: warning
　　注： main.js的 export default {} 不能为空， 不然编译时不生成app.json文件
:::
 

#### 4、 修改webpack.base.conf.js配置文件

```javascript
const MpvueEntry = require('mpvue-entry')

module.exports = {
    entry: MpvueEntry.getEntry('./src/router/router.js'),
    .......
}
```

　　

#### 5、 配置router.js 文件　

::: warning
首个路由为首页
:::

```javascript
module.exports = [{
    path: 'pages/index',
    name: 'Index',
    config: {
        navigationBarTitleText: '文章详情',
        //引入UI组件，后面会讲到
        usingComponents: {
            "zan-button": "../dist/btn/index"
        }
    }
}, {
    path: 'pages/list/list',
    name: 'List',
    config: {
        navigationBarTitleText: 'list详情'
    }
}]
```

 

### 四、 使用小程序UI组件

#### 1、 将UI组件库克隆到本地

　　

#### 2、 将上图中的dist目录拷贝到mpvue项目的输出目录中

　　

#### 3、 在router.js文件中引入UI组件　

```javascript
module.exports = [{
    path: 'pages/index',
    name: 'Index',
    config: {
        navigationBarTitleText: '文章详情',
        //引入UI组件
        usingComponents: {
            //组件名和引用路径
            "zan-button": "../dist/btn/index"
        }
    }
}]
```

　　

#### 4、 页面中使用UI组件　

```html
<template>
    <div class="index">
        <zan-button type="primary" size="small">确认付款</zan-button>
    </div>
</template>
```

 

#### 5、 小程序使用自定义组件： 

 [使用自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)

[ZanUI组件库使用讲解](https://github.com/youzan/zanui-weapp/blob/dev/README.md)

 

### 五、 使用vuex进行状态管理

#### 安装

```bash
cnpm install vuex --save
```

#### 2、 引入（main.js文件）

```javascript
impotr store from './vuex/index'
Vue.prototrype.$store = store //挂在到vue原型上
```

 

### 六、 使用flyio进行数据交互

### 1、 安装

```javascript
cnpm install flyio--save
```

### 2、 引入（main.js文件）

```javascript
const Fly = require("flyio/dist/npm/wx") //引入
const fly = new Fly
Vue.prototrype.$fly = fly //挂在到vue原型上
```

### 3、 使用

```javascript
add() {
    //在add方法中执行接口请求
    this.$fly.get('http://******/user?id=133')
        .then(function(res) {
            //请求成功
            console.log('res', res);
        })
        .catch(function(err) {
            //请求失败
            console.log('err', err);
        });
}
```

			

### 七、 配置fly

#### 1、 配置公共设置 src/http/config.js

```javascript
	 /*
    fly配置文件
    by:David 2018.6.14
*/
	 //引入 fly
	 var Fly = require("flyio/dist/npm/wx")
	 var fly = new Fly;
	 import config from '@/config'
	 //配置请求基地址
	 // //定义公共headers
	 // fly.config.headers={xx:5,bb:6,dd:7}
	 // //设置超时
	 fly.config.timeout = 20000;
	 // //设置请求基地址
	 fly.config.baseURL = config.host

	 //添加请求拦截器
	 fly.interceptors.request.use((request) => {
	     //给所有请求添加自定义header
	     request.headers["X-Tag"] = "flyio";
	     //打印出请求体
	     // console.log(request.body)
	     //终止请求
	     //var err=new Error("xxx")
	     //err.request=request
	     //return Promise.reject(new Error(""))

	     //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
	     return request;
	 })

	 //添加响应拦截器，响应拦截器会在then/catch处理之前执行
	 fly.interceptors.response.use(
	     (response) => {
	         //只将请求结果的data字段返回
	         return response.data
	     },
	     (err) => {
	         //发生网络错误后会走到这里
	         //return Promise.resolve("ssss")
	     }
	 )
	 // Vue.prototype.$http=fly //将fly实例挂在vue原型上

	 export default fly
```
#### 2、配置个性设置 src/http/api.js

```javascript
	 import fly from './config'
	 import qs from 'qs'

	 import config from '../config'
	 const host = config.host;
	 const appKey = config.appKey;
	 const appid = config.appid;

	 /**
	  * 接口模版====post
	  *
	  * export const test = params => {return fly.post( `${root}/xx/xx` , qs.stringify(params))}; 
	  *
	  * 接口模版====get
	  *
	  * export const test1 = function(){return fly.get( `${root}/api/getNewsList` )}
	  *
	  *
	  * 用法： 
	  * 在 页面用引入 test
	  * import {test} from '../../http/api.js'
	  *
	  * test(params).then(res=>{ console.log(res) })
	  */

	 // 通用的get请求
	 export const get = (params) => {
	     return fly.get( `${host}${params.url}` , qs.stringify(params.data))
	 };

	 // 通用的post请求
	 export const post = (params) => {
	     return fly.post( `${host}${params.url}` , qs.stringify(params.data))
	 };
	 // 封装的登录请求， 根据后台接收方式选择是否加qs.stringify
	 export const login = params => {
	     return fly.post('/login', params)
	 };
```

#### 3、 host配置 config.js 

```javascript
	const host = 'http://xxx.xxx';
	const appid = '';
	const appKey = '';
	const config = {
	    host,
	    appid,
	    appKey,
	}
	export default config
```

## 分包

  分包分为两大步骤： **目录配置**与**分包配置**即app.json配置

### 目录配置  

1、 	首先要把子包的目录建在src/pages/ 下， 而不是官方的平级。 命名为packageOther</br>

2、 	将子包页面移入packageOther文件夹下， （一般非tabbar里面的页面）目录改造完成， 如图： </br>

<img :src="$withBase('/remind-02.jpg')">

#### 分包配置（app.json配置）  

1、 	在subPackages下建多个对象（子包的目录）， 最重要的一点： root对应的配置一定要是 **pages/packageOther/** 。 </br>

2、 	最终配置如下图： 

<img :src="$withBase('/remind-01.jpg')">

3、 	**删掉项目dist文件**， 然后重启项目：

```bash
npm run dev
```

4、 	查看微信开发工具面板的详情， 成功分包后： 主包减少、 分包增大， 如图

<img :src="$withBase('/remind-03.jpg')">

