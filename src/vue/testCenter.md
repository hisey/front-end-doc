### v-html中加过滤器
```javascript
filters：{
 msg：function(msg){
  return msg.replace(/\n/g，"<br>")
 }
}，  　　
data：{
 content："XXXX"
}
<div v-html="$options.filters.msg(content)"></div>
```
### vue动态设置img的src
```javascript
<img class="logo" :src="logo" alt="公司logo">
data() {
  return {
    logo:require("./../assets/images/logo.png"),
  };
}
```
### 跟keep-alive有关的生命周期
activated和deactivated两个生命周期函数  
1.activated：当组件激活时，钩子触发的顺序是created->mounted->activated  
2.deactivated: 组件停用时会触发deactivated，当再次前进或者后退的时候只触发activated  
### 强制刷新组件
```javascript
<button @click="reload()">刷新当前组件</button>
methods: {
  reload() {
    this.$forceUpdate()
  }
}
```
### 优化首页的加载速度
① 第三方js库按CDN引入（一、cdn引入 二、去掉第三方库引入的import 三、把第三方库的js文件从打包文件里去掉）  
② vue-router路由懒加载  
③ 压缩图片资源  
④ 静态文件本地缓存  
http缓存：推荐网站：https://www.cnblogs.com/chinajava/p/5705169.html  
service worker离线缓存:，缺点：需要在HTTPS站点下，推荐：http://lzw.me/a/pwa-service-worker.html  

### 缓存当前的组件,缓存后更新
```javascript
<keep-alive>
    <router-view></router-view>
</keep-alive>
<!-- 这里是需要keepalive的 -->
<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<!-- 这里不会被keepalive -->
<router-view v-if="!$route.meta.keepAlive"></router-view>
{
  path: '',
  name: '',
  component: ,
  meta: {keepAlive: true} // 这个是需要keepalive的
},
{
  path: '',
  name: '',
  component: ,
  meta: {keepAlive: false} // 这是不会被keepalive的
}
```
如果缓存的组件想要清空数据或者执行初始化方法，在加载组件的时候调用activated钩子函数，如下：  
```javascript
activated: function () {
    this.data = '';
}
```
### 
