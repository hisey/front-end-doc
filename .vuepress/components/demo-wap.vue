<template>
  <div class="demo-wrp">
    <h4>demo演示</h4>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.demo-wrp {
  position: fixed;
  right: 10px;
  z-index: 9999;
  padding: 20px;
  border: 1px solid #ddd;
  h4{
      text-align: center;
      margin: 5px 0 10px 0;
  }
}
</style>

