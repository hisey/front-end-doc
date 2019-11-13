# vue 代码规范推荐

## 必要的

### 为组件样式设置作用域

对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。
这条规则只和单文件组件有关。你不一定要使用 scoped 特性。设置作用域也可以通过 CSS Modules，那是一个基于 class 的类似 BEM 的策略，当然你也可以使用其它的库或约定。
不管怎样，对于组件库，我们应该更倾向于选用基于 class 的策略而不是 scoped 特性。
这让覆写内部样式更容易：使用了常人可理解的 class 名称且没有太高的选择器优先级，而且不太会导致冲突。
了解更多[CSS Modules](https://github.com/css-modules/css-modules)

#### 例子

```js
<template>
  <button :class="[$style.button, $style.buttonClose]">X</button>
</template>

<!-- 使用 CSS Modules -->
<style module>
.button {
  border: none;
  border-radius: 2px;
}

.buttonClose {
  background-color: red;
}
</style>
```

## 强烈推荐

### 单文件组件文件的大小写

单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。
单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X) 和模板中引用组件的方式尽可能的一致。然而，混用文件命名方式有的时候会导致大小写不敏感的文件系统的问题，这也是横线连接命名同样完全可取的原因。

#### 例子

```
components/
|- MyComponent.vue
```

```
components/
|- my-component.vue
```

### 基础组件名

应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。

#### 例子

```
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue
components/
|- VButton.vue
|- VTable.vue
|- VIcon.vue
```

### 单例组件名

只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。

这不意味着组件只可用于一个单页面，而是每个页面只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，只是目前在每个页面里只使用一次。

#### 例子

```
components/
|- TheHeading.vue
|- TheSidebar.vue
```

### 紧密耦合的组件名

和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

```
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
```

```
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```

### 组件名中的单词顺序

组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾

```
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```

### 完整单词的组件名

#### 组件名应该倾向于完整单词而不是缩写。

编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。

#### 反例

```
components/
|- SdSettings.vue
|- UProfOpts.vue
```

#### 好例子

```
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```

### Prop 名大小写
#### 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。
我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。

#### 反例
```
props: {
  'greeting-text': String
}
<WelcomeMessage greetingText="hi"/>
```
#### 好例子
```
props: {
  greetingText: String
}
<WelcomeMessage greeting-text="hi"/>
```

