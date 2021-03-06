# Vue 实用技巧

在Vue的使用过程中会遇到各种场景，当普通使用时觉得没什么，但是或许优化一下可以更高效更优美地进行开发。下面有一些我在日常开发的时候用到的小技巧。
## 1. 多图表resize事件去中心化
### 1.1 一般情况
有时候我们会遇到这样的场景，一个组件中有几个图表，在浏览器 resize 的时候我们希望图表也进行 resize，因此我们会在 父容器组件中写：
```javascript
mounted() {
  setTimeout(() => window.onresize = () => {
    this.$refs.chart1.chartWrapperDom.resize()
    this.$refs.chart2.chartWrapperDom.resize()
    // ... 
  }, 200)
destroyed() { window.onresize = null }
```
这样子图表组件如果跟父容器组件不在一个页面，子组件的状态就被放到父组件进行管理。为了维护方便，我们自然希望子组件的事件和状态由自己来维护，这样在添加删除组件的时候就不需要去父组件挨个修改。

### 1.2 优化

这里使用了 lodash 的节流 throttle 函数，也可以自己实现，这篇文章也有节流的实现可以参考一下。以 Echarts 为例，在每个图表组件中：
```javascript
computed: {
  /**
   * 图表DOM
   */
  chartWrapperDom() {
    const dom = document.getElementById('consume-analy-chart-wrapper')
    return dom && Echarts.init(dom)
  },
  /**
   * 图表resize节流，这里使用了lodash，也可以自己使用setTimout实现节流
   */
  chartResize() {
    return _.throttle(() => this.chartWrapperDom && this.chartWrapperDom.resize(), 400)
  }
},
mounted() {
  window.addEventListener('resize', this.chartResize)
},
destroyed() {
  window.removeEventListener('resize', this.chartResize)
}
```
### 1.3 再次优化

感谢 @JserWang 的提醒，这里因为多个 chart 实例都使用同一套初始化逻辑，可以使用 extends 来考虑复用，因此我想到了 Vue 提供的 Mixins，所以我在这里做了点优化，可以让每个同类型的 chart 组件更优雅一点，新建一个 mixin.js 文件：
```javascript
import Echarts from 'echarts'
import _ from 'lodash'

export default {
  computed: {
    /* 图表DOM */
    $_chartMixin_chartWrapperDom() {
      const dom = document.getElementById(this.thisDomId)
      return dom && Echarts.init(dom)
    },

    /** 图表resize节流，这里使用了lodash，也可以自己使用setTimout实现节流 */
    $_chartMixin_chartResize() {
      return _.throttle(() => this.$_chartMixin_chartWrapperDom.resize(), 400)
    }
  },

  methods: {
    /* 图表初始化 */
    $_chartMixin_initChart() {
      this.$_chartMixin_chartWrapperDom.setOption({ /* options */ })
  },

  mounted() {
    this.$_chartMixin_initChart()
    window.addEventListener('resize', this.$_chartMixin_chartResize)
  },

  destroyed() {
    window.removeEventListener('resize', this.$_chartMixin_chartResize)
  }
}
``` 
然后在每个 chart 组件中：
```javascript
<script type='text/javascript'>
import ChartMixin from './mixin'
export default {
  mixins: [ChartMixin],
  data() {
    return {
      thisDomId: 'consume-analy-chart-wrapper'
    }
  }
}
</script>
```
这样就可以在每个图表组件中混入之前在 mixin.js 中定义的 resize 事件逻辑，且自动初始化，并在 destroyed 的时候自动销毁事件。

当然可以进一步优化一下，比如一个页面有多个图表的话，上面的实现就力有不逮了，这里需要重构一下，具体代码可以参照 chartInitMixin - GitHub 的实现。

## 2. 全局过滤器注册
### 2.1 一般情况
官方注册过滤器的方式：
```javascript
export default {
  data () { return {} },
  filters:{
    orderBy (){
      // doSomething
    },
    uppercase () {
      // doSomething
    }
  }
}
```
但是对我们做项目来说，大部分的过滤器是要全局使用的，不会每每用到就在组件里面去写，抽成全局的会更好些。官方注册全局的方式：
```javascript
// 注册
Vue.filter('my-filter', function (value) {
  // 返回处理后的值
})
// getter，返回已注册的过滤器
var myFilter = Vue.filter('my-filter')
```
但是分散写的话不美观，因此可以抽出成单独文件。

### 2.2 优化
我们可以抽出到独立文件，然后使用 Object.keys 在 main.js 入口统一注册：
/src/common/filters.js
```javascript
let dateServer = value => value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3') 

export { dateServer }
```
```
/src/main.js
```
```javascript
import * as custom from './common/filters/custom'
Object.keys(custom).forEach(key => Vue.filter(key, custom[key]))
```
然后在其他的 .vue 文件中就可愉快地使用这些我们定义好的全局过滤器了。
```javascript
<template>
  <section class="content">
    <p>{{ time | dateServer }}</p> <!-- 2016-01-01 -->
  </section>
</template>
<script>
  export default {
    data () {
      return {
        time: 20160101
      }
    }
  }
</script>
```
## 3. 全局组件注册
### 3.1 一般情况
需要使用组件的场景：
```javascript
<template>
    <BaseInput  v-model="searchText"  @keydown.enter="search"/>
    <BaseButton @click="search">
        <BaseIcon name="search"/>
    </BaseButton>
</template>
<script>
    import BaseButton from './baseButton'
    import BaseIcon from './baseIcon'
    import BaseInput from './baseInput'
    export default {
      components: { BaseButton, BaseIcon, BaseInput }
    }
</script>
```
我们写了一堆基础 UI 组件，然后每次我们需要使用这些组件的时候，都得先 import，然后声明 components，很繁琐，这里可以使用统一注册的形式。

### 3.2 优化
我们需要借助一下神器 webpack，使用 require.context() 方法来创建自己的模块上下文，从而实现自动动态 require 组件。这个方法需要 3 个参数：要搜索的文件夹目录、是否还应该搜索它的子目录、以及一个匹配文件的正则表达式。我们在 components 文件夹添加一个叫 componentRegister .js 的文件，在这个文件里借助 webpack 动态将需要的基础组件统统打包进来。
```
/src/components/ componentRegister .js
```
```javascript
import Vue from 'vue'
/**
 * 首字母大写
 * @param str 字符串
 * @example heheHaha
 * @return {string} HeheHaha
 */
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 对符合'xx/xx.vue'组件格式的组件取组件名
 * @param str fileName
 * @example abc/bcd/def/basicTable.vue
 * @return {string} BasicTable
 */
function validateFileName(str) {
  return /^\S+\.vue$/.test(str) &&
    str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
}

const requireComponent = require.context('./', true, /\.vue$/)

// 找到组件文件夹下以.vue命名的文件，如果文件名为index，那么取组件中的name作为注册的组件名
requireComponent.keys().forEach(filePath => {
  const componentConfig = requireComponent(filePath)
  const fileName = validateFileName(filePath)
  const componentName = fileName.toLowerCase() === 'index'
    ? capitalizeFirstLetter(componentConfig.default.name)
    : fileName
  Vue.component(componentName, componentConfig.default || componentConfig)
})
```
这里文件夹结构：
```
components
│ componentRegister.js
├─BasicTable
│ BasicTable.vue
├─MultiCondition
│ index.vue
```
这里对组件名做了判断，如果是 index 的话就取组件中的 name 属性处理后作为注册组件名， 所以最后注册的组件为：multi-condition、 basic-table 最后我们在 main.js 中 import 'components/ componentRegister .js'，然后我们就可以随时随地使用这些基础组件，无需手动引入了。

## 4. 不同路由的组件复用
### 4.1 场景还原
当某个场景中 vue-router从/post-page/a，跳转到 /post-page/b。然后我们惊人地发现，页面跳转后数据竟然没更新？！原因是 vue-router "智能地"发现这是同一个组件，然后它就决定要复用这个组件，所以你在 created 函数里写的方法压根就没执行。通常的解决方案是监听 $route 的变化来初始化数据，如下：
```javascript
data() {
  return {
    loading: false,
    error: null,
    post: null
  }
},
watch: {
  '$route': {        // 使用watch来监控是否是同一个路由
    handler: 'resetData',
    immediate: true
  }
},
methods: {
  resetData() {
    this.loading = false
    this.error = null
    this.post = null
    this.getPost(this.$route.params.id)
  },
  getPost(id){ }
}
```
### 4.2 优化

为了实现这样的效果可以给 router-view添加一个不同的 key，这样即使是公用组件，只要 url 变化了，就一定会重新创建这个组件。
```
<router-view :key="$route.fullpath"></router-view>
```
还可以在其后加 ++newDate()时间戳，保证独一无二。

感谢网友 @rolitter 的提醒，如果组件被放在 "keep-Alive"中的话，可以把获取新数据的方法放在 activated 钩子，代替原来在 created、mounted 钩子中获取数据的任务。

## 5. 组件事件属性穿透
### 5.1 一般情况
```javascript
// 父组件

<BaseInput :value="value"
           label="密码"
           placeholder="请填写密码"
           @input="handleInput"
           @focus="handleFocus">
</BaseInput>
```
```javascript
// 子组件
<template>
  <label>
    {{ label }}
    <input :value=" value"
           :placeholder="placeholder"
           @focus="$emit('focus', $event)"
           @input="$emit('input', $event.target.value)">
  </label>
</template>
```
### 5.2 优化
Vue 的组件实例中的 $props、 $attrs给我们提供了很大的便利，特别是父子组件传值的时候。

（1）每一个从父组件传到子组件的 props，我们都得在子组件的 Props 中显式的声明才能使用。这样一来，我们的子组件每次都需要申明一大堆 props，这里我们知道 v-bind 是可以传对象 的，可以在 vm.$props 中拿到所有父组件props的值 v-bind="$props"。
```javascript
<input  v-bind="$props" 
       @input="$emit('input', $event.target.value)">
```       
（2）类似 placeholer 这种 dom 原生的 property 可以使用 $attrs 直接从父传到子，无需声明。方法如下：
```javascript
<input :value="value"
       v-bind="$attrs"
       @input="$emit('input', $event.target.value)">
```
$attrs 包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定，并且可以通过 v-bind="$attrs"传入内部组件。

（3） 注意到子组件的 @focus="$emit('focus', $event)"其实什么都没做，只是把 event 传回给父组件而已，那其实和上面类似，完全没必要显式地申明：
```javascript
<input :value="value"
       v-bind="$attrs"
       v-on="listeners"/>

computed: {
  listeners() {
    return {
      ...this.$listeners,
      input: event =>
        this.$emit('input', event.target.value)
    }
  }
}
```
$listeners包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。

需要注意的是，由于我们 input 并不是 BaseInput 这个组件的根节点，而默认情况下父作用域的不被认作 props的特性绑定将会“回退”且作为普通的 HTML 特性应用在子组件的根元素上。所以我们需要设置 inheritAttrs:false，这些默认行为将会被去掉，上面优化才能成功。

## 6. 路由根据开发状态懒加载
### 6.1 一般情况
一般我们在路由中加载组件的时候：
```javascript
import Login from '@/views/login.vue'

export default new Router({
  routes: [{ path: '/login', name: '登陆', component: Login}]
})
```
当你需要懒加载 lazy-loading 的时候，需要一个个把 routes 的 component 改为 ()=>import('@/views/login.vue')，甚为麻烦。

当你的项目页面越来越多之后，在开发环境之中使用 lazy-loading 会变得不太合适，每次更改代码触发热更新都会变得非常的慢。所以建议只在生成环境之中使用路由懒加载功能。

### 6.2 优化
根据 Vue 的异步组件和 Webpack 的代码分割功能可以轻松实现组件的懒加载，如：
```javascript
const Foo = () => import('./Foo.vue')
```
在区分开发环境与生产环境时，可以在路由文件夹下分别新建两个文件：

_import_production.js
```javascript
module.exports = file => () => import('@/views/' + file + '.vue')
```
_import_development.js (这种写法 vue-loader版本至少v13.0.0以上)
```javascript
module.exports = file => require('@/views/' + file + '.vue').default
```
而在设置路由的 router/index.js文件中：
```javascript
const _import = require('./_import_' + process.env.NODE_ENV)
export default new Router({
  routes: [{ path: '/login', name: '登陆', component: _import('login/index') }]
})
```
这样组件在开发环境下就是非懒加载，生产环境下就是懒加载的了。

## 7. vue-loader小技巧
vue-loader 是处理 *.vue 文件的 webpack loader。它本身提供了丰富的 API，有些 API 很实用但很少被人熟知。例如接下来要介绍的 preserveWhitespace 和 transformToRequire

### 7.1 用 preserveWhitespace 减少文件体积
有些时候我们在写模板时不想让元素和元素之间有空格，可能会写成这样：
```html
<ul>
  <li>1111</li><li>2222</li><li>333</li>
</ul>
```
当然还有其他方式，比如设置字体的 font-size:0，然后给需要的内容单独设置字体大小，目的是为了去掉元素间的空格。其实我们完全可以通过配置 vue-loader 实现这一需求。
```javascript
{
  vue: {
    preserveWhitespace: false
  }
}
```
它的作用是阻止元素间生成空白内容，在 Vue 模板编译后使用 _v(" ") 表示。如果项目中模板内容多的话，它们还是会占用一些文件体积的。例如 Element 配置该属性后，未压缩情况下文件体积减少了近 30Kb。

### 7.2 使用 transformToRequire 再也不用把图片写成变量了
以前在写 Vue 的时候经常会写到这样的代码：把图片提前 require 传给一个变量再传给组件。
```javascript
<template>
  <div>
    <avatar :default-src="DEFAULT_AVATAR"></avatar>
  </div>
</template>
<script>
  export default {
    created () {
      this.DEFAULT_AVATAR = require('./assets/default-avatar.png')
    }
  }
</script>
```
其实通过配置 transformToRequire 后，就可以直接配置，这样 vue-loader 会把对应的属性自动 require 之后传给组件。
```javascript
{
  vue: {
    transformToRequire: {
      avatar: ['default-src']
    }
  }
}
```
于是我们代码就可以简化不少。
```javascript
<template>
  <div>
    <avatar default-src="./assets/default-avatar.png"></avatar>
  </div>
</template>
```
在 vue-cli 的 webpack 模板下，默认配置是：
```javascript
transformToRequire: {
  video: ['src', 'poster'],
  source: 'src',
  img: 'src',
  image: 'xlink:href'
}
```
可以举一反三进行一下类似的配置。

vue-loader 还有很多实用的 API 例如最近加入的 自定义块，感兴趣的各位可以去文档里找找看。

## 8. render 函数
在某些场景下你可能需要 render 渲染函数带来的完全编程能力来解决不太容易解决的问题，特别是要动态选择生成标签和组件类型的场景。

### 8.1 动态标签
#### （1）一般情况
比如根据 props 来生成标签的场景。
```javascript
<template>
  <div>
    <div v-if="level === 1"> <slot></slot> </div>
    <p v-else-if="level === 2"> <slot></slot> </p>
    <h1 v-else-if="level === 3"> <slot></slot> </h1>
    <h2 v-else-if="level === 4"> <slot></slot> </h2>
    <strong v-else-if="level === 5"> <slot></slot> </stong>
    <textarea v-else-if="level === 6"> <slot></slot> </textarea>
  </div>
</template>
```
其中 level 是 data 中的变量，可以看到这里有大量重复代码，如果逻辑复杂点，加上一些绑定和判断就更复杂了，这里可以利用 render 函数来对要生成的标签加以判断。

#### （2）优化
使用 render 方法根据参数来生成对应标签可以避免上面的情况。
```javascript
<template>
  <div>
    <child :level="level">Hello world!</child>
  </div>
</template>

<script type='text/javascript'>
  import Vue from 'vue'
  Vue.component('child', {
    render(h) {
      const tag = ['div', 'p', 'strong', 'h1', 'h2', 'textarea'][this.level]
      return h(tag, this.$slots.default)
    },
    props: {
      level: {  type: Number,  required: true  } 
    }
  })   
  export default {
    name: 'hehe',
    data() { return { level: 3 } }
  }
</script>
```
示例可以查看 CodePen（https://codepen.io/SHERlocked93/pen/mLEJPE）。
8.2 动态组件
当然 render 函数还有很多用法，比如要使用动态组件，除了使用 :is 之外也可以使用 render 函数。
```javascript
<template>
  <div>
    <button @click='level = 0'>嘻嘻</button>
    <button @click='level = 1'>哈哈</button>
    <hr>
    <child :level="level"></child>
  </div>
</template>

<script type='text/javascript'>
  import Vue from 'vue'
  import Xixi from './Xixi'
  import Haha from './Haha'
  Vue.component('child', {
    render(h) {
      const tag = ['xixi', 'haha'][this.level]
      return h(tag, this.$slots.default)
    },
    props: { level: { type: Number, required: true } },
    components: { Xixi, Haha }
  })
  export default {
    name: 'hehe',
    data() { return { level: 0 } }
  }
</script>
```
