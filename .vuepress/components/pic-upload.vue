<template>
  <div class="upload-box">
    <div class="avatar-box" :style="`width:${imgWidth};border-radius:${round?'50%':'0'}`">
      <input
        type="file"
        class="input-file"
        :style="`width:${imgWidth};height:${imgHeight};`"
        :name="name"
        ref="avatarInput"
        @change="changeImage($event)"
        accept="image/gif, image/jpeg, image/jpg, image/png"
      >
      <img
        v-if="avatar"
        :src="avatar"
        alt
        :style="`width:${imgWidth};height: ${imgHeight};border-radius:${round?'50%':'0'}`"
      >
      <div
        class="add-box"
        v-else
        :style="`width:${imgWidth};height: ${imgHeight};line-height:${imgHeight}`"
      >
        <i v-if="isLoading" class="el-icon-loading"></i>
        <i v-if="!isLoading" class="el-icon-plus"></i>
      </div>
      <i v-if="isShowClose" class="el-icon-circle-close close" @click="handleRemove"></i>
    </div>
    <p class="tip">{{tip}}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "upload",
  data() {
    return {
      avatar: "",
      isLoading: false
    };
  },
  props: ["imgUrl", "imgWidth", "imgHeight", "tip", "name", "round","action"],
  computed: {
    isShowClose() {
      return this.avatar ? true : false;
    }
  },
  created() {
    this.avatar = this.imgUrl;
  },
  watch: {
    imgUrl(val) {
      this.avatar = val;
    }
  },
  methods: {
    postFile(url, data) {
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      return axios.post(url, data, config).then(res => {
        return Promise.resolve(res.data);
      });
    },
    clearValue() {
      this.$refs.avatarInput.value = "";
    },
    changeImage: function(e) {
      let file = e.target.files[0];
      if (file) {
        let formData = new FormData();
        const isLt8M = file.size / 1024 / 1024 < 8;
        if (!isLt8M) {
          this.$message.error("上传的图片大小不能超过 8MB!");
          return false;
        }
        // 文件对象
        formData.append("file", file);
        this.isLoading = true;
        this.postFile(this.action,formData).then(res => {
          this.isLoading = false;
          if (res.status == 200 && res.data) {
            let data = res.data;
            this.avatar = data.url;
            this.$emit("uploadSuccess", data, this.name);
          }
        });
      }
    },
    handleRemove() {
      this.avatar = "";
      this.clearValue();
      this.$emit("onRemove", this.name);
    }
  }
};
</script>
<style lang="scss" scope>
.upload-box {
  .avatar-box {
    cursor: pointer;
    position: relative;
    text-align: center;
    border: 1px dashed #999;
    background-color: #f6f8fb;
    font-size: 20px;
    width: 100%;
    .input-file {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0;
      cursor: pointer;
    }
    .text {
      padding-top: 10px;
      color: lightblue;
    }
    .close {
      position: absolute;
      top: 5px;
      right: 5px;
      color: #333;
    }
  }
  .tip {
    margin-top: 5px;
    color: #999;
  }
  .add-box {
    i {
      font-size: 25px;
    }
  }
}
</style>
