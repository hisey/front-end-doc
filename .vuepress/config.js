module.exports = {
  title: '木林',
  description: '个人站点',
  base: '/front-end-doc/',
  port: 4864,
  dest: "./docs",
  themeConfig: {
    nav: [{
      text: '首页',
      link: '/'
    },
    {
      text: "Git指南",
      items: [{
        text: 'Git工作流',
        link: '/src/base/git/flow'
      },
      {
        text: '常用命令行',
        link: '/src/base/git/bash'
      },
      ]
    },
    {
      text: '基础知识',
      items: [{
        text: 'es6代码风格',
        link: '/src/base/codeStyle/'
      },
      {
        text: 'css干货',
        link: '/src/base/cssDoc/'
      },
      {
        text: 'js干货',
        link: '/src/base/jsDoc/'
      },
      {
        text: '弹性盒子布局',
        link: '/src/base/flexbox/'
      },
      ]
    },
    {
      text: "解决方案",
      items: [{
        text: '前后端分离',
        link: '/src/case/webSplit/'
      },
      {
        text: '代码部署',
        link: '/src/case/autoDeploy/'
      },
      ]
    },
    {
      text: '小程序',
      items: [{
        text: 'mpvue搭建小程序',
        link: '/src/smallProgram/mpvue/'
      },],
    },
    {
      text: "vue",
      items: [
        {
          text: '基础',
          link: '/src/vue/'
        },
        {
          text: 'vue组件示例',
          link: '/src/vue/vueCompont/'
        },]
    }, {
      text: "关于我", link: "/src/aboutMe/"
    }
    ],
    sidebar: 'auto',
    repo: '/hisey/front-end-doc',
    repoLabel: 'gitHub',
  }
}