# 多页面
## 为什么要使用多页面

营销活动类页面与传统 SPA（Single-Page Application - 单页应用程序）相比，更加强调的在于
1、更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。
2、更快的内容到达时间(time-to-content)，特别是对于缓慢的网络情况或运行缓慢的设备;
而vue官方提供的 脚手架 只支持SPA，为此我们在github 找到ssr应用框架nuxt.js（基于vue的ssr服务端渲染解决方案，star高，曾经受vue作者唯一好评的框架）

## nuxt.js
Nuxt.js 是一个基于 Vue.js 的通用应用框架。
通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 UI渲染。[更多详情][更多详情]

## 技术栈
  vue+es6+sass+nuxt

## 构建环境
基于node,js

## 构建工具
webpack

## 安装步骤
1、下载安装最新版的node.js
2、全局安装vue脚手架
   ```bash
$ npm install vue-cli -g
```
3、安装nuxt模板
```bash
$ vue init nuxt-community/starter-template <project-name>
```
4、安装依赖包
```bash
$ cd <project-name>
$ npm install
```
## 构建步骤

开发模式
  ```bash
     $ npm run dev
  ```
发布部署
```bash
    $ nuxt build
    $ nuxt start
```

## 项目目录
Nuxt.js 的应用目录架构提供了良好的代码分层结构，适用于开发或大或小的应用 [更多介绍][1]
```bash

├── src/
│   ├── store                   # 用于组织应用的 Vuex 状态树 文件
│   ├── static                  # 用于存放应用的静态文件，此类文件不会被Webpack打包
│   ├── plugins                 # 用于组织那些需要在 根vue.js应用 实例化之前需要运行的插件
│   ├── pages                   # 页面文件
│   ├── components/             # ui组件 
│   │   └── ...
│   └── assets/                 # 需打包的静态文件
│       └── ...
├── .babelrc                    # babel 配置
├── .eslintrc.js                # eslint 配置
├── .eslintignore               # eslint 自定义需忽略规则
├── .gitignore                  # 仓库忽略文件
├── .postcssrc.js               # postcss 配置
├──  package.json               # 存构建的脚本及项目所需依赖的配置
├──  nuxt.config.js             # nuxt.js配置
└──  README.md                  # 项目说明文档

```

[1]: https://zh.nuxtjs.org/guide/directory-structure "项目目录详细介绍"
[1]: https://zh.nuxtjs.org/guide/directory-structure "更多介绍"

[3]: https://zh.nuxtjs.org/guide "详情请查看"
[更多详情]: https://zh.nuxtjs.org/guide "更多详情"