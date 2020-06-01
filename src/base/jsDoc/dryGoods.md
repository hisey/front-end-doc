## 说明

该部分是本人长期积累与面试碰到的一些干货，敬请笑纳！

## 常用的正则表达式

```js
//匹配字母、数字、中文字符
/^([A-Za-z0-9]|[\u4e00-\u9fa5])*$/

//验证邮箱
/^\w+@([0-9a-zA-Z]+[.])+[a-z]{2,4}$/

//验证手机号
/^1[3|5|8|7]\d{9}$/

//验证URL
/^http:\/\/.+\./

//验证身份证号码
/(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/

//匹配中文字符的正则表达式
/[\u4e00-\u9fa5]/

//匹配双字节字符(包括汉字在内)
/[^\x00-\xff]/
```

## js 时间戳、毫秒格式化

```js
function formatDate(now) {
  var y = now.getFullYear();
  var m = now.getMonth() + 1; // 注意js里的月要加1
  var d = now.getDate();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();

  return y + "-" + m + "-" + d + " " + h + ":" + m + ":" + s;
}

var nowDate = new Date(2016, 5, 13, 19, 18, 30, 20);

console.log(nowDate.getTime()); // 获得当前毫秒数: 1465816710020
console.log(formatDate(nowDate));
```

## js 限定字符数（注意：一个汉字算 2 个字符）

```js
<input id="txt" type="text">
//字符串截取
function getByteVal(val, max) {
    var returnValue = '';
    var byteValLen = 0;
    for (var i = 0; i < val.length; i++) {
        if (val[i].match(/[^\x00-\xff]/ig) != null) byteValLen += 2; else byteValLen += 1;
        if (byteValLen > max) break;
        returnValue += val[i];
    }
    return returnValue;
}

$('#txt').on('keyup', function () {
    var val = this.value;
    if (val.replace(/[^\x00-\xff]/g, "**").length > 14) {
        this.value = getByteVal(val, 14);
    }
});
```

## js 判断是否移动端及浏览器内核

```javascript
var browser = {
  versions: function() {
    var u = navigator.userAgent;
    return {
      trident: u.indexOf("Trident") > -1, //IE内核
      presto: u.indexOf("Presto") > -1, //opera内核
      webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
      gecko: u.indexOf("Firefox") > -1, //火狐内核Gecko
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
      android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android
      iPhone: u.indexOf("iPhone") > -1, //iPhone
      iPad: u.indexOf("iPad") > -1, //iPad
      webApp: u.indexOf("Safari") > -1 //Safari
    };
  }
};

if (
  browser.versions.mobile() ||
  browser.versions.ios() ||
  browser.versions.android() ||
  browser.versions.iPhone() ||
  browser.versions.iPad()
) {
  alert("移动端");
}
```

## 将反斜杠转换成斜杠

```javascript
var strurl = "http:\\localhost:64177HomeAccordionIndex";
strurl = strurl.replace("\\\\", "//");
strurl = strurl.replace("\\", "/");
strurl = strurl.replace("\\", "/");
alert(strurl);
```

将会弹出：http://localhost:64177/Home/AccordionIndex

## 已过时间

```javascript
/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime
 * @return {String}
 */
function formatPassTime(startTime) {
  var currentTime = Date.parse(new Date()),
    time = currentTime - startTime,
    day = parseInt(time / (1000 * 60 * 60 * 24)),
    hour = parseInt(time / (1000 * 60 * 60)),
    min = parseInt(time / (1000 * 60)),
    month = parseInt(day / 30),
    year = parseInt(month / 12);
  if (year) return year + "年前";
  if (month) return month + "个月前";
  if (day) return day + "天前";
  if (hour) return hour + "小时前";
  if (min) return min + "分钟前";
  else return "刚刚";
}
```

## 剩余时间

```javascript
/**
 *
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime
 * @return {String}
 */
function formatRemainTime(endTime) {
  var startDate = new Date(); //开始时间
  var endDate = new Date(endTime); //结束时间
  var t = endDate.getTime() - startDate.getTime(); //时间差
  var d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 60 / 60) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  }
  return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}
```

## 异步遍历器 for await…of

```javascript
async function () {
  try {
    for await (const x of createAsyncIterable(['a', 'b'])) {
      console.log(x);
    }
  } catch (e) {
    console.error(e);
  }
}
```

## 取出字符串中括号里的内容

```javascript
/**
 * 取出中括号内的内容
 * @param text
 * @returns {string}
 */
export function getBracketStr(text) {
  let result = "";
  if (isObjEmpty(text)) return result;
  let regex = /\[(.+?)\]/g;
  let options = text.match(regex);
  if (!isObjEmpty(options)) {
    let option = options[0];
    if (!isObjEmpty(option)) {
      result = option.substring(1, option.length - 1);
    }
  }
  return result;
}
```
## String Skill
### 对比时间
::: tip
时间个位数形式需补0
:::
```javascript
const time1 = "2019-02-14 21:00:00";
const time2 = "2019-05-01 09:00:00";
const overtime = time1 > time2;
// overtime => false
```
### 格式化金钱
```javascript
const ThousandNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const money = ThousandNum(20190214);
// money => "20,190,214"
```
### 生成随机ID
```javascript
const RandomId = len =>Math.random().toString(36).substr(3, len);
const id = RandomId(10);
// id => "jg7zpgiqva"
```
### 生成随机HEX色值
```javascript
const RandomColor = () =>"#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
const color = RandomColor();
// color => "#f03665"
```
### 生成星级评分
```javascript
const StartScore = rate =>"★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
const start = StartScore(3);
// start => "★★★"
```
### 操作URL查询参数
```javascript
const params = new URLSearchParams(location.search.replace(/\?/ig, "")); // location.search = "?name=young&sex=male"
params.has("young"); // true
params.get("sex"); // "male"
```
## Number Skill
### 取整

::: tip
代替正数的Math.floor()，代替负数的Math.ceil()
:::
```javascript
const num1 = ~~ 1.69;
const num2 = 1.69 | 0;
const num3 = 1.69 >> 0;
// num1 num2 num3 => 1 1 1
```
### 补零
```javascript
const FillZero = (num, len) => num.toString().padStart(len, "0");
const num = FillZero(169, 5);
// num => "00169"
```
### 转数值

::: tip
只对null、""、false、数值字符串有效
:::
```javascript
const num1 = +null;
const num2 = +"";
const num3 = +false;
const num4 = +"169";
// num1 num2 num3 num4 => 0 0 0 169
```
### 时间戳
```javascript
const timestamp = +newDate("2019-02-14");
// timestamp => 1550102400000
```
### 精确小数
```javascript
const RoundNum = (num, decimal) =>Math.round(num * 10 ** decimal) / 10 ** decimal;
const num = RoundNum(1.69, 1);
// num => 1.7
```
### 判断奇偶
```javascript
const OddEven = num => !!(num & 1) ? "odd" : "even";
const num = OddEven(2);
// num => "even"
```
### 取最小最大值
```javascript
const arr = [0, 1, 2];
const min = Math.min(...arr);
const max = Math.max(...arr);
// min max => 0 2
```
### 生成范围随机数
```javascript
const RandomNum = (min, max) =>Math.floor(Math.random() * (max - min + 1)) + min;
const num = RandomNum(1, 10);
```
## Boolean Skill
### 短路运算符
```javascript
const a = d && 1; // 满足条件赋值：取假运算，从左到右依次判断，遇到假值返回假值，后面不再执行，否则返回最后一个真值
const b = d || 1; // 默认赋值：取真运算，从左到右依次判断，遇到真值返回真值，后面不再执行，否则返回最后一个假值
const c = !d; // 取假赋值：单个表达式转换为true则返回false，否则返回true
```
### 判断数据类型

::: tip
可判断类型：undefined、null、string、number、boolean、array、object、symbol、date、regexp、function、asyncfunction、arguments、set、map、weakset、weakmap
:::
```javascript
function DataType(tgt, type) {
    const dataType = Object.prototype.toString.call(tgt).replace(/\[object (\w+)\]/, "$1").toLowerCase();
    return type ? dataType === type : dataType;
}
DataType("young"); // "string"
DataType(20190214); // "number"
DataType(true); // "boolean"
DataType([], "array"); // true
DataType({}, "array"); // false
```
### 是否为空数组
```javascript
const arr = [];
const flag = Array.isArray(arr) && !arr.length;
// flag => true
```
### 是否为空对象
```javascript
const obj = {};
const flag = DataType(obj, "object") && !Object.keys(obj).length;
// flag => true
```
### 满足条件时执行
```javascript
const flagA = true; // 条件A
const flagB = false; // 条件B
(flagA || flagB) && Func(); // 满足A或B时执行
(flagA || !flagB) && Func(); // 满足A或不满足B时执行
flagA && flagB && Func(); // 同时满足A和B时执行
flagA && !flagB && Func(); // 满足A且不满足B时执行
```
### 为非假值时执行
```javascript
const flag = false; // undefined、null、""、0、false、NaN
!flag && Func();
```
### 数组不为空时执行
```javascript
const arr = [0, 1, 2];
arr.length && Func();
```
### 对象不为空时执行
```javascript
const obj = { a: 0, b: 1, c: 2 };
Object.keys(obj).length && Func();
```
### 函数退出代替条件分支退出
```javascript
if (flag) {
    Func();
    returnfalse;
}
// 换成
if (flag) {
    return Func();
}
switch/case使用区间

const age = 26;
switch (true) {
    caseisNaN(age):
        console.log("not a number");
        break;
    case (age < 18):
        console.log("under age");
        break;
    case (age >= 18):
        console.log("adult");
        break;
    default:
        console.log("please set your age");
        break;
}
```
## Array Skill
### 克隆数组
```javascript
const _arr = [0, 1, 2];
const arr = [..._arr];
// arr => [0, 1, 2]
```
### 合并数组
```javascript
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr = [...arr1, ...arr2];
// arr => [0, 1, 2, 3, 4, 5];
```
### 去重数组
```javascript
const arr = [...new Set([0, 1, 1, null, null])];
// arr => [0, 1, null]
```
### 混淆数组
```javascript
const arr = [0, 1, 2, 3, 4, 5].slice().sort(() =>Math.random() - .5);
// arr => [3, 4, 0, 5, 1, 2]
```
### 清空数组
```javascript
const arr = [0, 1, 2];
arr.length = 0;
// arr => []
```
### 截断数组
```javascript
const arr = [0, 1, 2];
arr.length = 2;
// arr => [0, 1]
```
### 交换赋值
```javascript
let a = 0;
let b = 1;
[a, b] = [b, a];
// a b => 1 0
```
### 过滤空值

::: tip
空值：undefined、null、""、0、false、NaN
:::
```javascript
const arr = [undefined, null, "", 0, false, NaN, 1, 2].filter(Boolean);
// arr => [1, 2]
```
### 异步累计
```javascript
asyncfunction Func(deps) {
    return deps.reduce(async(t, v) => {
        const dep = await t;
        const version = await Todo(v);
        dep[v] = version;
        return dep;
    }, Promise.resolve({}));
}
const result = await Func(); // 需在async包围下使用
```
### 数组首部插入成员
```javascript
let arr = [1, 2]; // 以下方法任选一种
arr.unshift(0);
arr = [0].concat(arr);
arr = [0, ...arr];
// arr => [0, 1, 2]
```
### 数组尾部插入成员
```javascript
let arr = [0, 1]; // 以下方法任选一种
arr.push(2);
arr.concat(2);
arr[arr.length] = 2;
arr = [...arr, 2];
// arr => [0, 1, 2]
```
### 统计数组成员个数
```javascript
const arr = [0, 1, 1, 2, 2, 2];
const count = arr.reduce((t, v) => {
	t[v] = t[v] ? ++t[v] : 1;
	return t;
}, {});
// count => { 0: 1, 1: 2, 2: 3 }
```
### 解构数组成员嵌套
```javascript
const arr = [0, 1, [2, 3, [4, 5]]];
const [a, b, [c, d, [e, f]]] = arr;
// a b c d e f => 0 1 2 3 4 5
```
### 解构数组成员别名
```javascript
const arr = [0, 1, 2];
const { 0: a, 1: b, 2: c } = arr;
// a b c => 0 1 2
```
### 解构数组成员默认值
```javascript
const arr = [0, 1, 2];
const [a, b, c = 3, d = 4] = arr;
// a b c d => 0 1 2 4
```
### 获取随机数组成员
```javascript
const arr = [0, 1, 2, 3, 4, 5];
const randomItem = arr[Math.floor(Math.random() * arr.length)];
// randomItem => 1
```
### 创建指定长度数组
```javascript
const arr = [...new Array(3).keys()];
// arr => [0, 1, 2]
```
### 创建指定长度且值相等的数组
```javascript
const arr = newArray(3).fill(0);
// arr => [0, 0, 0]
```
### reduce代替map和filter
```javascript
const _arr = [0, 1, 2];

// map
const arr = _arr.map(v => v * 2);
const arr = _arr.reduce((t, v) => {
    t.push(v * 2);
    return t;
}, []);
// arr => [0, 2, 4]

// filter
const arr = _arr.filter(v => v > 0);
const arr = _arr.reduce((t, v) => {
    v > 0 && t.push(v);
    return t;
}, []);
// arr => [1, 2]

// map和filter
const arr = _arr.map(v => v * 2).filter(v => v > 2);
const arr = _arr.reduce((t, v) => {
    v = v * 2;
    v > 2 && t.push(v);
    return t;
}, []);
// arr => [4]
```
## Object Skill

### 克隆对象
```javascript
const _obj = { a: 0, b: 1, c: 2 }; // 以下方法任选一种
const obj = { ..._obj };
const obj = JSON.parse(JSON.stringify(_obj));
// obj => { a: 0, b: 1, c: 2 }
```
### 合并对象
```javascript
const obj1 = { a: 0, b: 1, c: 2 };
const obj2 = { c: 3, d: 4, e: 5 };
const obj = { ...obj1, ...obj2 };
// obj => { a: 0, b: 1, c: 3, d: 4, e: 5 }
```
### 对象字面量

::: tip
获取环境变量时必用此方法，用它一直爽，一直用它一直爽
:::
```javascript
const env = "prod";
const link = {
    dev: "Development Address",
    test: "Testing Address",
    prod: "Production Address"
}[env];
// link => "Production Address"
```
### 对象变量属性
```javascript
const flag = false;
const obj = {
    a: 0,
    b: 1,
    [flag ? "c" : "d"]: 2
};
// obj => { a: 0, b: 1, d: 2 }
```
### 创建纯空对象
```javascript
const obj = Object.create(null);
Object.prototype.a = 0;
// obj => {}
```
### 删除对象无用属性
```javascript
const obj = { a: 0, b: 1, c: 2 }; // 只想拿b和c
const { a, ...rest } = obj;
// rest => { b: 1, c: 2 }
```
### 解构对象属性嵌套
```javascript
const obj = { a: 0, b: 1, c: { d: 2, e: 3 } };
const { c: { d, e } } = obj;
// d e => 2 3
```
### 解构对象属性别名
```javascript
const obj = { a: 0, b: 1, c: 2 };
const { a, b: d, c: e } = obj;
// a d e => 0 1 2
```
### 解构对象属性默认值
```javascript
const obj = { a: 0, b: 1, c: 2 };
const { a, b = 2, d = 3 } = obj;
// a b d => 0 1 3
```
## Function Skill

### 函数自执行
```javascript
const Func = function() {}(); // 常用

(function() {})(); // 常用
(function() {}()); // 常用
[function() {}()];

+ function() {}();
- function() {}();
~ function() {}();
! function() {}();

newfunction() {};
newfunction() {}();
voidfunction() {}();
typeoffunction() {}();
deletefunction() {}();

1, function() {}();
1 ^ function() {}();
1 > function() {}();
```
### 隐式返回值

::: tip
只能用于单语句返回值箭头函数，如果返回值是对象必须使用()包住
:::
```javascript
const Func = function(name) {
    return"I Love " + name;
};
// 换成
const Func = name =>"I Love " + name;
```
### 一次性函数

:::warning
适用于运行一些只需执行一次的初始化代码
:::
```javascript
function Func() {
    console.log("x");
    Func = function() {
        console.log("y");
    }
}
```
### 惰性载入函数

::: tip
函数内判断分支较多较复杂时可大大节约资源开销
:::
```javascript
function Func() {
    if (a === b) {
        console.log("x");
    } else {
        console.log("y");
    }
}
// 换成
function Func() {
    if (a === b) {
        Func = function() {
            console.log("x");
        }
    } else {
        Func = function() {
            console.log("y");
        }
    }
    return Func();
}
```
### 检测非空参数
```javascript
function IsRequired() {
    thrownewError("param is required");
}
function Func(name = IsRequired()) {
    console.log("I Love " + name);
}
Func(); // "param is required"
Func("You"); // "I Love You"
```
### 字符串创建函数
```javascript
const Func = newFunction("name", "console.log(\"I Love \" + name)");
```
### 优雅处理错误信息
```javascript
try {
    Func();
} catch (e) {
    location.href = "https://stackoverflow.com/search?q=[js]+" + e.message;
}
```
### 优雅处理Async/Await参数
```javascript
function AsyncTo(promise) {
    return promise.then(data => [null, data]).catch(err => [err]);
}
const [err, res] = await AsyncTo(Func());
```
### 优雅处理多个函数返回值
```javascript
function Func() {
    returnPromise.all([
        fetch("/user"),
        fetch("/comment")
    ]);
}
const [user, comment] = await Func(); // 需在async包围下使用
```
## DOM Skill
### 显示全部DOM边框

::: tip
调试页面元素边界时使用
:::
```javascript
[].forEach.call($$("*"), dom => {
    dom.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
});
```
### 自适应页面

::: tip
页面基于一张设计图但需做多款机型自适应，元素尺寸使用rem进行设置
:::
```javascript
function AutoResponse(width = 750) {
    const target = document.documentElement;
    target.clientWidth >= 600
        ? (target.style.fontSize = "80px")
        : (target.style.fontSize = target.clientWidth / width * 100 + "px");
}
```
### 过滤XSS
```javascript
function FilterXss(content) {
    let elem = document.createElement("div");
    elem.innerText = content;
    const result = elem.innerHTML;
    elem = null;
    return result;
}
```
### 存取LocalStorage

::: tip
反序列化取，序列化存
:::
```javascript
const love = JSON.parse(localStorage.getItem("love"));
localStorage.setItem("love", JSON.stringify("I Love You"));
```