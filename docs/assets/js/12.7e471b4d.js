(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{156:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("mpvue框架对于从没有接触过小程序又要尝试小程序开发的人员来说，无疑是目前最好的选择。mpvue从底层支持 Vue.js 语法和构建工具体系，同时再结合相关UI组件库，便可以高效的实现小程序开发，如果你不熟悉微信小程序与mpvue,请移步至其官网"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信小程序开发"),a("OutboundLink")],1),t._v("与"),a("a",{attrs:{href:"http://mpvue.com/mpvue/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mpvue"),a("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("本文讲述如何搭建完整的小程序项目框架，因为是第一次使用，有不完善的地方请大佬指正。")]),t._v(" "),a("p",[t._v("搭建内容包括：")]),t._v(" "),a("p",[t._v("1、使用scss语法：依赖插件sass-loader 、node-sass")]),t._v(" "),a("p",[t._v("2、像vue一样使用路由：依赖插件 mpvue-entry 和 mpvue-router-patch")]),t._v(" "),a("p",[t._v("3、使用ZanUI:有赞团队的小程序版UI组件库（GitHub）")]),t._v(" "),a("p",[t._v("4、使用vuex进行状态管理")]),t._v(" "),a("p",[t._v("5、使用flyio进行数据交互：GitHub地址")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[t._v("1、安装依赖")]),t._v(" "),a("p",[t._v("cnpm install node-sass sass-loader --save-dev")]),t._v(" "),a("p",[t._v("因为一些不知名的原因导致node-sass经常安装失败，所以采用cnpm方式安装最好")]),t._v(" "),a("p",[t._v("2、在.vue文件中的style节点加上lang=”scss”，这样就可以愉快地使用sass进行开发了，无需再webpack.base.config.js中配置loader，webpack会自动识别.scss文件以及.vue中的scss代码。")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("在使用mpvue提供的命令 vue init mpvue/mpvue-quickstart my-project 创建项目后，会发现每个页面都要配置main.js 文件，不仅繁琐而且显得多余，所以我们是否可以改造成像vue一样使用路由的方式呢，答案是可以的，需要用到mpvue-entry 和 mpvue-router-patch插件（集中式页面配置，自动生成各页面的入口文件，优化目录结构，支持新增页面热更新）和")]),t._v(" "),a("p",[t._v("mpvue-entry: 集中式页面配置，自动生成各页面的入口文件，优化目录结构，支持新增页面热更新")]),t._v(" "),a("p",[t._v("mpvue-router-patch: 在 mpvue 中使用 vue-router 兼容的路由写法")]),t._v(" "),a("p",[t._v("1、安装依赖")]),t._v(" "),a("p",[t._v("cnpm install mpvue-entry --save-dev")]),t._v(" "),a("p",[t._v("cnpm install mpvue-router-patch --save")]),t._v(" "),a("p",[t._v("2、项目src文件夹下创建router文件夹和router.js文件\n"),a("img",{attrs:{src:t.$withBase("/project-dir.png")}})]),t._v(" "),a("p"),t._v(" "),a("p",[t._v("3、项目引入src下的main.js文件")]),t._v(" "),t._m(7),a("p",[t._v("注：main.js的 export default {} 不能为空，不然编译时不生成app.json文件")]),t._v(" "),a("p",[t._v("4、修改webpack.base.conf.js配置文件")]),t._v(" "),t._m(8),a("p"),t._v(" "),a("p",[t._v("5、配置router.js 文件")]),t._v(" "),a("p",[t._v("// 首个路由为首页")]),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("1、将UI组件库克隆到本地")]),t._v(" "),a("p"),t._v(" "),a("p",[t._v("2、将上图中的dist目录拷贝到mpvue项目的输出目录中")]),t._v(" "),a("p"),t._v(" "),a("p",[t._v("3、在router.js文件中引入UI组件")]),t._v(" "),t._m(11),a("p"),t._v(" "),a("p",[t._v("4、页面中使用UI组件")]),t._v(" "),t._m(12),a("p",[t._v("5、")]),t._v(" "),a("p",[t._v("小程序使用自定义组件：https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/")]),t._v(" "),a("p",[t._v("ZanUI组件库使用讲解：https://github.com/youzan/zanui-weapp/blob/dev/README.md")]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("1、安装")]),t._v(" "),a("p",[t._v("cnpm install vuex --save")]),t._v(" "),a("p",[t._v("2、引入（main.js文件）")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("1、安装")]),t._v(" "),t._m(16),a("p",[t._v("2、引入（main.js文件）")]),t._v(" "),t._m(17),a("p",[t._v("3、使用")]),t._v(" "),a("p"),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("1、配置公共设置 src/http/config.js")]),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 简介")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速开始","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速开始")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"一、初始化一个mpvue项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、初始化一个mpvue项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 一、初始化一个mpvue项目")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 1. 先检查下 Node.js 是否安装成功")]),t._v("\n$ node -v\nv8.9.0\n\n$ "),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" -v\n5.6.0\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 2. 由于众所周知的原因，可以考虑切换源为 taobao 源")]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org/\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 3. 全局安装 vue-cli")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 一般是要 sudo 权限的")]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" --global vue-cli@2.9\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 4. 创建一个基于 mpvue-quickstart 模板的新项目")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 新手一路回车选择默认就可以了")]),t._v("\n$ vue init mpvue/mpvue-quickstart my-project\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 5. 安装依赖，走你")]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" my-project\n$ "),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"二、使用scss语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、使用scss语法","aria-hidden":"true"}},[this._v("#")]),this._v(" 二、使用scss语法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"三、像vue一样使用路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、像vue一样使用路由","aria-hidden":"true"}},[this._v("#")]),this._v(" 三、像vue一样使用路由")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MpvueRouterPatch "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'mpvue-router-patch'")]),t._v("\n\nVue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MpvueRouterPatch"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MpvueEntry "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'mpvue-entry'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("MpvueEntry"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getEntry")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./src/router/router.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'pages/index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    config"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        navigationBarTitleText"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'文章详情'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n　　　　"),a("span",{attrs:{class:"token comment"}},[t._v("//引入UI组件，后面会讲到")]),t._v("\n        usingComponents"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"zan-button"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"../dist/btn/index"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'pages/list/list'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'List'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    config"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        navigationBarTitleText"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'list详情'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"四、使用小程序ui组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、使用小程序ui组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 四、使用小程序UI组件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'pages/index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    config"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        navigationBarTitleText"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'文章详情'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//引入UI组件")]),t._v("\n        usingComponents"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("//组件名和引用路径")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"zan-button"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"../dist/btn/index"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("zan-button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("primary"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("size")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("small"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("确认付款"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("zan-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"五、使用vuex进行状态管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、使用vuex进行状态管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 五、使用vuex进行状态管理")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n　　　　impotr store "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./vuex/index'")]),t._v("\n\n　　　　Vue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototrype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),a("span",{attrs:{class:"token comment"}},[t._v("//挂在到vue原型上 ")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"六、使用flyio进行数据交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、使用flyio进行数据交互","aria-hidden":"true"}},[this._v("#")]),this._v(" 六、使用flyio进行数据交互")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("　　　　cnpm install flyio "),s("span",{attrs:{class:"token operator"}},[this._v("--")]),this._v("save\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("　　　　"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Fly "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"flyio/dist/npm/wx"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token comment"}},[t._v("//引入")]),t._v("\n\n　　　　"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fly "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Fly")]),t._v("\n\n　　　　Vue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototrype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$fly "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fly"),a("span",{attrs:{class:"token comment"}},[t._v("//挂在到vue原型上")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token function"}},[t._v("　　　　add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("//在add方法中执行接口请求")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$fly"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'http://******/user?id=133'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            "),a("span",{attrs:{class:"token comment"}},[t._v("//请求成功")]),t._v("\n                           console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'res'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("res"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{attrs:{class:"token comment"}},[t._v("//请求失败")]),t._v("\n                        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'err'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"七、-配置fly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、-配置fly","aria-hidden":"true"}},[this._v("#")]),this._v(" 七、  配置fly")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\t "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n    fly配置文件\n    by:David 2018.6.14\n*/")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//引入 fly")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Fly "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"flyio/dist/npm/wx"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fly "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Fly")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" config "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@/config'")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//配置请求基地址")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// //定义公共headers")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// fly.config.headers={xx:5,bb:6,dd:7}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// //设置超时")]),t._v("\nfly"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeout "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("20000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// //设置请求基地址")]),t._v("\nfly"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baseURL "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//添加请求拦截器")]),t._v("\nfly"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//给所有请求添加自定义header")]),t._v("\n    request"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"X-Tag"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"flyio"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//打印出请求体")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// console.log(request.body)")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//终止请求")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v('//var err=new Error("xxx")')]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//err.request=request")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v('//return Promise.reject(new Error(""))')]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" request"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//添加响应拦截器，响应拦截器会在then/catch处理之前执行")]),t._v("\nfly"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//只将请求结果的data字段返回")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//发生网络错误后会走到这里")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v('//return Promise.resolve("ssss")')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Vue.prototype.$http=fly //将fly实例挂在vue原型上")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" fly\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v(" 2、配置个性设置 src/http/api.js\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\t "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fly "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./config'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" qs "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'qs'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" config "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'../config'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" host "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" appKey "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appKey"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" appid "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appid"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/**\n * 接口模版====post\n *\n * export const test = params => {return fly.post(`${root}/xx/xx`, qs.stringify(params))};\n *\n * 接口模版====get\n *\n * export const test1 = function(){return fly.get(`${root}/api/getNewsList`)}\n *\n *\n * 用法：\n * 在 页面用引入 test\n * import {test} from '../../http/api.js'\n *\n * test(params).then(res=>{ console.log(res) })\n */")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 通用的get请求")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("get")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fly"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("host"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("params"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" qs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stringify")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 通用的post请求")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("post")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fly"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("post")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("host"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("params"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" qs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stringify")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 封装的登录请求，根据后台接收方式选择是否加qs.stringify")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("login")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" params "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fly"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("post")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/login'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("3、 host配置 config.js \n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\t"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" host "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'http://xxx.xxx'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" appid "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" appKey "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\thost"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tappid"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    appKey"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" config\n")])])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);