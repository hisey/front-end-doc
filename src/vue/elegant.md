# vue 优雅写法

## 绑定 Class

不推荐

```html
<div
  class="status"
  :class="{cancel:item.canceled,wait:item.statusType=='3'||item.statusType=='4'||item.statusType=='5'||item.statusType=='6',success:item.statusType=='7'}"
></div>
```

推荐

```js
computed: {
        myClass:function () {
          return {
              wait:[3,4,5,6].indexOf(this.item.statusType)>-1,
              success:this.item.statusType===7,
              cancle:this.item.cancled
          }
        }
     }
```

## 利用 class 封装代码

主要是抽离代码逻辑，使得代复用性加强。同时，class 的形式会让结构变得更加清晰，譬如

```js
class MyForm {
  /**
   * @func defaultLimit - 默认表单输入限制条件, value 为空时返回 true
   * @param {Number} type - 代表表单类型的节点！
   * @param {String} value - 需要被验证的值
   * @return Boolean
   *
   * 根据 type 属性对输出进行验证
   * 1 0≤x≤50 整数
   * 2 -1000≤x≤2000 整数
   * 3 1≤x 整数
   * 4 0≤x≤10
   */
  static defaultLimit(type, value) {
    const typeLimitMap = {
      1: /^(\d|[1-4]\d|50)$/g,
      2: /^-?(\d{1,3}|1000)$|^(-|1\d{3}|2000)$/,
      3: /^[1-9]\d*$/,
      4: value => value <= 10 && value >= 0 // 0≤ x ≤ 10 可以为小数
    };
    if (!typeLimitMap[type] || !value) return true;
    if (typeof typeLimitMap[type] === "function")
      return typeLimitMap[type](value);
    else return typeLimitMap[type].test(value);
  }

  /**
   * @func translateLimit - 转换操作符
   * @param {String} operator - 运算符
   * @param {*} value - 被匹配的值
   * @param {*} compareValue - 匹配的值
   * @return Boolean
   * 'eq': '='
   * 'ne': '≠'
   * 'gt': '>'
   * 'lt': '<'
   * 'ge': '≥'
   * 'le': '≤'
   */
  static translateLimit(operator, value, compareValue) {
    const type = {
      eq: value === compareValue,
      ne: value !== compareValue,
      gt: value > compareValue,
      lt: value < compareValue,
      ge: value >= compareValue,
      le: value <= compareValue
    };
    if (!Object.keys(type).includes(operator) || !value || value === "-")
      return true;
    return type[operator];
  }

  // ...
}

export default MyForm;
```

使用：

```js
import MyForm from "./MyForm";

MyForm.defaultLimit(1, 20);
```

## 数组用法
```js
const arr = [1, 2, 3, 4]

Array.isArray(arr) // 判断是否为数组

arr.includes(2) // true 判断数组中是否包含某项

arr.findIndex(d => d === 3) // 2 找出第一个符合条件的数组成员并返回数组下标, 找不到返回 -1

arr.find(d => d === 3) // 3 找出第一个符合条件的数组成员并返回, 找不到返回 undefined

// es5 其他还有 filter map forEach 等，这里不做举例。
arr.every(d => d > 2) // false 每一项都满足条件则返回 true

arr.some(d => d > 2) // true 只要有一项满足条件则返回 true
```
## element 使用技巧

### 解决form表单嵌套的问题
```javascript
   async validate() {
      let valid = await new Promise(resolve =>
        this.$refs.form.validate(resolve)
      );
      if (valid) {
        // 返回处理后的参数
        return this.handleParam();
      } else {
        //返回假值
        return valid;
      }
    }
```