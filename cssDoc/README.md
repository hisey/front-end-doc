## 说明
该部分是本人长期积累与面试碰到的一些干货，敬请笑纳！

## 布局
### 水平垂直居中
```html
<div class="box">
    <div class="content">
    </div>
</div>
```
```css
.box {
    background-color: #FF8C00;
    width: 300px;
    height: 300px;
    display: flex;//flex布局
    justify-content: center;//使子项目水平居中
    align-items: center;//使子项目垂直居中
}
.content {
    background-color: #F00;
    width: 100px;
    height: 100px;
}
```
<img :src="$withBase('/center.png')" style="height:200px;width:200px">  
<!-- <p class="warning">
Internet Explorer(甚至 IE8 beta)中无效
<p>   -->
### 垂直居中

```html
 <div class="wrapper">  
    <div class="cell">
        <div class="content">Content goes here</div>
    </div>
</div>  
```     
```css
.wrapper {
    display: table;
}
.cell {
    display: table-cell;
    vertical-align: middle;
}
```
<!-- <p class="warning">
Internet Explorer(甚至 IE8 beta)中无效
<p>    -->

### 多元素水平居中

```html
 <div class="main">
     <div>A</div>
     <div>B</div>
     <div>C</div>
     <div>D</div>
 </div>
```
```css
main{
  text-align:center;
}

div{
  display:inline-block;
  *display:inline;/*hack IE*/
  *zoom:1;/*hack IE*/
  background-color:#333;
  color:#fff;
  padding:20px;
}
```
<img  :src="$withBase('/hr-center.png')" >

### 垂直居中
```css
.verticalcenter{
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}
```
## 文本
### 单行省略
```css
.div{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
```
### 多行省略
```css
.div{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
} 
```
### 内容垂直居中
```css
 .container {
    min-height: 6.5em;
    display: table-cell;
    vertical-align: middle;
}
```
### 常见单位
1.px：绝对单位，页面按精确像素展示

2.em：相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算（浏览器默认字体是16px），整个页面内1em不是一个固定的值。

3.rem：相对单位，可理解为”root em”, 相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+支持。

4.vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%。

5.vh：viewpoint height，视窗高度，1vh等于视窗高度的1%。

6.vmin：vw和vh中较小的那个。

7.vmax：vw和vh中较大的那个。

### 公共样式（common.scss）

```css
body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input, select, figure, figcaption, {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: normal;
    font-family: "Microsoft Yahei";
    box-sizing: border-box;
    -webkit-tap-highlight-color:transparent;
    -webkit-font-smoothing: antialiased;
    &:hover{
        outline: none;
    }
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
::-webkit-scrollbar  
{  
    width: 0px;  
    height: 0px;  
    background-color: #F5F5F5;  
}  
  
/*定义滚动条轨道 内阴影+圆角*/  
::-webkit-scrollbar-track  
{  
    -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0);  
    border-radius: 10px;  
    background-color: #F5F5F5;  
}  
  
/*定义滑块 内阴影+圆角*/  
::-webkit-scrollbar-thumb  
{  
    border-radius: 10px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: #555;  
}  

input[type="button"], input[type="submit"], input[type="search"], input[type="reset"] {
    -webkit-appearance: none;
}

textarea { -webkit-appearance: none;}   

html,body{
    height: 100%;
    width: 100%;
    background-color: #F5F5F5;
}


.clear:after{
    content: '';
    display: block;
    clear: both;
}

.clear{
    zoom:1;
}

.back_img{
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.margin{
    margin: 0 auto;
}

.left{
    float: left;
}

.right{
    float: right;
}

.hide{
    display: none;
}

.show{
    display: block;
}

.ellipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.paddingTop{
    padding-top: 1.95rem;
}

@keyframes backOpacity{
   0%   { opacity: 1 }
   25%  { opacity: .5 }
   50%  { opacity: 1 }
   75%  { opacity: .5 }
   100% { opacity: 1 }
}

.animation_opactiy{
    animation: backOpacity 2s ease-in-out infinite;
}
```

### 一些mixin

```css
$blue: #3190e8;  
$bc: #e4e4e4;
$fc:#fff;

// 背景图片地址和大小
@mixin bis($url) { 
	background-image: url($url);
	background-repeat: no-repeat;
	background-size: 100% 100%;
}

@mixin borderRadius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    -o-border-radius: $radius;
    border-radius: $radius;
}
//定位全屏
@mixin allcover{
	position:absolute;
	top:0;
	right:0;
}

//定位上下左右居中
@mixin center {  
	position: absolute;
	top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

//定位上下居中
@mixin ct {  
	position: absolute;
	top: 50%;
    transform: translateY(-50%);
}

//定位上下居中
@mixin cl {  
	position: absolute;
	left: 50%;
    transform: translateX(-50%);
}

//宽高
@mixin wh($width, $height){
	width: $width;
	height: $height;
}

//字体大小、行高、字体
@mixin font($size, $line-height, $family: 'Microsoft YaHei') {  
	font: #{$size}/#{$line-height} $family;
}

//字体大小，颜色
@mixin sc($size, $color){
	font-size: $size;
	color: $color;
}

//flex 布局和 子元素 对其方式
@mixin fj($type: space-between){
	display: flex;
	justify-content: $type;

}
```

