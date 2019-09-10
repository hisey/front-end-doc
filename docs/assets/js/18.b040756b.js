(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{225:function(t,n,e){"use strict";e.r(n);var s=e(0),a=Object(s.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("以前的JavaWeb项目大多数都是java程序员又当爹又当妈，又搞前端（ajax/jquery/js/html/css等等），又搞后端（java/mysql/oracle等等）。\n随着时代的发展（特别是微服务、大数据、分布式的发展），渐渐的许多大中小公司开始把前后端的界限分的越来越明确，前端工程师只管前端的事情，后端工程师只管后端的事情。\n正所谓术业有专攻，一个人如果什么都会，那么他毕竟什么都不精。\n大中型公司需要专业人才，小公司需要全才，但是对于个人职业发展来说，我建议是分开")]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("1.动态资源和静态资源全部耦合在一起，服务器压力大，因为服务器会收到各种http请求，例如css的http请求，js的，图片的等等。\n一旦服务器出现状况，前后台一起玩完，用户体验极差。")]),t._v(" "),e("p",[t._v("2.UI出好设计图后，前端工程师只负责将设计图切成html，需要由java工程师来将html套成jsp页面，出错率较高（因为页面中经常会出现大量的js代码），\n修改问题时需要双方协同开发，效率低下。")]),t._v(" "),e("p",[t._v("3.jsp必须要在支持java的web服务器里运行（例如tomcat，jetty，resin等），无法使用nginx等（nginx据说单实例http并发高达5w，这个优势要用上），\n性能提不上来。")]),t._v(" "),e("p",[t._v("4.第一次请求jsp，必须要在web服务器中编译成servlet，第一次运行会较慢。")]),t._v(" "),e("p",[t._v("5.每次请求jsp都是访问servlet再用输出流输出的html页面，效率没有直接使用html高（是每次哟，亲~）。")]),t._v(" "),e("p",[t._v("6.jsp内有较多标签和表达式，前端工程师在修改页面时会捉襟见肘，遇到很多痛点。")]),t._v(" "),e("p",[t._v("7.如果jsp中的内容很多，页面响应会很慢，因为是同步加载。")]),t._v(" "),e("p",[t._v("8.需要前端工程师使用java的ide（例如eclipse），以及需要配置各种后端的开发环境，你们有考虑过前端工程师的感受吗。")]),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("1.可以实现真正的前后端解耦，前端服务器使用nginx或pm2。\n前端/WEB服务器放的是css，js，图片等等一系列静态资源（甚至你还可以css，js，图片等资源放到特定的文件服务器，例如阿里云的oss，并使用cdn加速），前端服务器负责控制页面引用&跳转&路由，前端页面异步调用后端的接口，后端/应用服务器使用tomcat（把tomcat想象成一个数据提供者），加快整体响应速度。\n（这里需要使用一些前端工程化的框架比如nodejs，react，router，react，redux，webpack）")]),t._v(" "),e("p",[t._v("2.发现bug，可以快速定位是谁的问题，不会出现互相踢皮球的现象。\n页面逻辑，跳转错误，浏览器兼容性问题，脚本错误，页面样式等问题，全部由前端工程师来负责。\n接口数据出错，数据没有提交成功，应答超时等问题，全部由后端工程师来解决。\n双方互不干扰，前端与后端是相亲相爱的一家人。")]),t._v(" "),e("p",[t._v("3.在大并发情况下，我可以同时水平扩展前后端服务器，比如淘宝的一个首页就需要2000+台前端服务器做集群来抗住日均多少亿+的日均pv。\n（去参加阿里的技术峰会，听他们说他们的web容器都是自己写的，就算他单实例抗10万http并发，2000台是2亿http并发，并且他们还可以根据预知洪峰来无限拓展，很恐怖，就一个首页。。。）")]),t._v(" "),e("p",[t._v("4.减少后端服务器的并发/负载压力\n除了接口以外的其他所有http请求全部转移到前端nginx上，接口的请求调用tomcat，参考nginx反向代理tomcat。\n且除了第一次页面请求外，浏览器会大量调用本地缓存。")]),t._v(" "),e("p",[t._v("5.即使后端服务暂时超时或者宕机了，前端页面也会正常访问，只不过数据刷不出来而已。")]),t._v(" "),e("p",[t._v("6.也许你也需要有微信相关的轻应用，那样你的接口完全可以共用，如果也有app相关的服务，\n那么只要通过一些代码重构，也可以大量复用接口，提升效率。（多端应用）")]),t._v(" "),e("p",[t._v("7.页面显示的东西再多也不怕，因为是异步加载。")]),t._v(" "),e("p",[t._v("8.nginx支持页面热部署，不用重启服务器，前端升级更无缝。")]),t._v(" "),e("p",[t._v("9.增加代码的维护性&易读性（前后端耦在一起的代码读起来相当费劲）。")]),t._v(" "),e("p",[t._v("10.提升开发效率，因为可以前后端并行开发，而不是像以前的强依赖。")]),t._v(" "),e("p",[t._v("11.在nginx中部署证书，外网使用https访问，并且只开放443和80端口，其他端口一律关闭（防止黑客端口扫描），\n内网使用http，性能和安全都有保障。")]),t._v(" "),e("p",[t._v("12.前端大量的组件代码得以复用，组件化，提升开发效率，抽出来")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("以下的内容都是基于我的一个商品管理系统demo来讨论的(https://github.com/hisey/node-vue.git)\n前端的技术框架是: vue全家桶+nodejs+express(实现的是单页面(SPA)应用:http://193.112.202.42:4865)\n首先，先分清楚前后端的工作")]),t._v(" "),t._m(17),t._v(" "),e("p",[t._v("一般来说，要实现前后端分离，前端就需要开启一个本地的服务器来运行自己的前端代码，以此来模拟真实的线上环境，并且，也是为了更好的开发。因为你在实际开发中，你不可能要求每一个前端都去搭建一个java(php)环境，并且在java环境下开发，这对于前端来说，学习成本太高了。但如果本地没有开启服务器的话，不仅无法模拟线上的环境，而且还面临到了跨域的问题，因为你如果写静态的html页面，直接在文件目录下打开的话，你是无法发出ajax请求的(浏览器跨域的限制),因此，你需要在本地运行一个服务器，可是又不想搭建陌生而庞大的java环境，怎么办法呢？nodejs正好解决了这个问题。在我们项目中，我们利用nodejs的express框架来开启一个本地的服务器，然后利用nodejs的一个http-proxy-middleware插件将客户端发往nodejs的请求转发给真正的服务器，让nodejs作为一个中间层。这样，前端就可以无忧无虑的开发了\n由于前后端分离后，前端和后台同时开发时，就可能遇到前端已经开发好一个页面了，可是却等待后台API接口的情况。比如说A是负责前端，B是负责后台，A可能用了一周做好了基本的结构，并且需要API接口联调后，才能继续开发，而此时B却还没有实现好所需要的接口，这种情况，怎么办呢？在我们这个项目里，我们是通过了mock来提供一些假数据，我们先规定好了API接口，设计出了一套API文档，然后我们就可以通过API文档，利用mock(http://mockjs.com)来返回一些假数据，这样就可以模拟发送API到接受响应的整一个过程，因此前端也不需要依赖于后端开发了，可以独立开发，等到后台的API全部设计完之后，就可以比较快速的联调。")]),t._v(" "),t._m(18),t._v(" "),e("p",[t._v("前面的我发的项目结构图中，已经表明，在这个项目里，我们将nodejs作为中间层，那么，为什么我们要特地引入nodejs呢？直接用java做不就行了吗？")]),t._v(" "),e("p",[t._v("我觉得引入nodejs主要是为了分层开发，职责划分，nodejs作为前端服务器，由前端开发人员负责，前端开发人员不需要知道java后台是如何实现的，也不需要知道API接口是如何实现的，我们只需要关心我们前端的开发工作，并且管理好nodejs前端服务器，而后台开发人员也不需要考虑如何前端是如何部署的，他只需要做好自己擅长的部分，提供好API接口就可以；\nnodejs本身有着独特的异步、非阻塞I/O的特点，这也就意味着他特别适合I/O密集型操作，在处理并发量比较大的请求上能力比较强，因此，利用它来充当前端服务器，向客户端提供静态文件以及响应客户端的请求，我觉得这是一个很不错的选择。")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),e("p",[t._v("作为静态文件服务器，当用户访问网站的时候，将index.html以及其引入的js、css、fonts以及图片返回给用户\n负责将客户端发来的ajax请求转发给后台服务器\n其实前端服务器的部署工作是算比较简单的，具体有以下两个点:")]),t._v(" "),t._m(26),t._v(" "),e("p",[t._v("将开发完的前端代码，利用webpack打包成静态压缩文件")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),e("p",[t._v("在服务器上，利用pm2负载均衡器来执行以下的代码来开启服务器:")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),e("p",[t._v("1、js框架 "),e("a",{attrs:{href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue"),e("OutboundLink")],1),t._v(":易用、灵活、高效 "),e("br"),t._v("\n2、pc端组件库："),e("a",{attrs:{href:"http://element.eleme.io/#/zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("element"),e("OutboundLink")],1),t._v(" Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库 "),e("br"),t._v("\n3、移动端组件库："),e("a",{attrs:{href:"https://vux.li/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vux"),e("OutboundLink")],1),t._v(" 一个凑合的 Vue.js 移动端 UI 组件库 "),e("br"),t._v("\n4、vue资源："),e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("awesome-vue"),e("OutboundLink")],1),t._v(" 简直就是海量 "),e("br")])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"为什么前后端分离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么前后端分离","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么前后端分离")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"术业有专攻"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#术业有专攻","aria-hidden":"true"}},[this._v("#")]),this._v(" 术业有专攻")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"jsp的痛点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jsp的痛点","aria-hidden":"true"}},[this._v("#")]),this._v(" jsp的痛点")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"前后分离优势"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前后分离优势","aria-hidden":"true"}},[this._v("#")]),this._v(" 前后分离优势")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"模式区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模式区别","aria-hidden":"true"}},[this._v("#")]),this._v(" 模式区别")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"开发模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开发模式","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发模式")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h4",{attrs:{id:"以前老的方式是"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#以前老的方式是","aria-hidden":"true"}},[this._v("#")]),this._v(" 以前老的方式是")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("1.产品经历/领导/客户提出需求"),e("br"),t._v("\n2.UI做出设计图"),e("br"),t._v("\n3.前端工程师做html页面"),e("br"),t._v("\n4.后端工程师将html页面套成jsp页面（前后端强依赖，后端必须要等前端的html做好才能套jsp。如果html发生变更，就更痛了，开发效率低）"),e("br"),t._v("\n5.集成出现问题"),e("br"),t._v("\n6.前端返工"),e("br"),t._v("\n7.后端返工"),e("br"),t._v("\n8.二次集成"),e("br"),t._v("\n9.集成成功"),e("br"),t._v("\n10.交付"),e("br")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h4",{attrs:{id:"新的方式是"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新的方式是","aria-hidden":"true"}},[this._v("#")]),this._v(" 新的方式是")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("1.产品经历/领导/客户提出需求"),e("br"),t._v("\n2.UI做出设计图"),e("br"),t._v("\n3.前后端约定接口&数据&参数"),e("br"),t._v("\n4.前后端并行开发（无强依赖，可前后端并行开发，如果需求变更，只要接口&参数不变，就不用两边都修改代码，开发效率高）"),e("br"),t._v("\n5.前后端集成"),e("br"),t._v("\n6.前端页面调整"),e("br"),t._v("\n7.集成成功"),e("br"),t._v("\n8.交付"),e("br")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"请求方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#请求方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 请求方式")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h4",{attrs:{id:"以前老的方式是-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#以前老的方式是-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 以前老的方式是")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("1.客户端请求"),n("br"),this._v("\n2.服务端的servlet或controller接收请求（后端控制路由与渲染页面，整个项目开发的权重大部分在后端）"),n("br"),this._v("\n3.调用service,dao代码完成业务逻辑"),n("br"),this._v("\n4.返回jsp"),n("br"),this._v("\n5.jsp展现一些动态的代码"),n("br")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h4",{attrs:{id:"新的方式是-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新的方式是-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 新的方式是")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("1.浏览器发送请求"),n("br"),this._v("\n2.直接到达html页面（前端控制路由与渲染页面，整个项目开发的权重前移）"),n("br"),this._v("\n3.html页面负责调用服务端接口产生数据（通过ajax等等，后台返回json格式数据，json数据格式因为简洁高效而取代xml）"),n("br"),this._v("\n4.填充html，展现动态效果，在页面上进行解析并操作DOM。"),n("br"),this._v("\n（有兴趣的童鞋可以访问一下阿里巴巴等大型网站，然后按一下F12，监控一下你刷新一次页面，他的http是怎么玩的，大多数都是单独请求后台数据,\n使用json传输数据，而不是一个大而全的http请求把整个页面包括动+静全部返回过来）")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"如何做到前后端分离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何做到前后端分离","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何做到前后端分离")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"分离说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分离说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 分离说明")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("前端的工作实现整一个前端页面以及交互逻辑，以及利用ajax与nodejs服务器（中间层)交互\n后端的工作提供API接口，利用express-session来管理session,与数据库交互\n项目的整一个架构如下:\n"),n("img",{attrs:{src:"https://www.showdoc.cc/server/api/common/visitfile/sign/f734d7f77d97da67941768bd79c69784?showdoc=.jpg",alt:""}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"为什么要引入nodejs作为中间层"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么要引入nodejs作为中间层","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么要引入nodejs作为中间层")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"分离后的项目目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分离后的项目目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 分离后的项目目录")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"node后端-简易版"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node后端-简易版","aria-hidden":"true"}},[this._v("#")]),this._v(" node后端(简易版)")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[this._v("│  api.js\n│  app.js\n│  gulpfile.js\n│  package.json\n│  README.md\n│  sftpConfig.js\n│\n├─configs\n│      db.js\n│\n├─controls\n│      goods.js\n│      user.js\n│\n├─routes\n│      router.js\n│\n├─sql\n│      func.js\n│      sql.js\n│      vue-admin.sql\n│\n└─utils\n      addOne.js\n      dateTime.js\n      dir.js\n      paging.js\n      upload.js\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"前端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[this._v("│  .babelrc\n│  .editorconfig\n│  .eslintignore\n│  .eslintrc.js\n│  .gitignore\n│  .postcssrc.js\n│  .travis.yml\n│  app.js\n│  favicon.ico\n│  gulpfile.js\n│  index.html\n│  LICENSE\n│  package-lock.json\n│  package.json\n│  README.md\n│  sftpConfig.js\n│\n├─build\n│      build.js\n│      check-versions.js\n│      logo.png\n│      utils.js\n│      vue-loader.conf.js\n│      webpack.base.conf.js\n│      webpack.dev.conf.js\n│      webpack.prod.conf.js\n│\n├─config\n│      dev.env.js\n│      index.js\n│      prod.env.js\n│\n├─dist\n│  │  favicon.ico\n│  │  index.html\n│  │\n│  └─static\n│      ├─css\n│      │      app.7246b11ea8ac0409434a8a4a35acac64.css\n│      │\n│      ├─fonts\n│      │      element-icons.6f0a763.ttf\n│      │\n│      ├─img\n│      │      404.a57b6f3.png\n│      │\n│      └─js\n│              0.ea90194fd816f4940a95.js\n│              1.3a8201c83a4189ac76b4.js\n│              2.4dacdca4257e01480e17.js\n│              3.1a0a39c3f0dd27734a39.js\n│              4.73db8af2408f12de4358.js\n│              5.34591b6fddc0f27be635.js\n│              6.49198fa8404a75291e48.js\n│              7.1c878c324b75d37841d8.js\n│              8.c38a1aa8913980b2225a.js\n│              9.f16d8e9bcdc649bc8bb0.js\n│              app.62a753dc9f199308f525.js\n│              manifest.8d1c2a49fd6fa721a718.js\n│              vendor.def0addb5f603278f3b0.js\n│\n├─src\n│  │  App.vue\n│  │  main.js\n│  │  permission.js\n│  │\n│  ├─api\n│  │      goods.js\n│  │      login.js\n│  │      user.js\n│  │\n│  ├─assets\n│  │  └─404_images\n│  │          404.png\n│  │          404_cloud.png\n│  │\n│  ├─components\n│  │  ├─Breadcrumb\n│  │  │      index.vue\n│  │  │\n│  │  ├─Hamburger\n│  │  │      index.vue\n│  │  │\n│  │  └─SvgIcon\n│  │          index.vue\n│  │\n│  ├─filters\n│  │      index.js\n│  │\n│  ├─icons\n│  │  │  index.js\n│  │  │\n│  │  └─svg\n│  │          example.svg\n│  │          eye.svg\n│  │          form.svg\n│  │          password.svg\n│  │          table.svg\n│  │          tree.svg\n│  │          user.svg\n│  │\n│  ├─router\n│  │      index.js\n│  │\n│  ├─store\n│  │  │  getters.js\n│  │  │  index.js\n│  │  │\n│  │  └─modules\n│  │          app.js\n│  │          user.js\n│  │\n│  ├─styles\n│  │      element-ui.scss\n│  │      index.scss\n│  │      mixin.scss\n│  │      sidebar.scss\n│  │      transition.scss\n│  │      variables.scss\n│  │\n│  ├─utils\n│  │      auth.js\n│  │      env.js\n│  │      fetch.js\n│  │      index.js\n│  │      validate.js\n│  │\n│  └─views\n│      │  404.vue\n│      │\n│      ├─dashboard\n│      │      index.vue\n│      │\n│      ├─goodsManage\n│      │      addClass.vue\n│      │      addGoods.vue\n│      │      classList.vue\n│      │      goodsList.vue\n│      │\n│      ├─layout\n│      │  │  Layout.vue\n│      │  │\n│      │  ├─components\n│      │  │  │  AppMain.vue\n│      │  │  │  index.js\n│      │  │  │  Navbar.vue\n│      │  │  │\n│      │  │  └─Sidebar\n│      │  │          index.vue\n│      │  │          SidebarItem.vue\n│      │  │\n│      │  └─mixin\n│      │          ResizeHandler.js\n│      │\n│      ├─login\n│      │      index.vue\n│      │\n│      └─userManage\n│              adminList.vue\n│              roleList.vue\n│\n└─static\n        .gitkeep\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"前端服务器部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端服务器部署","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端服务器部署")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"nodejs前端服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs前端服务器","aria-hidden":"true"}},[this._v("#")]),this._v(" nodejs前端服务器")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"静态文件打包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#静态文件打包","aria-hidden":"true"}},[this._v("#")]),this._v(" 静态文件打包")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("img",{attrs:{src:"https://www.showdoc.cc/server/api/common/visitfile/sign/213efcf8dfd228fc687bafce4cf6556a?showdoc=.jpg",alt:""}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"负载均衡器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡器","aria-hidden":"true"}},[this._v("#")]),this._v(" 负载均衡器")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("img",{attrs:{src:"https://www.showdoc.cc/server/api/common/visitfile/sign/9ba7ba9d390c8eac2c0c509d6a20e027?showdoc=.jpg",alt:""}}),this._v(" "),n("img",{attrs:{src:"https://www.showdoc.cc/server/api/common/visitfile/sign/72bd2940ea0143534c373f5cc84816e2?showdoc=.jpg",alt:""}}),this._v(" "),n("img",{attrs:{src:"https://www.showdoc.cc/server/api/common/visitfile/sign/70369b0ac33fa757de9af9ee936385b3?showdoc=.jpg",alt:""}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"前端框架及组件推荐"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端框架及组件推荐","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端框架及组件推荐")])}],!1,null,null,null);n.default=a.exports}}]);