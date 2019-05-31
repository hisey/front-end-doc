<template>
  <scroll
    class="scroll-demo-wrapper"
    :data="data"
    :pullup="true"
    :pulldown="pulldown"
    @pulldown="loadData"
    @scrollToEnd="loadData"
  >
    <ul class="scroll-demo-content">
      <li :key="index" v-for="(item,index) in data">{{item}}</li>
      <div class="loading-wrapper" >
        <span class="icon iconfont iconloading" v-if="!isFinished"></span>
        <span class="no-data" v-else>没有更多数据了</span>
      </div>
    </ul>
  </scroll>
</template>
<script>
import scroll from "./scroll";
export default {
  name: "scroll-demo",
  components: {
    scroll
  },
  data() {
    return {
      data: [],
      pulldown: true,
      isFinished: false
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      setTimeout(() => {
        if(this.isFinished){
          return false
        }
        let arr = [];
        let len = this.data.length;
        for (let i = 0; i < 10; i++) {
          arr.push(len + i);
        }
        this.data = this.data.concat(arr);
        if (len >= 30) {
          this.isFinished = true;
        } else {
          this.isFinished = false;
        }
      }, 1000);
      //   });
    }
  }
};
</script>

<style scoped lang="scss">
.scroll-demo-wrapper {
  height: 255px;
  width: 165px;
  padding: 0 10px;
  overflow: hidden;
  position: relative;
  text-align: center;
  background-color: #f5f5f5;
}
.iconloading {
  animation: rotating 2s linear infinite;
}
@keyframes rotating {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(1trun);
  }
}
.scroll-demo-content {
  padding-bottom: 20px;
  padding-left: 0;
  li + li {
    border-top: 1px solid #ddd;
  }
  .no-data{
    font-size: 12px;
    color: #999;
  }
}
</style>