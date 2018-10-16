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
        text: '基础知识',
        items: [{
            text: 'es6代码风格',
            link: '/base/codeStyle/'
          },
          {
            text: 'css干货',
            link: '/base/cssDoc/'
          },
          {
            text: 'js干货',
            link: '/base/jsDoc/'
          },
          {
            text: '弹性盒子布局',
            link: '/base/flexbox/'
          },
        ]
      },
      {
        text: "解决方案",
        items: [{
          text: '前后端分离',
          link: '/case/webSplit/'
        }, ]
      },
      {
        text: '小程序',
        items: [{
          text: 'mpvue搭建小程序',
          link: '/small-program/mpvue/'
        }, ],
      },
      {
        text: "vue",
        items: [
          {
            text: '基础',
            link: '/vue/'
          }, 
          {
          text: 'vue组件示例',
          link: '/vue/vueCompont/'
        }, ]
      },{
        text:"关于我",link:"/aboutMe/"
      }
    ],
    sidebar: 'auto',
    repo: '/hisey/front-end-doc',
    repoLabel: 'gitHub',
  }
}