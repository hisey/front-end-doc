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
