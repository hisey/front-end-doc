## 为什么前后端分离

### 术业有专攻

  以前的JavaWeb项目大多数都是java程序员又当爹又当妈，又搞前端（ajax/jquery/js/html/css等等），又搞后端（java/mysql/oracle等等）。
随着时代的发展（特别是微服务、大数据、分布式的发展），渐渐的许多大中小公司开始把前后端的界限分的越来越明确，前端工程师只管前端的事情，后端工程师只管后端的事情。
正所谓术业有专攻，一个人如果什么都会，那么他毕竟什么都不精。
大中型公司需要专业人才，小公司需要全才，但是对于个人职业发展来说，我建议是分开


### jsp的痛点

  1.动态资源和静态资源全部耦合在一起，服务器压力大，因为服务器会收到各种http请求，例如css的http请求，js的，图片的等等。
一旦服务器出现状况，前后台一起玩完，用户体验极差。

  2.UI出好设计图后，前端工程师只负责将设计图切成html，需要由java工程师来将html套成jsp页面，出错率较高（因为页面中经常会出现大量的js代码），
修改问题时需要双方协同开发，效率低下。

  3.jsp必须要在支持java的web服务器里运行（例如tomcat，jetty，resin等），无法使用nginx等（nginx据说单实例http并发高达5w，这个优势要用上），
性能提不上来。

  4.第一次请求jsp，必须要在web服务器中编译成servlet，第一次运行会较慢。

  5.每次请求jsp都是访问servlet再用输出流输出的html页面，效率没有直接使用html高（是每次哟，亲~）。

  6.jsp内有较多标签和表达式，前端工程师在修改页面时会捉襟见肘，遇到很多痛点。

  7.如果jsp中的内容很多，页面响应会很慢，因为是同步加载。

  8.需要前端工程师使用java的ide（例如eclipse），以及需要配置各种后端的开发环境，你们有考虑过前端工程师的感受吗。

## 前后分离优势

  1.可以实现真正的前后端解耦，前端服务器使用nginx或pm2。
前端/WEB服务器放的是css，js，图片等等一系列静态资源（甚至你还可以css，js，图片等资源放到特定的文件服务器，例如阿里云的oss，并使用cdn加速），前端服务器负责控制页面引用&跳转&路由，前端页面异步调用后端的接口，后端/应用服务器使用tomcat（把tomcat想象成一个数据提供者），加快整体响应速度。
（这里需要使用一些前端工程化的框架比如nodejs，react，router，react，redux，webpack）

  2.发现bug，可以快速定位是谁的问题，不会出现互相踢皮球的现象。
页面逻辑，跳转错误，浏览器兼容性问题，脚本错误，页面样式等问题，全部由前端工程师来负责。
接口数据出错，数据没有提交成功，应答超时等问题，全部由后端工程师来解决。
双方互不干扰，前端与后端是相亲相爱的一家人。

3.在大并发情况下，我可以同时水平扩展前后端服务器，比如淘宝的一个首页就需要2000+台前端服务器做集群来抗住日均多少亿+的日均pv。
（去参加阿里的技术峰会，听他们说他们的web容器都是自己写的，就算他单实例抗10万http并发，2000台是2亿http并发，并且他们还可以根据预知洪峰来无限拓展，很恐怖，就一个首页。。。）

4.减少后端服务器的并发/负载压力
除了接口以外的其他所有http请求全部转移到前端nginx上，接口的请求调用tomcat，参考nginx反向代理tomcat。
且除了第一次页面请求外，浏览器会大量调用本地缓存。

5.即使后端服务暂时超时或者宕机了，前端页面也会正常访问，只不过数据刷不出来而已。

6.也许你也需要有微信相关的轻应用，那样你的接口完全可以共用，如果也有app相关的服务，
那么只要通过一些代码重构，也可以大量复用接口，提升效率。（多端应用）

7.页面显示的东西再多也不怕，因为是异步加载。

8.nginx支持页面热部署，不用重启服务器，前端升级更无缝。

9.增加代码的维护性&易读性（前后端耦在一起的代码读起来相当费劲）。

10.提升开发效率，因为可以前后端并行开发，而不是像以前的强依赖。

11.在nginx中部署证书，外网使用https访问，并且只开放443和80端口，其他端口一律关闭（防止黑客端口扫描），
内网使用http，性能和安全都有保障。

12.前端大量的组件代码得以复用，组件化，提升开发效率，抽出来


## 模式区别

### 开发模式
#### 以前老的方式是
1.产品经历/领导/客户提出需求</br>
2.UI做出设计图</br>
3.前端工程师做html页面</br>
4.后端工程师将html页面套成jsp页面（前后端强依赖，后端必须要等前端的html做好才能套jsp。如果html发生变更，就更痛了，开发效率低）</br>
5.集成出现问题</br>
6.前端返工</br>
7.后端返工</br>
8.二次集成</br>
9.集成成功</br>
10.交付</br>

#### 新的方式是
1.产品经历/领导/客户提出需求</br>
2.UI做出设计图</br>
3.前后端约定接口&数据&参数</br>
4.前后端并行开发（无强依赖，可前后端并行开发，如果需求变更，只要接口&参数不变，就不用两边都修改代码，开发效率高）</br>
5.前后端集成</br>
6.前端页面调整</br>
7.集成成功</br>
8.交付</br>



### 请求方式

#### 以前老的方式是
1.客户端请求</br>
2.服务端的servlet或controller接收请求（后端控制路由与渲染页面，整个项目开发的权重大部分在后端）</br>
3.调用service,dao代码完成业务逻辑</br>
4.返回jsp</br>
5.jsp展现一些动态的代码</br>



#### 新的方式是
1.浏览器发送请求</br>
2.直接到达html页面（前端控制路由与渲染页面，整个项目开发的权重前移）</br>
3.html页面负责调用服务端接口产生数据（通过ajax等等，后台返回json格式数据，json数据格式因为简洁高效而取代xml）</br>
4.填充html，展现动态效果，在页面上进行解析并操作DOM。</br>
（有兴趣的童鞋可以访问一下阿里巴巴等大型网站，然后按一下F12，监控一下你刷新一次页面，他的http是怎么玩的，大多数都是单独请求后台数据,
使用json传输数据，而不是一个大而全的http请求把整个页面包括动+静全部返回过来）


## 如何做到前后端分离
### 分离说明
  以下的内容都是基于我的一个商品管理系统demo来讨论的(https://github.com/hisey/node-vue.git)
前端的技术框架是: vue全家桶+nodejs+express(实现的是单页面(SPA)应用:http://193.112.202.42:4865)
首先，先分清楚前后端的工作

  前端的工作实现整一个前端页面以及交互逻辑，以及利用ajax与nodejs服务器（中间层)交互
后端的工作提供API接口，利用express-session来管理session,与数据库交互
项目的整一个架构如下:
![](https://www.showdoc.cc/server/api/common/visitfile/sign/f734d7f77d97da67941768bd79c69784?showdoc=.jpg)

一般来说，要实现前后端分离，前端就需要开启一个本地的服务器来运行自己的前端代码，以此来模拟真实的线上环境，并且，也是为了更好的开发。因为你在实际开发中，你不可能要求每一个前端都去搭建一个java(php)环境，并且在java环境下开发，这对于前端来说，学习成本太高了。但如果本地没有开启服务器的话，不仅无法模拟线上的环境，而且还面临到了跨域的问题，因为你如果写静态的html页面，直接在文件目录下打开的话，你是无法发出ajax请求的(浏览器跨域的限制),因此，你需要在本地运行一个服务器，可是又不想搭建陌生而庞大的java环境，怎么办法呢？nodejs正好解决了这个问题。在我们项目中，我们利用nodejs的express框架来开启一个本地的服务器，然后利用nodejs的一个http-proxy-middleware插件将客户端发往nodejs的请求转发给真正的服务器，让nodejs作为一个中间层。这样，前端就可以无忧无虑的开发了
由于前后端分离后，前端和后台同时开发时，就可能遇到前端已经开发好一个页面了，可是却等待后台API接口的情况。比如说A是负责前端，B是负责后台，A可能用了一周做好了基本的结构，并且需要API接口联调后，才能继续开发，而此时B却还没有实现好所需要的接口，这种情况，怎么办呢？在我们这个项目里，我们是通过了mock来提供一些假数据，我们先规定好了API接口，设计出了一套API文档，然后我们就可以通过API文档，利用mock(http://mockjs.com)来返回一些假数据，这样就可以模拟发送API到接受响应的整一个过程，因此前端也不需要依赖于后端开发了，可以独立开发，等到后台的API全部设计完之后，就可以比较快速的联调。
### 为什么要引入nodejs作为中间层
  前面的我发的项目结构图中，已经表明，在这个项目里，我们将nodejs作为中间层，那么，为什么我们要特地引入nodejs呢？直接用java做不就行了吗？

我觉得引入nodejs主要是为了分层开发，职责划分，nodejs作为前端服务器，由前端开发人员负责，前端开发人员不需要知道java后台是如何实现的，也不需要知道API接口是如何实现的，我们只需要关心我们前端的开发工作，并且管理好nodejs前端服务器，而后台开发人员也不需要考虑如何前端是如何部署的，他只需要做好自己擅长的部分，提供好API接口就可以；
nodejs本身有着独特的异步、非阻塞I/O的特点，这也就意味着他特别适合I/O密集型操作，在处理并发量比较大的请求上能力比较强，因此，利用它来充当前端服务器，向客户端提供静态文件以及响应客户端的请求，我觉得这是一个很不错的选择。
## 分离后的项目目录
  ### node后端(简易版)
  ```bash
│  api.js
│  app.js
│  gulpfile.js
│  package.json
│  README.md
│  sftpConfig.js
│
├─configs
│      db.js
│
├─controls
│      goods.js
│      user.js
│
├─routes
│      router.js
│
├─sql
│      func.js
│      sql.js
│      vue-admin.sql
│
└─utils
        addOne.js
        dateTime.js
        dir.js
        paging.js
        upload.js
```      
### 前端
``` bash 
│  .babelrc
│  .editorconfig
│  .eslintignore
│  .eslintrc.js
│  .gitignore
│  .postcssrc.js
│  .travis.yml
│  app.js
│  favicon.ico
│  gulpfile.js
│  index.html
│  LICENSE
│  package-lock.json
│  package.json
│  README.md
│  sftpConfig.js
│
├─build
│      build.js
│      check-versions.js
│      logo.png
│      utils.js
│      vue-loader.conf.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.prod.conf.js
│
├─config
│      dev.env.js
│      index.js
│      prod.env.js
│
├─dist
│  │  favicon.ico
│  │  index.html
│  │
│  └─static
│      ├─css
│      │      app.7246b11ea8ac0409434a8a4a35acac64.css
│      │
│      ├─fonts
│      │      element-icons.6f0a763.ttf
│      │
│      ├─img
│      │      404.a57b6f3.png
│      │
│      └─js
│              0.ea90194fd816f4940a95.js
│              1.3a8201c83a4189ac76b4.js
│              2.4dacdca4257e01480e17.js
│              3.1a0a39c3f0dd27734a39.js
│              4.73db8af2408f12de4358.js
│              5.34591b6fddc0f27be635.js
│              6.49198fa8404a75291e48.js
│              7.1c878c324b75d37841d8.js
│              8.c38a1aa8913980b2225a.js
│              9.f16d8e9bcdc649bc8bb0.js
│              app.62a753dc9f199308f525.js
│              manifest.8d1c2a49fd6fa721a718.js
│              vendor.def0addb5f603278f3b0.js
│
├─src
│  │  App.vue
│  │  main.js
│  │  permission.js
│  │
│  ├─api
│  │      goods.js
│  │      login.js
│  │      user.js
│  │
│  ├─assets
│  │  └─404_images
│  │          404.png
│  │          404_cloud.png
│  │
│  ├─components
│  │  ├─Breadcrumb
│  │  │      index.vue
│  │  │
│  │  ├─Hamburger
│  │  │      index.vue
│  │  │
│  │  └─SvgIcon
│  │          index.vue
│  │
│  ├─filters
│  │      index.js
│  │
│  ├─icons
│  │  │  index.js
│  │  │
│  │  └─svg
│  │          example.svg
│  │          eye.svg
│  │          form.svg
│  │          password.svg
│  │          table.svg
│  │          tree.svg
│  │          user.svg
│  │
│  ├─router
│  │      index.js
│  │
│  ├─store
│  │  │  getters.js
│  │  │  index.js
│  │  │
│  │  └─modules
│  │          app.js
│  │          user.js
│  │
│  ├─styles
│  │      element-ui.scss
│  │      index.scss
│  │      mixin.scss
│  │      sidebar.scss
│  │      transition.scss
│  │      variables.scss
│  │
│  ├─utils
│  │      auth.js
│  │      env.js
│  │      fetch.js
│  │      index.js
│  │      validate.js
│  │
│  └─views
│      │  404.vue
│      │
│      ├─dashboard
│      │      index.vue
│      │
│      ├─goodsManage
│      │      addClass.vue
│      │      addGoods.vue
│      │      classList.vue
│      │      goodsList.vue
│      │
│      ├─layout
│      │  │  Layout.vue
│      │  │
│      │  ├─components
│      │  │  │  AppMain.vue
│      │  │  │  index.js
│      │  │  │  Navbar.vue
│      │  │  │
│      │  │  └─Sidebar
│      │  │          index.vue
│      │  │          SidebarItem.vue
│      │  │
│      │  └─mixin
│      │          ResizeHandler.js
│      │
│      ├─login
│      │      index.vue
│      │
│      └─userManage
│              adminList.vue
│              roleList.vue
│
└─static
        .gitkeep
```
## 前端服务器部署

### nodejs前端服务器
  作为静态文件服务器，当用户访问网站的时候，将index.html以及其引入的js、css、fonts以及图片返回给用户
负责将客户端发来的ajax请求转发给后台服务器
其实前端服务器的部署工作是算比较简单的，具体有以下两个点:

### 静态文件打包
   将开发完的前端代码，利用webpack打包成静态压缩文件

![](https://www.showdoc.cc/server/api/common/visitfile/sign/213efcf8dfd228fc687bafce4cf6556a?showdoc=.jpg)
### 负载均衡器
   在服务器上，利用pm2负载均衡器来执行以下的代码来开启服务器:

![](https://www.showdoc.cc/server/api/common/visitfile/sign/9ba7ba9d390c8eac2c0c509d6a20e027?showdoc=.jpg)
![](https://www.showdoc.cc/server/api/common/visitfile/sign/72bd2940ea0143534c373f5cc84816e2?showdoc=.jpg)
![](https://www.showdoc.cc/server/api/common/visitfile/sign/70369b0ac33fa757de9af9ee936385b3?showdoc=.jpg)

## 前端框架及组件推荐
1、js框架 [Vue](https://cn.vuejs.org/):易用、灵活、高效 <br>
2、pc端组件库：[element](http://element.eleme.io/#/zh-CN) Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库 <br>
3、移动端组件库：[vux](https://vux.li/) 一个凑合的 Vue.js 移动端 UI 组件库 <br>
4、vue资源：[awesome-vue](https://github.com/vuejs/awesome-vue) 简直就是海量 <br>