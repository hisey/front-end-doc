module.exports = {
    title: 'hisey个人站点',
    description: '算是闲谈吧',
    base:'/front-end-doc/doc/',
    port:4864,
    dest:"./doc",
    themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: 'es6代码风格', link: '/codeStyle/' },
          { text: 'css干货', link: '/cssDoc/' },
          { text: 'js干货', link: '/jsDoc/' },
          { text: '前后端分离解决方案', link: '/webSplit/' },
		  { text: 'mpvue搭建小程序', link: '/mpvue/' },
		  { text: 'vue组件示例', link: '/vueCompont/' },
        ],
        sidebar: 'auto',
        repo: '/hisey/front-end-doc',
        repoLabel: 'gitHub',
      }
}