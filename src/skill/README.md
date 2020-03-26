# css开发技巧
## 使用vw定制rem自适应布局
1. 要点：移动端使用**rem**布局需要通过JS设置不同屏幕宽高比的**font-size**，结合**vw**单位和calc()可脱离JS的控制。
2. 场景：rem页面布局(不兼容低版本移动端系统)。
3. 兼容：vw、calc()。
``` css
/* 基于UI width=750px DPR=2的页面 */
html {
    font-size: calc(100vw / 7.5);
}
```
### 使用writing-mode排版竖文
**要点**：通过writing-mode调整文本排版方向
**场景**：竖行文字、文言文、诗词
**兼容**：writing-mode
## 使用text-align-last对齐两端文本
**要点**：通过text-align-last:justify设置文本两端对齐
**场景**：未知字数中文对齐
**兼容**：text-align-last
## 使用object-fit规定图像尺寸
**要点**：通过object-fit使图像脱离background-size的约束，使用来标记图像背景尺寸
**场景**：图片尺寸自适应
## 使用overflow-scrolling支持弹性滚动
**要点**：iOS页面非body元素的滚动操作会非常卡(Android不会出现此情况)，通过overflow-scrolling:touch调用Safari原生滚动来支持弹性滚动，增加页面滚动的流畅度
**场景**：iOS页面滚动
**兼容**：iOS自带-webkit-overflow-scrolling
```css
body {
    -webkit-overflow-scrolling: touch;
}
.elem {
    overflow: auto;
}
```
## 使用transform模拟视差滚动
**要点**：通过background-attachment:fixed或transform让多层背景以不同的速度移动，形成立体的运动效果
**场景**：页面滚动、视差滚动文字阴影、视差滚动文字虚影
**兼容**：background-attachment、transform

## 使用filter开启悼念模式
**要点**：通过filter:grayscale()设置灰度模式来悼念某位去世的仁兄或悼念因灾难而去世的人们
**场景**：网站悼念
**兼容**：filter

## 使用::selection改变文本选择颜色
**要点**：通过::selection根据主题颜色自定义文本选择颜色
**场景**：主题化
**兼容**：::selection

## 使用linear-gradient控制背景渐变
**要点**：通过linear-gradient设置背景渐变色并放大背景尺寸，添加背景移动效果
**场景**：主题化、彩虹背景墙
**兼容**：gradient、animation

## 使用caret-color改变光标颜色
*要点*：通过caret-color根据主题颜色自定义光标颜色
*场景*：主题化
*兼容*：caret-color