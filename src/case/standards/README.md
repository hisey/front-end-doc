## 一、代码静态检查工具
### 1.1、使用 eslint 工具对 javascript 代码进行检查
​ eslint 检查的规范继承自 eslint-config-standard 检验规则，具体的规则介绍参照链接：https://cn.eslint.org/docs/rules/ ，这里及以下部分不再重复介绍这些检验规则。

## 1.2、使用 stylelint 工具对 css 样式代码进行检查
​ stylelint 检查的规范继承自 stylelint-config-standard 检验规则，具体的规则介绍参照链接：https://www.npmjs.com/package/stylelint-config-standard ，这里及以下部分不再重复介绍这些检验规则。

## 二、命名
### 2.1、JS 采用 Camel Case 小驼峰式命名
推荐：
```javascript
    studentInfot
```    
### 2.2、避免名称冗余
推荐：
```javascript
const Car = {
  make: "Honda",
  model: "Accord",
  color: "Blue"
};
```
不推荐：
```javascript
const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};
```
### 2.3、CSS 类名采用 BEM 命名规范
推荐：
```javascript
.block__element{} 
.block--modifier{}
```
### 2.4、命名符合语义化
命名需要符合语义化，如果函数命名，可以采用加上动词前缀：

动词|含义
--|--:
can|判断是否可执行某个动作
has|判断是否含有某个值
is|	判断是否为某个值
get	| 获取某个值
set|设置某个值
推荐：
```javascript
//是否可阅读 
function canRead(){ 
   return true; 
} 
//获取姓名 
function getName{
   return this.name 
} 
```
## 三、JS 推荐写法
### 3.1、每个常量都需命名
每个常量应该命名，不然看代码的人不知道这个常量表示什么意思。

推荐：
```javascript
const COL_NUM = 10;
let row = Math.ceil(num/COL_NUM);
```
不推荐：
```javascript
let row = Math.ceil(num/10);
```
 
### 3.2、推荐使用字面量
创建对象和数组推荐使用字面量，因为这不仅是性能最优也有助于节省代码量。

推荐：
```javascript
let obj = {   
     name:'tom',     
     age:15,     
     sex:'男' 
} 
```
不推荐：
```javascript

let obj = {};
obj.name = 'tom';
obj.age = 15;
obj.sex = '男';
```
### 3.3、对象设置默认属性的推荐写法
推荐：
```javascript

const menuConfig = {
  title: "Order",
  // User did not include 'body' key
  buttonText: "Send",
  cancellable: true
};

function createMenu(config) {
  config = Object.assign(
    {
      title: "Foo",
      body: "Bar",
      buttonText: "Baz",
      cancellable: true
    },
    config
  );

  // config now equals: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}

createMenu(menuConfig);
```

不推荐：
```javascript

const menuConfig = {
  title: null,
  body: "Bar",
  buttonText: null,
  cancellable: true
};

function createMenu(config) {
  config.title = config.title || "Foo";
  config.body = config.body || "Bar";
  config.buttonText = config.buttonText || "Baz";
  config.cancellable =
    config.cancellable !== undefined ? config.cancellable : true;
}

createMenu(menuConfig);
```
### 3.4、将对象的属性值保存为局部变量
对象成员嵌套越深，读取速度也就越慢。所以好的经验法则是：如果在函数中需要多次读取一个对象属性，最佳做法是将该属性值保存在局部变量中，避免多次查找带来的性能开销。

推荐：
```javascript

let person = {
    info:{
        sex:'男'
    }
}
function  getMaleSex(){
    let sex = person.info.sex;
    if(sex === '男'){
        console.log(sex)
    }
} 
```
不推荐：
```javascript

let person = {
    info:{
        sex:'男'
    }
}
function  getMaleSex(){
    if(person.info.sex === '男'){
        console.log(person.info.sex)
    }
}
```
### 3.5、字符串转为整型
当需要将浮点数转换成整型时，应该使用Math.floor()或者Math.round()，而不是使用parseInt()将字符串转换成数字。Math是内部对象，所以Math.floor()`其实并没有多少查询方法和调用时间，速度是最快的。

推荐：
```javascript
let num = Math.floor('1.6');
```
不推荐：
```javascript
let num = parseInt('1.6');
```
### 3.6、函数参数
函数参数越少越好，如果参数超过两个，要使用 ES6的解构语法，不用考虑参数的顺序。

推荐：
```javascript
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true
});
```
不推荐：
```javascript
function createMenu(title, body, buttonText, cancellable) {
  // ...
}
```
### 3.7、使用参数默认值
使用参数默认值 替代 使用条件语句进行赋值。

推荐：
```javascript
function createMicrobrewery(name = "Hipster Brew Co.") {
  // ...
}
```
不推荐：
```javascript
function createMicrobrewery(name) {
  const breweryName = name || "Hipster Brew Co.";
  // ...
}
```
### 3.8、最小函数准则
这是一条在软件工程领域流传久远的规则。严格遵守这条规则会让你的代码可读性更好，也更容易重构。如果违反这个规则，那么代码会很难被测试或者重用 。

### 3.9、不要写全局方法
在 JavaScript 中，永远不要污染全局，会在生产环境中产生难以预料的 bug。举个例子，比如你在 Array.prototype 上新增一个 diff 方法来判断两个数组的不同。而你同事也打算做类似的事情，不过他的 diff 方法是用来判断两个数组首位元素的不同。很明显你们方法会产生冲突，遇到这类问题我们可以用 ES2015/ES6 的语法来对 Array 进行扩展。

推荐:
```javascript

class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));        
  }
}
```
不推荐：
```javascript
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
};
```
### 3.10、推荐函数式编程
函数式变编程可以让代码的逻辑更清晰更优雅，方便测试。

推荐：
```javascript
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, {
    name: 'Suzie Q',
    linesOfCode: 1500
  }, {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  }
];
let totalOutput = programmerOutput
  .map(output => output.linesOfCode)
  .reduce((totalLines, lines) => totalLines + lines, 0)
```  
不推荐：
```javascript
 const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, {
    name: 'Suzie Q',
    linesOfCode: 1500
  }, {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  }
];

let totalOutput = 0;

for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}
```

### 3.11、使用多态替换条件语句
为了让代码更简洁易读，如果你的函数中出现了条件判断，那么说明你的函数不止干了一件事情，违反了函数单一原则 ；并且绝大数场景可以使用多态替代

推荐：
```javascript
class Airplane {
  // ...
}
// 波音777
class Boeing777 extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount();
  }
}
// 空军一号
class AirForceOne extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude();
  }
}
// 赛纳斯飞机
class Cessna extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}
```
不推荐：
```javascript

class Airplane {
  // ...

  // 获取巡航高度
  getCruisingAltitude() {
    switch (this.type) {
      case '777':
        return this.getMaxAltitude() - this.getPassengerCount();
      case 'Air Force One':
        return this.getMaxAltitude();
      case 'Cessna':
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }
}
```
### 3.12、定时器是否清除
代码中使用了定时器 setTimeout 和 setInterval，需要在不使用时进行清除。

## 四、SCSS 推荐写法
### 4.1、变量 $ 使用
利用scss中的变量配置，可以进行项目的颜色、字体大小统一更改（换肤），有利于后期项目的维护。

推荐：
```css
$--color-success: #67C23A;
$--color-warning: #E6A23C;
$--color-danger: #F56C6C;
$--color-info: #909399;
```
### 4.2、@import 导入样式文件
scss中的@import规则在生成css文件时就把相关文件导入进来。这意味着所有相关的样式被归纳到了同一个css文件中，而无需发起额外的下载请求，在构建我们自己的组件库时推荐使用。
```css
@import "./base.scss";
@import "./pagination.scss";
@import "./dialog.scss";
@import "./autocomplete.scss";
@import "./dropdown.scss";
@import "./dropdown-menu.scss";
```
### 4.3、局部文件命名的使用
scss局部文件的文件名以下划线开头。这样，scss就不会在编译时单独编译这个文件输出css，而只把这个文件用作导入。

推荐：
### 4.4、父选择器标识符 & 实现BEM 命令规范
### scss的嵌套和父选择器标识符&能解决BEM命名的冗长，且使样式可读性更高。

推荐：
```css
.el-input {
  display: block;
  &__inner {
     text-align: center;
  }
 }
```
### 4.5、@mixin 混合器的使用
mixin混合器用来实现大段样式的重用，减少代码的冗余，且支持传参。
```css
@mixin button-size($padding-vertical, $padding-horizontal, $font-size, $border-radius) {
  padding: $padding-vertical $padding-horizontal;
  font-size: $font-size;
  border-radius: $border-radius;
  &.is-round {
    padding: $padding-vertical $padding-horizontal;
  }
}

  @include m(medium) {
    @include button-size($--button-medium-padding-vertical, $--button-medium-padding-horizontal, $--button-medium-font-size, $--button-medium-border-radius);   
  }

  @include m(small) {
    @include button-size($--button-small-padding-vertical, $--button-small-padding-horizontal, $--button-small-font-size, $--button-small-border-radius);
  }
```
### 4.6、@extend 指令的使用
（1）使用@extend产生 DRY CSS风格的代码（Don't repeat yourself）

（2）@mixin主要的优势就是它能够接受参数。如果想传递参数，你会很自然地选择@mixin而不是@extend

推荐：
```css
.common-mod {
  height: 250px;
  width: 50%;
  background-color: #fff;
  text-align: center;
}

 .show-mod--right {
   @extend .common-mod;
   float: right;
 }

.show-mod--left {
   @extend .common-mod;
}
```
### 4.7、#{} 插值的使用
插值能动态定义类名的名称，当有两个页面的样式类似时，我们会将类似的样式抽取成页面混合器，但两个不同的页面样式的命名名称根据BEM命名规范不能一样，这时我们可使用插值进行动态命名。

推荐：
```css
@mixin home-content($class) {
  .#{$class} {
    position: relative;
    background-color: #fff;
    overflow-x: hidden;
    overflow-y: hidden;

    &--left {
      margin-left: 160px;
    }

    &--noleft {
      margin-left: 0;
    }
  }
}
```
### 4.8、each遍历、map数据类型、@mixin/@include混合器、#{}插值 结合使用
可通过each遍历、map数据类型、@mixin/@include混合器、#{}插值 结合使用，从而减少冗余代码，使代码更精简。

推荐：
```css
$img-list: (
   (xlsimg, $papers-excel),
   (xlsximg, $papers-excel),
   (gifimg, $papers-gif),
   (jpgimg, $papers-jpg),
   (mp3img, $papers-mp3),
   (mp4img, $papers-mp3),
   (docimg, $papers-word),
   (docximg, $papers-word),
   (rarimg, $papers-zip),
   (zipimg, $papers-zip),
   (unknownimg, $papers-unknown)
);

@each $label, $value in $img-list {
  .com-hwicon__#{$label} {
    @include commonImg($value);
  }
}
```
### 4.9、scss 自带函数的应用
scss自带函数的应用，从而进行相关的计算，例如 mix函数的使用如下。
```css
 @include m(text) {
    &:hover,
    &:focus {
      color: mix($--color-white, $--color-primary, $--button-hover-tint-percent);
      border-color: transparent;
      background-color: transparent;
    }

    &:active {
      color: mix($--color-black, $--color-primary, $--button-active-shade-percent);
      border-color: transparent;
      background-color: transparent;
    }
}
```
### 4.10、gulp-sass的使用
gulp-sass插件能实时监测scss代码检查其语法错误并将其编译成css代码，帮助开发人员检查scss语法的准确性，且其是否符合我们的预期，相关配置如下：
```css
gulp.task('gulpsass', function() {
  return gulp.src('src/style/components/hwIcon.scss')
    .pipe(gulpsass().on('error', gulpsass.logError))
    .pipe(gulp.dest('src/style/dest'));
});

gulp.task('watch', function() {
  gulp.watch('src/style/components/hwIcon.scss', ['gulpsass']);
});
```


## 五、团队其它规范
### 5.1、尽量不手动操作 DOM
因为团队现在使用 vue 框架，所以在项目开发中尽量使用 vue 的特性去满足我们的需求，尽量（不到万不得已）不要手动操作DOM，包括：增删改dom元素、以及更改样式、添加事件等。

### 5.2、删除弃用代码
很多时候有些代码已经没有用了，但是没有及时去删除，这样导致代码里面包括很多注释的代码块，好的习惯是提交代码前记得删除已经确认弃用的代码，例如：一些调试的console语句、无用的弃用代码。

### 5.3、保持必要的注释
代码注释不是越多越好，保持必要的业务逻辑注释，至于函数的用途、代码逻辑等，要通过语义化的命令、简单明了的代码逻辑，来让阅读代码的人快速看懂。