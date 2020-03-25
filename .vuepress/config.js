module.exports = {
  title: "hisey",
  description: "不一样的世界，等你去发现",
  base: "/front-end-doc/",
  head: [
    ["link", { rel: "stylesheet", href: "/font/iconfont.css" }],
    ["link", { rel: "stylesheet", href: "/style/index.css" }]
  ],
  port: 4864,
  dest: "./docs",
  themeConfig: {
    lastUpdated: "Last Updated",
    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
    },
    nav: [
      {
        text: "首页",
        link: "/"
      },
      {
        text: "Git指南",
        items: [
          {
            text: "Git工作流",
            link: "/src/base/git/flow"
          },
          {
            text: "常用命令行",
            link: "/src/base/git/bash"
          }
        ]
      },
      {
        text: "基础知识",
        items: [
          {
            text: "es6代码风格",
            link: "/src/base/codeStyle/"
          },
          {
            text: "css干货",
            link: "/src/base/cssDoc/"
          },
          {
            text: "js干货",
            link: "/src/base/jsDoc/"
          },
          {
            text: "弹性盒子布局",
            link: "/src/base/flexbox/"
          }
        ]
      },
      {
        text: "解决方案",
        items: [
          {
            text: "前后端分离",
            link: "/src/case/webSplit/"
          },
          {
            text: "代码部署",
            link: "/src/case/autoDeploy/"
          },
          {
            text: "websocket",
            link: "/src/case/websocket/"
          }
        ]
      },
      {
        text: "小程序",
        items: [
          {
            text: "mpvue搭建小程序",
            link: "/src/smallProgram/mpvue/"
          }
        ]
      },
      {
        text:"react",
        items:[
          {
            text:"基础知识整理",
            link:"/src/react/"
          }
        ]
      },
      {
        text: "vue",
        items: [
          {
            text: "基础",
            link: "/src/vue/"
          },
          {
            text: "组件示例",
            link: "/src/vue/vueCompont/"
          },
          {
            text: "断点调试",
            link: "/src/vue/debug"
          },
          {
            text: "优雅写法",
            link: "/src/vue/elegant"
          },
          {
            text: "实用骚操作",
            link: "/src/vue/slill.md"
          },
          {
            text: "代码规范",
            link: "/src/vue/standards.md"
          }
        ]
      },
      {
        text: "收藏夹",
        link: "/src/favorites/"
      },
      {
        text: "关于我",
        link: "/src/aboutMe/"
      }
    ],
    sidebar: "auto",
    repo: "/hisey/front-end-doc",
    repoLabel: "gitHub"
  }
};
